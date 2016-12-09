<template lang="html">
  <section class="content">
    <div class="content-padded">
      <input v-model="query" type="search" placeholder="Recherche">
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
    return { query: '' }
  },
  computed: {
    events () { return this.$store.state.events },
    filteredEvents () {
      return this.events.filter(ev => ev.description.search(this.query) !== -1 || this.query === '')
    }
  },
  components: { eventItem }
}
</script>

<style lang="css">
</style>
