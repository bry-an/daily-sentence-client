const axios = require('axios');

const instance = axios.create({
    baseURL: process.NODE_ENV !== 'production' ? 'http://localhost:5001/' : process.env.baseURL,
    timeout: 5000,
});

export default instance;
