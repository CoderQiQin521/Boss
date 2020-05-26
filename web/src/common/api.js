import http from "./request";
export const test = params => http.get("/", params);
export const login = params => http.post("/login", params);
export const register = params => http.post("/register", params);
export const userInfo = params => http.get("/userinfo", params);
export const saveInfo = params => http.post("/save", params);
