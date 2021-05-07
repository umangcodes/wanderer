<template>
  <div>
    <h1>
      Event by {{user.name}}
    </h1>
    <p>
      This event is created by user with id {{user.id}}
    </p>
    <p>Total catergories: {{ totalCategories }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    totalCategories() {
      return this.$store.state.categories.length
    },
    ...mapState({
      user: 'user',
      categories: 'categories'
    })
  }
}
</script>

<style scoped>
</style>
