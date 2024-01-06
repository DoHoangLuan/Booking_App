import axios from 'axios'


const BASE_URL = 'http://localhost:3001/api/v1'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
})

axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        config.headers["access-token"] = accessToken
    }
    return config
})


export const createBooking = async (data) => {
    try {
        const response = await axiosInstance.post('/booking', { data });
        console.log(response);
    } catch (error) {
        console.error('Error creating booking:', error);
    }
};



export default axiosInstance