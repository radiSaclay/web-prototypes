<template>
  <main id="app">
    <!-- Make sure all your bars are the first things in your <body> -->
    <header class="bar bar-nav">
      <router-link v-if="$route.name !== 'index'" class="icon icon-left-nav pull-left" to="/"></router-link>
      <h1 class="title">Démo RadiSaclay+</h1>
    </header>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>
