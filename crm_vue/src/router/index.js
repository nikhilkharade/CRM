import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Signup from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import DashBoard from '../views/dashboard/DashBoard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: Signup
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    meta : {
      requireLogin : true
    }
  },
  {
    path: '/dashboard/myAccount',
    name: 'MyAccount',
    component: MyAccount,
    meta : {
      requireLogin : true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to , from , next) => {
  if(to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/sign-in')
  } else {
    next()
  }
} )
export default router
