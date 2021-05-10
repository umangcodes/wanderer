import EventService from '@/services/EventService'
export const state = {
  events: [],
  totalEvents: 0,
  event: {}
}

export const mutations = {
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
}
export const actions = {
  createEvent(commit, event) {
    return EventService.postEvent(event).then(() => commit('ADD_EVENT', event))
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
      commit('SET_EVENT', event)
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
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}