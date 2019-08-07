<template>
  <footer class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link to="/" tag="li">
          <a href="" class="nav-link">Home</a>
        </router-link>
        <router-link to="/menu" tag="li">
          <a href="" class="nav-link">Menu</a>
        </router-link>
        <router-link to="/admin" tag="li">
          <a href="" class="nav-link">Admin</a>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({})
};
</script>

<style>

</style>
