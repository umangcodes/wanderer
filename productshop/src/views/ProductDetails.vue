<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.time }} on {{ product.date }} @ {{ product.location }}</p>
    <p>{{ product.description }}</p>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import productCard from '@/components/productCard.vue'
import Footer from '../components/footer.vue'
import ProductServices from '../services/ProductServices.js'
export default {
  name: 'ProductList',
  components: {
    Footer,
  },
  data() {
    return {
      product: null,
    }
  },
  props: ['id'],
  created() {
    console.log('id:')
    console.log(this.id)
    ProductServices.getProduct(this.id)
      .then((response) => {
        this.product = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
