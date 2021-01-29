import { createRouter, createWebHistory } from 'vue-router';
import Layout from 'layouts/index.vue'

export const routes = [
  {
    path: "/",
    component: Layout,
    alwaysShow: true,
    meta: { title: '导航', icon: "el-icon-setting"  },
    children: [
      {
        path: "/home",
        component: () => import('views/home.vue'),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router