import router from '@/routers/index';
import { AuthStore } from '@/store/modules/auth';
import { useQuasar } from 'quasar';
import modules from '@/views/index';
import { notFoundRouter } from '@/routers/modules/staticRouter';

export const initDynamicRouter = async () => {
    try {
        console.log('initDynamicRouter');
        console.log(modules);
        const $q = useQuasar();

        const authStore = AuthStore();
        await authStore.getMenuList();
        let dynamicRouter = JSON.parse(JSON.stringify(authStore.menuList));

        if (!authStore.menuListGet.length) {
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message:
                    '현재 계정에는 메뉴 권한이 없습니다. 시스템 관리자에게 문의하세요!',
            });
            router.replace('/login');
            return Promise.reject('No permission');
        }
        dynamicRouter.forEach((item) => {
            console.log(item);
            if (item.children) delete item.children;
            if (item.component) item.component = modules[item.name];
            router.addRoute(item);
            // if (item.meta.isFull) {
            // 	router.addRoute(item);
            // } else {
            // 	router.addRoute("layout", item);
            // }
        });
        router.addRoute(notFoundRouter);
    } catch (error) {
        router.replace('/login');
        return Promise.reject(error);
    }
};
