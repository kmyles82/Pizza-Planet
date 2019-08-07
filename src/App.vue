<template>
  <v-app>
    <div class="container">
      <pp-header />
    </div>
    <div class="container">
      <router-view></router-view>
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