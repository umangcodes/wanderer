import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    loadingStatus: 'notLoading',
    products: [],
    events: [
      {
        id: 1,
        category: 'C1',
        title: 'CT1',
        description: 'CD1',
        location: 'CL1',
        date: 'CD1',
        time: 'CT1',
        petsAllowed: true,
        organizer: 'CO1',
      },
      {
        id: 2,
        category: 'C2',
        title: 'CT2',
        description: 'CD1',
        location: 'CL1',
        date: 'CD1',
        time: 'CT1',
        petsAllowed: true,
        organizer: 'CO1',
      },
      {
        id: 3,
        category: 'C3',
        title: 'CT3',
        description: 'CD1',
        location: 'CL1',
        date: 'CD1',
        time: 'CT1',
        petsAllowed: true,
        organizer: 'CO1',
      },
    ],
  },
  mutations: {
    UPDATE_PRODUCTS(state, products) {
      state.products = products
    },
    UPDATE_LOADING_STATUS(state, loadingSts) {
      state.loadingStatus = loadingSts
    },
  },
  actions: {
    fetchProducts(content) {
      content.commit('UPDATE_LOADING_STATUS', 'loading')
      axios
        .get('http://my-json-server.typicode.com/umangcodes/wanderer/events')
        .then((response) => {
          content.commit('UPDATE_LOADING_STATUS', 'notLoading')
          content.commit('UPDATE_PRODUCTS', response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  modules: {},
})
