import { defineStore, createPinia } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { menuData } from './menuData';

export const GlobalStore = defineStore({
    id: 'GlobalState',
    // state
    state: () => ({
        // token
        token: '',
        retoken: '',
        version: '',
        userInfo: '',
    }),
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
    },
    actions: {
        // setToken
        setToken(token) {
            this.token = token;
        },
        setReToken(token) {
            this.retoken = token;
        },
        setVersion(version) {
            this.version = version;
        },
        // setUserInfo
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
    },
    persist: piniaPersistConfig('GlobalState'),
});

// piniaPersist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
