// This service handles all the api calls for fetching products data.

import axios from 'axios'

const clientApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/umangcodes/wanderer',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getProducts() {
    return clientApi.get('/events')
  },
  getProduct(id) {
    return clientApi.get('/events/' + id)
  },
}
