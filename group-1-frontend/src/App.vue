<template>
  <div class="header">
    <a href="/"><img src="./assets/Classly logo.png" alt=""></a>
    <div class="router_links">
      <router-link to="/"  style="color: #fff;">Home</router-link>
      <router-link to="/add"   style="color: #fff;">Add</router-link>
      <router-link to="/about"   style="color: #fff;">About</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import HomeView from "./components/HomeView.vue"
  import AddView from "./components/AddView.vue"
  import AboutView from "./components/AboutView.vue"

  export default{
    name: "App",
    components: {
    HomeView,
    AddView,
    AboutView
}
  }
</script>



<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

router-link{
  color: #fff;
}
</style>
