<template>
  <div class="home">
    <div class="cards">
      <productCard v-for="event in $store.state.events" :key="event.id" :cardName="event.title" :cardId="event.id"/>
      
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import productCard from '@/components/productCard.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'EventList',
  components: {
    productCard,
    Footer,
  },
  data(){
    return{
      company : "SSE",
    }

  }
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
