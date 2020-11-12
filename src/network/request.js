import axios from 'axios'

export function instance (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
  });

  // instance.interceptors.request.use(config => {

  //   return config;
  // }, err => {

  // });

  //拦截响应
  instance.interceptors.response.use(res => {

    return res.data;
  }, err => {
    
  });

  return instance(config);
}