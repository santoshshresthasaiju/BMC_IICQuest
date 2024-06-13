import axios from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',  // Replace with your backend URL
  timeout: 10000,  // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for setting up common headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Perform any actions before the request is sent
    // For example, setting headers or logging
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Any successful response goes through this function
    return response;
  },
  (error) => {
    // Handle HTTP errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('HTTP error:', error.response.status);
      console.error('Response data:', error.response.data);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
