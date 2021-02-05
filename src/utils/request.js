import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/'


const AUTH_TOKEN = localStorage.getItem("auth-token");

if (AUTH_TOKEN) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
}

axios.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('auth-token');
        request.headers.Authorization = token ? `Bearer ${token}` : '';
        // Edit request config
        return request;
    },
    (error) => {
        console.log(error.message);
        return Promise.reject(error);
    }
);

// axios.interceptors.response.use(
// 	(response) => {
// 		console.log(response);
// 		// Edit response config
// 		return response;
// 	},
// 	(error) => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	}
// );

export default axios;
