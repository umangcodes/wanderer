<template>
  <div>
    <h1>
      Event by {{user.name}}
    </h1>
    <p>
      This event is created by user with id {{user.id}}
    </p>
    <p>Total catergories: {{ totalCategories }}</p>
    <span>{{ getEvent(1).id }}</span>
    <br>
    <span>text: {{ getEvent(1).text }}</span>
    <br>
    <span>organizer:{{ getEvent(1).organizer }}</span>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    incrementCount() {
      this.store.dispatch('updateCount', 2)
    }
  },
  computed: {
    totalCategories() {
      return this.$store.getters.activeTodosCount.length
    },
    getEvent() {
      return this.$store.getters.getEventById
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
