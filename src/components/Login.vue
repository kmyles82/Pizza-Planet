<template>
    <div class="row">
        <form>
            <div class="form-group">
                <label for="password">Email Address</label>
                <input type="password" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <button class="btn btn-primary" type="button" @click.prevent="signIn">Sign In</button>
            <button class="btn btn-danger" type="button" @click.prevent="signOut">Sign Out</button>
        </form>
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {
    name: 'Login',
    data(){
        return{

        }
    },
    methods: {
        signIn(){
            
        },
        signOut(){

        }
    }
}
</script>

<style>

</style>
