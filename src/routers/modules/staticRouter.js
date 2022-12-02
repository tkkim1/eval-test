import { RouteRecordRaw } from 'vue-router';
/**
 * staticRouter
 */
export const staticRouter = [
    {
        path: '/',
        redirect: '/learninghome',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '로그인',
        },
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/signup/index.vue'),
        meta: {
            title: '회원가입',
        },
    },
    // {
    // 	path: '/exam',
    // 	name: "exam",
    // 	component: () => import("@/views/Exam/index.vue"),
    // 	meta: {
    // 		title: "문제"
    // 	}
    // }
];

/**
 * errorRouter
 */
export const errorRouter = [
    {
        path: '/403',
        name: '403',
        component: () => import('@/components/errorMessage/403.vue'),
        meta: {
            title: '403에러',
        },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/errorMessage/404.vue'),
        meta: {
            title: '404에러',
        },
    },
    {
        path: '/500',
        name: '500',
        component: () => import('@/components/errorMessage/500.vue'),
        meta: {
            title: '500에러',
        },
    },
];

export const notFoundRouter = {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: { name: '404' },
};
