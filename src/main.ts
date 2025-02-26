import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// Setup default axios configuration
const apiBaseUrl = import.meta.env?.VITE_API_BASE_URL || 'http://localhost:8000/api';
axios.defaults.baseURL = apiBaseUrl;

// Create the app
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
