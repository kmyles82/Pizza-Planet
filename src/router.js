import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import Admin from './components/Admin.vue'
import OrderingGuide from './components/OrderGuide.vue'

Vue.use(Router)



export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeLink',
      components: {
        default: Home,
        "ordering-guide": OrderingGuide,
        "history": History,
        "delivery": Delivery
      }
    },
    , {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      children: [ {
          path: '/contact',
          name: 'contactLink',
          component: Contact
      },
        {
          path: '/history',
          name: 'historyLink',
          component: History
        }, {
          path: '/delivery',
          name: 'deliveryLink',
          component: Delivery
        }, {
          path: '/ordering-guide',
          component: OrderingGuide,
          name: 'orderingLink'
        }
      ]
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin,
      beforeEnter: (to, from, next) => {
        alert('This page is for authorized users only, please login to continue');
        next()
      },
      
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
