<template>
  <div class="home">
    <div class="cards">
      <productCard
        v-for="event in $store.state.products"
        :key="event.id"
        :cardName="event.title"
        :cardId="event.id"
      />
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import productCard from '@/components/productCard.vue'
import Footer from '../components/footer.vue'
// import axios from 'axios'
export default {
  name: 'ProductList',
  components: {
    productCard,
    Footer,
  },
  data() {
    return {
      company: 'SSE',
      products: null,
    }
  },
  created() {
    // axios
    //   .get()
    //   .then((response) => {
    //     console.log('events:', response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    this.$store.dispatch('fetchProducts')
  },
}
</script>

<style scoped>
.cards {
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-items: center;
  align-items: center;
  /* width: 500px; */
  padding: 30px;
}
/* .home {
  display: flex;
  flex-wrap: nowrap;
  justify-items: center;
} */
</style>
