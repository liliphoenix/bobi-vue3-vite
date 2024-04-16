import type { routeRaw } from '@/types'

export const basicRoutes: routeRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          role: 0
        },
        component: import('view/Home.vue'),
        children: []
      }
    ]
  },
  {
    name: 'test',
    path: '/test',
    component: import('view/TestPage.vue'),
    meta: {
      role: 0
    }
  },
  {
    name: '404',
    path: '/404',
    component: import('view/404Page.vue'),
    meta: {
      role: 0
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]
