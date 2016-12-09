<template lang="html">
  <section class="content">
    <form class="content-padded">
      <!-- <button @click.prevent="add" class="btn btn-positive btn-block">Ajouter</button> -->
      <router-link tag="button" class="btn btn-positive btn-block" to="/events/edit">Ajouter</router-link>
    </form>

    <ul class="table-view" v-if="events.length">
      <li class="table-view-cell" v-for="e in events">
        <router-link class="navigate-right" :to="'/events/edit/' + e.id">
          <span class="badge">{{ e.pins }}</span>
          {{ e.description }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    events () { return this.$store.state.events }
  },
  created () { this.getEvents() },
  watch: { '$route': 'getEvents' },
  methods: {
    ...mapActions(['getEvents'])
  }
}
</script>

<style lang="css">
</style>
