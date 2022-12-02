import axios from 'axios';
import { GlobalStore } from '@/store';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
const service = axios.create({
    // withCredentials: true,
    // timeout: 1000 * 60 * 30 // TimeOut 30분으로 설정
    // baseURL: process.env.VUE_APP_API_URL,
});

service.interceptors.request.use(
    (config) => {
        // 헤더 토큰을 발급받은 토큰으로 설정
        const globalStore = GlobalStore();
        const token = globalStore.token;
        config.headers.Authorization = `Bearer ` + token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
/**
 * Response interceptor
 */
service.interceptors.response.use(
    (response) => {
        // todo: 공통 예외처리 필요할시 처리
        return response;
    },
    async (error) => {
        const globalStore = GlobalStore();
        const originalRequest = error.config;
        if (
            error &&
            error.response &&
            error.response.status &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            const gtoken = globalStore.token;
            const rtoken = globalStore.retoken;
            if (isRefreshing) {
                return new Promise(function refFunc(resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        // originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
                        originalRequest.headers.Authorization =
                            `Bearer ` + gtoken;
                        return axios(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }
            originalRequest._retry = true;
            isRefreshing = true;
            // const refreshToken = localStorage.getItem('refreshToken');
            return axios
                .post(
                    `/api/user/refresh`,
                    { rtoken },
                    {
                        headers: { Authorization: `Bearer ` + rtoken },
                    },
                )
                .then((response) => {
                    if (
                        response?.data?.message &&
                        response?.data?.message.indexOf('성공') > -1
                    ) {
                        // 리턴값
                        const returnData = response.data.result;
                        // 토큰 쿠키 저장
                        const {
                            accessToken: newAccessToken,
                            refreshToken: newRefreshToken,
                        } = returnData.token;
                        globalStore.setToken(newAccessToken);
                        globalStore.setReToken(newRefreshToken);
                        // 헤더 토큰을 새로 발급받은 토큰으로 재설정
                        service.defaults.headers.common.Authorization =
                            `Bearer ` + newAccessToken;
                        processQueue(null, returnData.AccessToken);
                        // 반환
                        return service(originalRequest);
                    }
                    processQueue(error, null);
                    window.location.href = '/login';
                })
                .catch((error) => {
                    processQueue(error, null);
                    window.location.href = '/login';
                })
                .finally(() => {
                    isRefreshing = false;
                });
        }
        console.error(error?.response);
    },
);
export default service;
