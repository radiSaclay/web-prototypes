<template lang="html">
  <div class="content">
    <div class="content-padded" v-if="msg">
      <p>{{ msg }}</p>
    </div>
    <form class="content-padded">
      <input v-model="email" type="text" placeholder="Adresse mail">
      <input v-model="password" type="password" placeholder="Mot de passe">
      <button @click.prevent="login" class="btn btn-positive btn-block">Se connecter</button>
      <!-- <button @click.prevent="signup" class="btn btn-block">S'incrire</button> -->
    </form>
  </div>
</template>

<script>
import config from 'src/config.json'

export default {
  data () {
    return { email: '', password: '', msg: '' }
  },
  methods: {
    login () {
      this.$http.post(config.serverUrl + 'auth/login', {
        email: this.email, password: this.password
      }).then(({ data }) => {
        if (data.validated) {
          this.$store.commit('setToken', data.token)
          this.$store.dispatch('getUser')
          this.$router.replace('/')
        } else {
          this.msg = data.msg
        }
      })
    }
  }
}
</script>
