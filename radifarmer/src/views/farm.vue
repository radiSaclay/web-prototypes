<template lang="html">
  <div class="content">
    <div class="content-padded">
      <p>Modifier les infos sur votre ferme</p>
    </div>
    <form class="input-group">
      <input v-model="farm.name" type="text" placeholder="Nom">
      <input v-model="farm.address" type="text" placeholder="Adresse">
      <input v-model="farm.website" type="text" placeholder="Site web">
      <input v-model="farm.phone" type="text" placeholder="Téléphone">
      <input v-model="farm.email" type="text" placeholder="Email">

      <div class="content-padded">
        <button @click.prevent="saveFarm(farm)" class="btn btn-positive btn-block">Sauvegarder</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    farm () { return this.$store.state.farm }
  },
  created () { this.getUser() },
  watch: { '$route': 'getUser' },
  methods: {
    ...mapActions(['getUser', 'saveFarm'])
  }
}
</script>
