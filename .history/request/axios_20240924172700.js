
import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
    baseURL: 'http://localzexishuhua.com/api', // 设置基础URL
    timeout: 10000, // 请求超时设置
});

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 在请求发送之前做一些处理，比如添加token等
        // config.headers['Authorization'] = 'Bearer ' + token; // 示例
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        // 处理响应数据
        return response.data; // 默认返回data部分
    },
    error => {
        // 处理响应错误
        return Promise.reject(error.response ? error.response.data : error);
    }
);

// 封装GET请求
export const getRequest = (url, params) => {
    return instance.get(url, { params });
};

// 封装POST请求
export const postRequest = (url, data) => {
    return instance.post(url, data);
};

// 可以根据需要添加其他请求方法，比如put、delete等
export const putRequest = (url, data) => {
    return instance.put(url, data);
};

export const deleteRequest = (url) => {
    return instance.delete(url);
};
