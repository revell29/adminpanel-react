import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

axios.defaults.baseURL = API_URL;

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Authorization"] = token;
// axios.defaults.headers.common["X-Requestd-With"] = "XMLHttpRequest";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export default axios;
