import { Icons } from "@/plugins/icon";

const getSvgIconList = (): string[] => {
    const modules = import.meta.glob("@/icons/**/*.svg", { eager: true, import: "default" });
    const re = "([^/]*)(\\.\\w+)$";
    return Object.keys(modules).map((item) => <string>item.match(re)?.[1]);
};

const getElIconList = (): string[] => {
    return Object.keys(Icons);
};

export const elIconList = getElIconList();

export const svgIconList = getSvgIconList();

export const allIconList = [...elIconList, ...svgIconList.map((item) => `svg-${item}`)];
