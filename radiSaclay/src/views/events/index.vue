<template lang="html">
  <section class="content">
    {{ events.length }}
    <ul class="table-view">
      <li class="table-view-cell media" v-for="ev in events">
        <event-item :event="ev"></event-item>
      </li>
    </ul>
  </section>
</template>

<script>
import eventItem from 'src/components/eventItem'

export default {
  computed: {
    events () { return this.$store.state.events }
  },
  components: { eventItem }
}
</script>

<style lang="css">
</style>
