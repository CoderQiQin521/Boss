import axios from "axios";
import { Toast } from "vant";
const { ip } = require("../../../config");

const http = axios.create({
  // 环境判断  开发-生产   家-公司
  // baseURL: "http://127.0.0.1:3000/api",
  baseURL: `http://${ip}:3000/api`,
  timeout: 6000
});

http.interceptors.request.use(
  function(config) {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + (token || "");
    }
    return config;
  },
  function(err) {
    return err;
  }
);

http.interceptors.response.use(
  function(response) {
    if (process.env.NODE_ENV === "development") {
      console.log(`接口地址: ${response.config.url}`, response.data);
    }

    if (response.data.code !== 0) {
      // todo: toast提醒
      Toast(response.data.msg);
      return response.data;
    }
    return response.data;
  },
  function(err) {
    return err;
  }
);

export default http;
