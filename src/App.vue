<template>
  <v-app>
    <div class="container">
      <pp-header />
      <!-- <v-content> -->
      <!-- </v-content> -->
    </div>
    <div class="container">
      <!-- <pp-Home/> -->
      <pp-menu />
    </div>
    <div class="container">
      <pp-footer />
    </div>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    ppHome: Home,
    ppHeader: Header,
    ppFooter: Footer,
    ppMenu: Menu
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