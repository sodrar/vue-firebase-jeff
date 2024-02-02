import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'

const routes = [
    {
        path: "/login",
        name: 'login',
        component: Login
    }
]