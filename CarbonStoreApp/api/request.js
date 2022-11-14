// import axios from "axios";

// // 1.利用axios对象的方法create，创建一个axios实例
// const requests = axios.create({
// 	baseURL: 'http://localhost:3000/app',
// 	timeout: 5000,
// })
// // 配置请求拦截器
// requests.interceptors.request.use(config => {
// 	config.headers.authorization = uni.getStorageSync("token");
// 	return config;
// }, error => {
// 	console.log("err:" + error);
// })
// // 配置响应拦截器
// requests.interceptors.response.use(response => {
// 	return response.data;
// }, error => {
// 	console.log("err:" + error);
// })
// export default requests;
