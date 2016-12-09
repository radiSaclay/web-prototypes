import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from 'src/config.json'

export default new Vuex.Store({
  state: {
    apiToken: null,
    user: null,
    events: [],
    farms: []
  },
  mutations: {
    setToken (state, token) { state.apiToken = token },
    setUser (state, user) { state.user = user },
    setFarms (state, farms) { state.farms = farms },
    setEvents (state, events) { state.events = events },
    toggleFarmSubscription (state, farmId) {
      let farm = state.farms.find(farm => farm.id === farmId)
      if (!farm) return
      farm.subscribed = !farm.subscribed
    },
    togglePin (state, eventId) {
      let event = state.events.find(event => event.id === eventId)
      if (!event) return
      event.pinned = !event.pinned
    }
  },
  actions: {
    getUser ({ commit }) {
      Vue.http.get(config.serverUrl + 'auth/user').then((response) => {
        commit('setUser', { id: response.data.id, email: response.data.email })
      })
    },
    // > Events
    getEvents ({ commit, state }) {
      Vue.http.get(config.serverUrl + 'api/events/').then((response) => {
        commit('setEvents', response.data)
      })
    },
    getFarms ({ commit, state }) {
      Vue.http.get(config.serverUrl + 'api/farms/').then((response) => {
        commit('setFarms', response.data)
      })
    },
    toggleFarmSubscription ({ commit, state }, farmId) {
      let farm = state.farms.find(farm => farm.id === farmId)
      if (!farm) return
      let action = farm.subscribed ? 'unsubscribe' : 'subscribe'
      Vue.http.post(config.serverUrl + 'api/farms/' + action + '/' + farmId).then((response) => {
        commit('toggleFarmSubscription', farmId)
      })
    },
    togglePin ({ commit, state }, eventId) {
      let event = state.events.find(event => event.id === eventId)
      if (!event) return
      let action = event.pinned ? 'unpin' : 'pin'
      Vue.http.post(config.serverUrl + 'api/events/' + action + '/' + eventId).then((response) => {
        commit('togglePin', eventId)
      })
    }
  }
})
