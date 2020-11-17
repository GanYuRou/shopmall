import axios from 'axios'

export function request (config) {

  const instance = axios.create({
    // 具体接口找老师要
    baseURL: 'XXX',
  });

  // instance.interceptors.request.use(config => {

  //   return config;
  // }, err => {

  // });

  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  });

  return instance(config);
}