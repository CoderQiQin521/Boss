import http from "./request";
export const test = params => http.get("/", params);
export const login = params => http.post("/login", params);
