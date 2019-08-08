<template>
  <div>
    <div class="row">
      <div class="col-sm12 col-md-6">
        <!-- new pizza components -->
        <pp-new-pizza/>
      </div>
      <div class="col-sm12 col-md-6">
        <h3>Menu</h3>
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Remove from menu</th>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.key">
            <tr>
              <td>{{item.name}}</td>
              <td>
                <button class="btn btn-sm btn-outline-danger">X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3>Current orders: {{numberOfOrders}}</h3>
        <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders.key">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <div class="order-number">
            <strong>
              <em>Order Number: {{index + 1}}</em>
            </strong>
            <button class="btn btn-sm btn-outline-danger">X</button>
          </div>
            <tbody>
              <tr v-for="(orderItems,index) in orders" :key="index">
                <td>{{orderItems.name}}</td>
                <td>{{orderItems.size}}"</td>
                <td>{{orderItems.quantity}}</td>
                <td>{{orderItems.price}}</td>
              </tr>
            </tbody>
        </table>
      </div>
      
    </div>
    <hr>
      <div class="row">
          <div class="col-sm-12 col-lg-6">
              <pp-login/>
          </div>
      </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'
import Login from './Login'
import { mapGetters} from 'vuex'

export default {
  name: "adminLink",
  components: {
      ppNewPizza: NewPizza,
      ppLogin: Login
  },
  data() {
    return {
      // name: 'Kerry'
    };
  },
  beforeRouteLeave (to, from, next) {
    // ...
    if(confirm('Have you remember to logout?') === true){
      next()
    } else {
      next(false)
    }
  },
  //access data from store
    computed:{
      ...mapGetters([
        'numberOfOrders',
        'getMenuItems',
        'getOrders'
      ])
        // getMenuItems(){
        //     return this.$store.getters.getMenuItems
        // },
        // numberOfOrders(){
        //   return this.$store.getters.numberOfOrders
        // }
    },
};
</script>

<style>
</style>
