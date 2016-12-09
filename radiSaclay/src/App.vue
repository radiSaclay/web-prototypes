<template>
  <main id="app">
    <!-- Make sure all your bars are the first things in your <body> -->
    <header class="bar bar-nav">
      <router-link v-if="$route.name !== 'index'" class="icon icon-left-nav pull-left" to="/"></router-link>
      <h1 class="title">
        Démo RadiSaclay
      </h1>
    </header>
    <router-view></router-view>
    <nav v-if="$route.name !== 'login'" class="bar bar-tab">
      <router-link class="tab-item" to="/farms">Fermes</router-link>
      <router-link class="tab-item" to="/" exact>Journal</router-link>
      <a @click.prevent="logout" class="tab-item">Quitter</a>
    </nav>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  created () {
    setInterval(() => this.fetchData(), 100)
  },
  methods: {
    fetchData () {
      if (!this.$store.state.apiToken) return
      this.getEvents()
      this.getFarms()
    },
    logout () {
      this.$store.commit('setToken', null)
      this.$router.replace('/login')
    },
    ...mapActions(['getEvents', 'getFarms'])
  }
}
</script>
