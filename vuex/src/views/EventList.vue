<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
    <router-link  :to="{ name: 'event-list', query: {page: page-1}}" rel="prev"> previous page </router-link>|
    </template>
    <router-link :to="{ name: 'event-list', query: {page: page+1}}" rel="next"> next page </router-link>
    <span>Current Page: {{$route.query.page}}</span>/
    <span> {{Math.floor($store.state.totalEvents / this.perPage) + 1}}</span>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    perPage() {
      return 3
    },
    ...mapState({
      events: state => state.events
    })
  }
}
</script>
