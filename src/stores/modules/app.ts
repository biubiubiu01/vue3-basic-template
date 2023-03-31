import { defineStore } from "pinia";
import { store } from "../index";

export interface MenuSetting {
    collapse: boolean;
}

export const useAppStore = defineStore({
    id: "app",
    persist: true,
    state: (): MenuSetting => ({
        collapse: false
    }),
    getters: {},
    actions: {
        setCollapse(collapse: boolean): void {
            this.collapse = collapse;
        }
    }
});

// 便于外部使用
export const useAppStoreWithOut = () => {
    return useAppStore(store);
};
