import { createStore } from 'vuex'
import ProductServices from '../services/ProductServices'
export default createStore({
  state: {
    loadingStatus: 'notLoading',
    products: [],
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
      ProductServices.getProducts()
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
