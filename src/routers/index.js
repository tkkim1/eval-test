import { createWebHistory, createRouter } from 'vue-router';
import { colors, useQuasar } from 'quasar';
import { GlobalStore } from '@/store';
import { AuthStore } from '@/store/modules/auth';
import { staticRouter, errorRouter } from './modules/staticRouter';
import { initDynamicRouter } from './modules/dynamicRouter';

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [...staticRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

const $q = useQuasar();

router.beforeEach(async (to, from, next) => {
    console.log('--beforeEach - main ----')
    if (to.path === '/login') return next();
    const globalStore = GlobalStore();
    // console.log('----globalstore--11--',globalStore.token)
    if (!globalStore.token) return next({ path: '/login', replace: true });
    // console.log('----gloablStore token : ----', globalStore.token)
    const authStore = AuthStore();
    if (!authStore.menuListGet.length) {
        await initDynamicRouter();
        return next({ ...to, replace: true });
    } else {
        next();
    }
});

/**
 *
 */
router.afterEach(() => {});

router.onError((error) => {
    console.log(error);
    // $q.notify({
    //     color: 'red-4',
    //     textColor: 'white',
    //     icon: 'cloud_done',
    //     message: 'Router Error',
    // });
});

export default router;
