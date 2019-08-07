<template>
    <div class="row">

        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody  v-for="(pizza, index) in getMenuItems" :key="index">
                    <tr>
                        <td><strong>{{pizza.name}}</strong></td>
                    </tr>
                    <tr v-for="(option,index) in pizza.options" :key="index">
                        <td>{{option.size}}"</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button 
                                class="btn btn-success btn-sm btn-outline-success" 
                                type="button"
                                v-on:click.prevent="addToBasket(pizza, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Shopping Basket -->
        <div class="col-sm-12 col-md-6" >
            <div v-if="basket.length > 0">
                <table class="table table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in basket" :key="index">
                        <tr>
                            <td>
                                <button class="btn btn-sm" type="button" @click="decreaseQuantity(item)">-</button>
                                <span>{{item.quantity}}</span>
                                <button class="btn btn-sm" type="button" @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{item.name}} {{item.size}}"</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{}}</p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{basketText}}</p> {{$store.state.orders}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return{
            basket: [],
            basketText: 'Your basket is empty',
            
        }
    },
    methods:{
        addToBasket(pizza, option){
            this.basket.push({
                name: pizza.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        increaseQuantity(item){
            item.quantity++;
        },
        decreaseQuantity(item){
            item.quantity--;
            
            if(item.quantity === 0){
                this.removeFromBasket(item);
            }
        },
        addNewOrder(){
            this.$store.commit('addOrder', this.basket);
            this.basket = [];
            this.basketText = 'Thank you, Your order has been placed.  😇' ;
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1)
        }
    },
    //access data from store
    computed:{
        getMenuItems(){
            return this.$store.getters.getMenuItems
        },
        
    }
}
</script>

<style>

</style>
