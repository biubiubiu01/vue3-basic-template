import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

import test from "../mock/controller/test";
import user from "../mock/controller/user";

export function setupProdMockServer() {
    createProdMockServer([...test, ...user]);
}
