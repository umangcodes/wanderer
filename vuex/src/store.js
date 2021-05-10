import Vue from 'vue'
import Vuex from 'vuex'
import EventService from './services/EventService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      id: 'abc123',
      name: 'Umang'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [],
    totalEvents: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.event.push(event)
    },
    SET_EVENTS(state, response) {
      state.events = response.data
      state.totalEvents = response.headers['x-total-count']
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent(commit, event) {
      return EventService.postEvent(event).then(() =>
        commit('ADD_EVENT', event)
      )
    },
    fetchEvents({ state, commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          state.totalEvents = response.headers['x-total-count']
          console.log(response.headers['x-total-count'])
          commit('SET_EVENTS', response)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id)
      if (event) {
        commit('fetchEvent', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            console.log(response.data)
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
