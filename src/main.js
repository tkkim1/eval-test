import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './routers';
// import store from './store';
import pinia from '@/store/index';
import { Quasar, Notify, AppFullscreen } from 'quasar';
import quasarLang from 'quasar/lang/ko-KR';
import CODE_CONFIG from '@/helpers/krt-common-codes/code.config';
import MESSAGES_CONFIG from '@/helpers/utils';

// scss
import './assets/stylesheet/font.scss';
import './assets/stylesheet/layout.scss';
import './assets/stylesheet/normalize.scss';

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);

// global defaults setting
app.config.globalProperties.$CURRENT_PROFILE = process.env.NODE_ENV;
app.config.globalProperties.$axios = axios;
// axios.defaults.baseURL = process.env.VUE_APP_DS_URL;

// Common Codes
app.config.globalProperties.$CODE = CODE_CONFIG;
// Common Messages
app.config.globalProperties.$MESSAGE = MESSAGES_CONFIG;

app.use(pinia)
    .use(router)
    .use(Quasar, {
        plugins: { Notify, AppFullscreen }, // import Quasar plugins and add here
        lang: quasarLang,
    })
    .mount('#app');
