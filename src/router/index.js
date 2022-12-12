import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorldCup from '../views/worldcup/WorldCup.vue'
import SlotParent from '../views/test-slot/SlotParent.vue'
import MyParse from '../views/myparse/Myparse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/worldcup',
      name: 'WorldCup',
      component: WorldCup,
    },
    {
      path: '/slot',
      name: 'SlotParent',
      component: SlotParent,
    },
    {
      path: '/myparse',
      name: 'MyParse',
      component: MyParse,
    },
  ],
})

export default router
