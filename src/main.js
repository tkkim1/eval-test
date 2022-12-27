import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import store from './store' 
import pinia from './store/index.js'
import './assets/main.css'

const app = createApp(App)

app.use(router)
    .use(pinia)
    .mount('#app')
