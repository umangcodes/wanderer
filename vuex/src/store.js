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
    events: []
  },
  mutations: {
    INC_COUNT(state, value) {
      state.count += value
    },
    ADD_EVENT(state, event) {
      state.event.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    updateCount({ state, commit }, value) {
      if (state.count != 10) {
        commit('INC_COUNT', value)
      }
    },
    createEvent(commit, event) {
      return EventService.postEvent(event).then(() =>
        commit('ADD_EVENT', event)
      )
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    activeTodosCount: state => {
      return state.todos.filter(todos => !todos.done)
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
