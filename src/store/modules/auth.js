import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';
import { menuData } from '../menuData';

// AuthStore
export const AuthStore = defineStore({
    id: 'AuthState',
    state: () => ({
        menuList: [],
    }),
    getters: {
        menuListGet: (state) => state.menuList,
    },
    actions: {
        // getAuthMenuList
        async getMenuList() {
            // todo: 사용자별 메뉴 리스트를 그리게 변경
            // const { menuData } = await getMenuListApi();
            console.log('getMenuList()');
            console.log(menuData);
            this.menuList = menuData;
        },
    },
    // persist: piniaPersistConfig('AuthState', ['authMenuList']),
});
