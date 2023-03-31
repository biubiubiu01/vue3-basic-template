import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import test from "./controller/test";
import user from "./controller/user";

export function setupProdMockServer() {
    createProdMockServer([...test, ...user]);
}
