
// axios for fetching data
import axios from "axios";

// create instance with base url
const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;