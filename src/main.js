import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import store from './store' 
import pinia from './store/index.js'
import './assets/main.css'
import axios from 'axios'

const app = createApp(App)

// global defaults setting
// app.config.globalProperties.$CURRENT_PROFILE = process.env.NODE_ENV;
// app.config.globalProperties.$axios = axios;
// axios.defaults.baseURL = process.env.VUE_APP_DS_URL;

// Common Codes
// app.config.globalProperties.$CODE = CODE_CONFIG;
// Common Messages
// app.config.globalProperties.$MESSAGE = MESSAGES_CONFIG;

app.use(router)
    .use(pinia)
    .mount('#app')
