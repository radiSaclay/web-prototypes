<template lang="html">
  <section class="content">
    <div class="content-padded">
      <p v-if="event.id">Modifier l'évenement</p>
      <p v-else>Créer un évenement</p>
    </div>
    <form class="input-group">
      <textarea v-model="event.description" rows="5"></textarea>

      <div class="content-padded">
        <button @click.prevent="save" class="btn btn-positive btn-block">Sauvegarder</button>
      </div>
    </form>
  </section>
</template>

<script>
import config from 'src/config.json'
import { mapActions } from 'vuex'

export default {
  routerOptions: { params: '/:id?' },
  computed: {
    event () {
      let event = this.$store.state.events.find(e => e.id === (0 | this.$route.params.id))
      return event || { description: '' }
    }
  },
  created () { this.getEvents() },
  watch: { '$route': 'getEvents' },
  methods: {
    save () {
      if (this.event.id) {
        this.$http.put(config.serverUrl + 'api/events/' + this.event.id, this.event)
      } else {
        this.$http.post(config.serverUrl + 'api/events/', this.event).then((response) => {
          this.$router.replace('/events/edit/' + response.data.id)
        })
      }
    },
    ...mapActions(['getEvents'])
  }
}
</script>
