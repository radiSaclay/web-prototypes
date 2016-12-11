<template lang="html">
  <section class="content">
    <div class="content-padded">
      <input v-model="query" type="search" placeholder="Recherche">
      <input type="checkbox" v-model="pinned">
      <label>Seulement enregistré</label>
    </div>
    <ul class="table-view">
      <li class="table-view-cell media" v-for="ev in filteredEvents">
        <event-item :event="ev"></event-item>
      </li>
    </ul>
  </section>
</template>

<script>
import eventItem from 'src/components/eventItem'

export default {
  data () {
    return { query: '', pinned: false }
  },
  computed: {
    events () { return this.$store.state.events },
    filteredEvents () {
      return this.events.filter(ev => {
        if (this.query !== '' && ev.description.search(this.query) === -1) {
          return false
        }
        if (this.pinned && !ev.pinned) return false
        return true
      })
    }
  },
  components: { eventItem }
}
</script>

<style lang="css">
</style>
