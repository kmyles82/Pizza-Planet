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
                                <button class="btn btn-sm" type="button">-</button>
                                <span>{{item.quantity}}</span>
                                <button class="btn btn-sm" type="button">+</button>
                            </td>
                            <td>{{item.name}} {{item.size}}"</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{}}</p>
                <button class="btn btn-success btn-block">Place Order</button>
            </div>
            <div v-else>
                <p>{{basketText}}</p>
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
            getMenuItems: {
                1: {
                    name: 'Magherita',
                    discription: 'A delicious tomato based pizza topped with mozzarella',
                    options: [
                        {
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
                    options: [
                        {
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
                    options: [
                        {
                            size: 9,
                            price: 7.95
                        },
                        {
                            size: 12,
                            price: 12.95
                        }
                    ]
                }
            }
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
        }
    },
}
</script>

<style>

</style>
