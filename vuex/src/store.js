import Vue from 'vue'
import Vuex from 'vuex'

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
    events: [
      { id: 1, text: '...', organizer: '...' },
      { id: 2, text: '...', organizer: '...' },
      { id: 3, text: '...', organizer: '...' },
      { id: 4, text: '...', organizer: '...' }
    ]
  },
  mutations: {
    INC_COUNT(state, value) {
      state.count += value
    }
  },
  actions: {
    updateCount({ state, commit }, value) {
      if (state.count != 10) {
        commit('INC_COUNT', value)
      }
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
