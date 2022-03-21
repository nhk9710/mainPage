import { createWebHistory, createRouter } from "vue-router";

const routes =[
    {
        path: '/',
        name: 'Main',
        component: () => import('./layouts/Profile.vue'),
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});