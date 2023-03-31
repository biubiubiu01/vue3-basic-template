import { Router } from "vue-router";
import { usePageSetting } from "@/hooks";

export const createPageTitle = (router: Router) => {
    const { setPageTitle } = usePageSetting();

    router.beforeEach((to) => {
        setPageTitle(to.meta.title as string);
        return true;
    });
};
