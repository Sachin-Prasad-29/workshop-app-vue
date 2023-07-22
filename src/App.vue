<template>
  <div>
    <AppMenu />
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue';
// import AppHome from './components/AppHome.vue'
// import WorkshopsList from './components/WorkshopsList.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    // AppHome,
    // WorkshopsList
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
