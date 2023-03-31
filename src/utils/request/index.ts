import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { useEnv, useMessage } from "@/hooks";
import { ResultEnum, ContentTypeEnum, ErrorMsgEnum } from "@/enums/httpEnum";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { AxiosLoading } from "./loading";
import { AxiosCancel } from "./cancel";
import { AxiosRetry } from "./retry";

interface axiosConfig {
    cancelSame?: boolean;
    retryCount?: number;
    isRetry?: boolean;
    loading?: boolean;
}

const defaultConfig: axiosConfig = {
    cancelSame: false,
    isRetry: false,
    retryCount: 3,
    loading: true
};

const { VITE_BASE_API } = useEnv();

const axiosCancel = new AxiosCancel();

const axiosLoading = new AxiosLoading();

const { error } = useMessage();

const service: AxiosInstance = axios.create({
    baseURL: VITE_BASE_API,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": ContentTypeEnum.JSON }
});

service.interceptors.request.use((config: any) => {
    const { getToken } = useUserStoreWithOut();
    // @ts-ignore
    const { cancelSame, loading } = config.requestOptions;
    if (cancelSame) {
        axiosCancel.addPending(config);
    }

    if (getToken) {
        config!.headers!.Authorization = unref(`Bearer ${getToken}`) ?? "";
    }
    if (loading) {
        axiosLoading.addLoading();
    }

    return config;
});

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const data = response.data;
        axiosCancel.removePending(response.config);
        if (data.code === ResultEnum.SUCCESS) {
            return data;
        } else {
            return Promise.reject(data);
        }
    },
    (err) => {
        if (err.code === "ERR_CANCELED") return;
        const { isRetry, retryCount } = err.config.requestOptions;
        if (isRetry && (err.config._retryCount || 0) < retryCount) {
            const axiosRetry = new AxiosRetry();
            axiosRetry.retry(service, err);
            return;
        }
        axiosCancel.removePending(err.config || {});
        let message = err.response?.message || "";
        if (!message) {
            switch (err.response.status) {
                case 400:
                    message = ErrorMsgEnum.ERROR_400;
                    break;
                case 401:
                    message = ErrorMsgEnum.ERROR_401;
                    break;
                case 403:
                    message = ErrorMsgEnum.ERROR_403;
                    break;
                case 404:
                    message = ErrorMsgEnum.ERROR_404;
                    break;
                case 500:
                    message = ErrorMsgEnum.ERROR_500;
                    break;
                case 503:
                    message = ErrorMsgEnum.ERROR_503;
                    break;
                case 504:
                    message = ErrorMsgEnum.ERROR_504;
                    break;
            }
        }
        error(message);
        return Promise.reject(err.response);
    }
);

const request = {
    get<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
        return request.request("GET", url, { params: data }, config);
    },
    post<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
        return request.request("POST", url, { data }, config);
    },
    put<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
        return request.request("PUT", url, { data }, config);
    },
    delete<T = any>(url: string, data?: any, config?: axiosConfig): Promise<T> {
        return request.request("DELETE", url, { params: data }, config);
    },
    request<T = any>(method = "GET", url: string, data?: any, config?: axiosConfig): Promise<T> {
        const options = Object.assign({}, defaultConfig, config);
        return new Promise((resolve, reject) => {
            service({ method, url, ...data, requestOptions: options })
                .then((res) => {
                    resolve(res as unknown as Promise<T>);
                })
                .catch((e: Error | AxiosError) => {
                    reject(e);
                })
                .finally(() => {
                    if (options.loading) {
                        axiosLoading.closeLoading();
                    }
                });
        });
    }
};

export default request;
