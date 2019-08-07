import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: {
      1: {
        name: 'Magherita',
        discription: 'A delicious tomato based pizza topped with mozzarella',
        options: [{
            size: 9,
            price: 6.95
          },
          {
            size: 12,
            price: 10.95
          }
        ]
      },
      2: {
        name: 'Pepperoni',
        discription: 'A delicious tomato based pizza topped with mozzarella and pepperoni',
        options: [{
            size: 9,
            price: 7.95
          },
          {
            size: 12,
            price: 12.95
          }
        ]
      },
      3: {
        name: 'Ham and Pineapple',
        discription: 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
        options: [{
            size: 9,
            price: 7.95
          },
          {
            size: 12,
            price: 12.95
          }
        ]
      }
    },
    orders: [],
    currentUser: null,
  },
  mutations: {
    //add pizzas to orders array
    addOrder: (state, orders) => state.orders.push(orders),
    addUserStatus(state, user) {
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('userStatus', user)
    }
  },
  getters: {
    getMenuItems: state =>  state.menuItems,
    numberOfOrders: state => state.orders.length,
    
  }
})
