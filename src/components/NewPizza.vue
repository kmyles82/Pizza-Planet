<template>
    <form action="">
        <h3>Add new pizza:</h3>
        <div class="form-group row">
            <label for="name" class="col-sm-3">Name</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="description" class="col-sm-3">Description</label>
            <div class="col-sm-9">
                <textarea name="description" id="" rows="5" class="form-control" v-model="newPizza.discription"></textarea>
            </div>
        </div>

        <p><strong>Option 1: </strong></p>
        <div class="form-group row">
            <label for="options" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].size">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].price">
            </div>
        </div>

        <p><strong>Option 2</strong></p>
        <div class="form-group row">
            <label for="price" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].size">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].price">
            </div>
        </div>

        <div class="form-group row">
            <button 
                class="btn btn-success btn-block" 
                type="button"
                @click="addMenuItem">Add</button>
        </div>
    </form>
</template>

<script>
import { dbMenuRef } from '../firebaseConfig'
export default {
    name: 'NewPizza',
    data(){
        return{
            newPizza: {
                name: 'Rg. Magherita',
                discription: 'Eg. A delicious tomato based pizza topped with mozzarella',
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
            }
        }
    },
    methods:{
        addMenuItem(){
            dbMenuRef.push(this.newPizza);
        }
    }
}
</script>

<style>

</style>
