import axios, { AxiosRequestConfig } from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
});

export default {
	async get(path: string, params?: AxiosRequestConfig) {
		return await client(path, params).then(res => Promise.resolve(res)).catch(err => Promise.reject(err));
	},
};
