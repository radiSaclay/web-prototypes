<template lang="html">
  <section class="content">
    <div class="content-padded">
      <h2>{{ farm.name }}</h2>
      <p v-if="farm.address">{{ farm.address }}</p>
      <p v-if="farm.website">Site : {{ farm.website }}</p>
      <p v-if="farm.phone">Tel : {{ farm.phone }}</p>
      <p v-if="farm.email">Mail : {{ farm.email }}</p>
    </div>
    <!-- <div class="content-padded">
      <button v-if="!farm.subscribed" @click.prevent="toggleFarmSubscription(farm.id)" class="btn btn-positive btn-block">Suivre</button>
      <button v-else @click.prevent="toggleFarmSubscription(farm.id)" class="btn btn-outlined btn-block">Ne plus suivre</button>
    </div> -->
    <ul class="table-view">
      <li class="table-view-cell media" v-for="ev in events">
        <event-item :event="ev"></event-item>
      </li>
    </ul>
  </section>
</template>

<script>
import eventItem from 'src/components/eventItem'
import { mapActions } from 'vuex'

export default {
  data () {
    return { farmId: (0 | this.$route.params.id) }
  },
  routerOptions: { params: '/:id?' },
  computed: {
    farm () { return this.$store.state.farms.find(farm => farm.id === this.farmId) },
    events () { return this.$store.state.events.filter(e => e.farmId === this.farmId) }
  },
  methods: {
    ...mapActions(['toggleFarmSubscription'])
  },
  components: { eventItem }
}
</script>

<style lang="css">
</style>
