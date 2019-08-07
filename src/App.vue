<template>
  <v-app>
    <div class="container">
      <pp-header />
    </div>
    <div class="container">
      <router-view>
        
      </router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <div class="container">
      <pp-footer />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    ppHeader: Header,
    ppFooter: Footer,
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>

</style>