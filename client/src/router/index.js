import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

import ExplorerLayout from '@/layouts/ExplorerLayout'
import LandingLayout from '@/layouts/LandingLayout'

import HomeView from '@/views/Explore/HomeView'
import BlogItem from '@/views/Explore/BlogItem'
import Account from '@/views/Explore/Account'
import AllBlog from '@/views/Explore/AllBlog'

import RegisterView from '@/views/Landing/RegisterView'
import LoginView from '@/views/Landing/LoginView'
import IndexView from '@/views/Landing/IndexView'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: IndexView
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterView
      },
      {
        path: 'login',
        name: 'login',
        component: LoginView
      },
    ],
    beforeEnter: (to, from, next) =>  {
      if (Cookies.get('token')) {
        window.location.href = '/explore'
      } else {
        next();
      }
    }
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExplorerLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/:id',
        name: 'BlogItem',
        component: BlogItem
      },
      {
        path: '/account',
        name: 'Account',
        component: Account
      },
      {
        path: '/allBlog',
        name: 'AllBlog',
        component: AllBlog
      }
    ],
    beforeEnter: (to, from, next) =>  {
      if (!Cookies.get('token')) {
        window.location.href = '/'
      } else {
        next();
      }
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
