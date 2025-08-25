import axios from 'axios';

const API_BASE_URL = 'http://192.168.29.88:8000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  console.log('🚀 API Request:', config.method?.toUpperCase(), config.url, config.data);
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Success:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.status, error.response?.data || error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

const authService = {
  // Login user
  login: async (username, password) => {
    const response = await api.post('/api/login/', {
      username,
      password
    });
    return response.data;
  },

  // Register user
  signup: async (userData) => {
    const response = await api.post('/api/signup/', userData);
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await api.post('/api/logout/');
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/api/profile/');
    return response.data.user || response.data;
  }
};

export default authService;
