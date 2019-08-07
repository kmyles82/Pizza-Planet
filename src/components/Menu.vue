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
                            <button class="btn btn-success btn-sm btn-outline" type="button">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return{
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
                },
            }
        }
    }
}
</script>

<style>

</style>
