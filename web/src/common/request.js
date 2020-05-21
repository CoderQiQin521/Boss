import axios from 'axios'

const http = axios.create(
  {
    baseURL: 'http://localhost:3000/api',
    timeout: 6000
  }
)

http.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return err
})

http.interceptors.response.use(function (response) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`接口地址: ${response.config.url}`, response.data);
  }

  if (response.data.code !== 0) {
    // todo: toast提醒
    alert(response.data.msg)
    return Promise.reject(response.data)
  }
  return response.data
}, function (err) {
  return err
})

export default http



/*
http.interceptor.response(
  response => {
if (process.env.NODE_ENV === 'development') {
  console.log(`接口地址: ${response.config.url}`, response.data)
}
if (response.statusCode !== 200) {
  return Promise.reject(response)
}
if (response.data.code === 1) {

} else if (response.data.code === 601 || response.data.code === 600) {
  uni.reLaunch({
    url: '/pages/login/login'
  });
} else {
  uni.showToast({
    title: response.data.msg,
    icon: "none"
  });
}
return Promise.resolve(response.data)
  },
err => {
  return err
}
)
*/