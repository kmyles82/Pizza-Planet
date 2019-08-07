import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import Admin from './components/Admin.vue'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    , {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
    , {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
    , {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
