import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',  
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor cho request (thêm token vào header nếu có)
axiosInstance.interceptors.request.use(
  (config) => {
    // Kiểm tra xem có token trong localStorage không
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response (kiểm tra lỗi hoặc xử lý token hết hạn)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Xử lý khi token hết hạn hoặc không hợp lệ
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
