<template lang="html">
  <a @click.prevent="togglePin(event.id)" class="event-item">
    <span v-if="event.pinned" class="media-object pull-left icon icon-check"></span>
    <div class="media-body">
      <span v-if="farm">{{ farm.name }}</span>
      <p>{{ event.description }}</p>
    </div>
  </a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['event'],
  computed: {
    farm () { return this.$store.state.farms.find(farm => farm.id === this.event.farmId) }
  },
  methods: {
    ...mapActions(['togglePin'])
  }
}
</script>

<style lang="css">
.event-item:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
