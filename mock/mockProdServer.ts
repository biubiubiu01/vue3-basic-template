import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import user from "./controller/user";

export function setupProdMockServer() {
    createProdMockServer([...user]);
}
