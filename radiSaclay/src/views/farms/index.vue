<template lang="html">
  <section class="content">
    <div class="content-padded">
      <input v-model="query" type="search" placeholder="Recherche">
    </div>
    <ul class="table-view" v-if="farms.length">
      <li class="table-view-cell" v-for="farm in filteredFarms">
        <router-link class="navigate-right" :to="'/farms/view/' + farm.id">
          {{ farm.name }}
          <span v-if="farm.subscribed" class="icon icon-star-filled"></span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return { query: '' }
  },
  computed: {
    farms () { return this.$store.state.farms },
    filteredFarms () {
      return this.farms.filter(farm => farm.name.search(this.query) !== -1 || this.query === '')
    }
  }
}
</script>

<style lang="css">
</style>
