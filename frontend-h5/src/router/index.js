import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/home/ExploreView.vue'
import HomeView from '@/views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/home/explore',
          name: 'explore',
          component: ExploreView,
        },
        {
          path: '/home/follow',
          name: 'follow',
          component: () => import('@/views/home/FollowView.vue'),
        },
        {
          path: '/home/nearby',
          name: 'nearby',
          component: () => import('@/views/home/NearbyView.vue'),
        },
      ],
    },
  ],
})

export default router
