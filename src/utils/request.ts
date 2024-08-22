import { getStorage } from '@/utils/index';
import axios, { type AxiosRequestHeaders, type AxiosRequestConfig, type AxiosResponse } from 'axios';

type responseData = {
	code: number;
	data: Array<any> | any;
	message: string;
};

type requestCallback = (res: responseData) => void;

const service = axios.create({
	baseURL: process.env.NODE_ENV == 'development' ? '/' : process.env.VUE_APP_BASE_API,
	timeout: 5000,
	withCredentials: false,
});

// Request interceptors
service.interceptors.request.use(
	config => {
		const token = getStorage('token');
		const customerHeaders: Partial<AxiosRequestHeaders> = {
			'Content-Type': 'application/json;charset=utf-8',
		};
		if (token) {
			customerHeaders.token = token;
		}
		config.headers = Object.assign(config.headers, customerHeaders);
		return config;
	},
	error => {
		Promise.reject(error);
	},
);

// Response interceptors
service.interceptors.response.use(
	response => {
		const res = response.data;
		const code = res.code as number;

		if (code === 403) {
			//
			return Promise.reject(res.msg);
		}

		if (code !== 200) {
			return Promise.reject(new Error(res.msg));
		} else {
			return res;
		}
	},
	error => {
		return Promise.reject(error);
	},
);

function request(requestData: AxiosRequestConfig, successCallback: requestCallback, errorCallback?: requestCallback) {
	service({ ...requestData })
		.then((res: AxiosResponse<any, any>) => {
			const data: responseData = res.data;
			successCallback(data);
		})
		.catch((err: responseData) => {
			if (errorCallback) {
				errorCallback(err);
			}
		});
}

export { service };
export default request;
