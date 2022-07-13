<template>
  <div>
    <AppMenu />
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from "./components/AppMenu";
// import AppHome from './components/AppHome'
// import WorkShopsList from './components/WorkShopsList'

export default {
  name: "App",
  components: {
    AppMenu,
    // AppHome,
    // WorkShopsList,
  },
};
</script>
#app { font-family: Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing:
grayscale; text-align: center; color: #2c3e50; margin-top: 60px; }

<style></style>
