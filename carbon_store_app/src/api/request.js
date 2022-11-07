import axios from "axios";

// 1.利用axios对象的方法create，创建一个axios实例
const requests = axios.create({
    baseURL:'/app',
    timeout:5000,
})
// 配置请求拦截器
requests.interceptors.request.use(config=>{
    return config;
})
// 配置响应拦截器
requests.interceptors.response.use(res=>{
    return res.data;
},err => {
    return Promise.reject(new Error('faile'));
})

export default requests;