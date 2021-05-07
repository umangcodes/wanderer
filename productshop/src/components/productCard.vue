<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: card.id } }">
    <div class="card">
      <h1>{{ cardName }}</h1>
    </div>
  </router-link>
</template>

<script>
// console.log(this.cardId)
export default {
  props: {
    cardName: {
      required: true,
      type: String,
    },
    cardId: {
      type: Number,
      required: true,
    },
    card: {
      type: Object,
    },
  },
  created() {
    console.log(this.card.id)
  },
}
// console.log(this.cardId)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
