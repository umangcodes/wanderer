<template>
  <div class="home">
    <div class="cards">
      <productCard cardName="Card 1" />
      <productCard cardName="Card 2" />
      <productCard cardName="Card 3" />
      <productCard cardName="Card 4" />
      <productCard cardName="Card 5" />
      <productCard cardName="Card 6" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import productCard from '@/components/productCard.vue'
export default {
  name: 'Home',
  components: {
    productCard,
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
