import Vue from 'vue'
import Vuex from 'vuex'

import * as event from '@/store/modules/event.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    event
  },
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
    ]
  }
})
