<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">PIZZA PLANET</a>
      <ul class="navbar-nav">
          <router-link to="/" tag="li">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link to="/menu" tag="li">
            <a href="" class="nav-link">Menu</a>
          </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({})
};
</script>

<style >
header{
  margin-bottom: 20px;
}

.navbar-brand{
  font-size: 1.5em;
}
</style>
