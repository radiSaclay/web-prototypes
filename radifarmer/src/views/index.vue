<template lang="html">
  <section class="content">
    <ul class="table-view">
      <li class="table-view-cell">
        <router-link class="navigate-right" to="/farm">Modifier ma ferme</router-link>
      </li>
      <li class="table-view-cell">
        <router-link class="navigate-right" to="/events">Evénements</router-link>
      </li>
    </ul>
    <form class="content-padded">
      <button @click.prevent="logout" class="btn btn-outlined btn-block">Se déconnecter</button>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('setToken', null)
      this.$router.replace('/login')
    }
  }
}
</script>
