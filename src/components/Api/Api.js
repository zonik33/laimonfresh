import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://promo.laimonfresh.ch/backend/api/',

});
const setAuthToken = (token) => {
    if (token) {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete Api.defaults.headers.common['Authorization'];
    }
};


export default Api;