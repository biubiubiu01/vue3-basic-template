export const usePageSetting = () => {
    const getSystemTitle = "Vue3 Basic Template";

    const setPageTitle = (title: string) => {
        document.title = title ? `${title}-${getSystemTitle}` : <string>getSystemTitle;
    };
    return {
        setPageTitle
    };
};
