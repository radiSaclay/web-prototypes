import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from 'src/config.json'

export default new Vuex.Store({
  state: {
    apiToken: null,
    user: null,
    farm: null,
    events: []
  },
  mutations: {
    setToken (state, token) { state.apiToken = token },
    setUser (state, user) { state.user = user },
    setFarm (state, farm) { state.farm = farm },
    setEvents (state, events) { state.events = events }
  },
  actions: {
    getUser ({ commit }) {
      Vue.http.get(config.serverUrl + 'auth/user').then((response) => {
        commit('setUser', { id: response.data.id, email: response.data.email })
        commit('setFarm', response.data.farm)
      })
    },
    saveFarm ({ commit, state }, farm) {
      Vue.http.put(config.serverUrl + 'api/farms/' + state.farm.id, farm)
    },
    // > Events
    getEvents ({ commit, state }) {
      Vue.http.get(config.serverUrl + 'api/events/').then((response) => {
        commit('setEvents', response.data.filter(e => e.farmId === state.farm.id))
      })
    }
  }
})
