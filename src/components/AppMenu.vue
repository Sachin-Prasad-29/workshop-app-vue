<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand" exact-active-class="active"> Workshops App </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/" exact-active-class="active"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/workshops" exact-active-class="active">
                List of workshops
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    console.log('data for appmenu instance');
    return {};
  },
};
</script>

<style scoped>
.active {
  color: black;
}
</style>
