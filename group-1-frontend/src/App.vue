<template>
  <div>

    <nav>
      View
      Add
      About
    </nav>
    <HomeView></HomeView>
    <AddView></AddView>
    <UpdateView></UpdateView>
    <AboutView></AboutView>
  </div>

</template>

<script>
  import HomeView from "./components/HomeView.vue"
  import AddView from "./components/AddView.vue"
  import UpdateView from "./components/UpdateView.vue"
  import AboutView from "./components/AboutView.vue"

  export default{
    name: "App",
    components: {
    HomeView,
    AddView,
    UpdateView,
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
</style>
