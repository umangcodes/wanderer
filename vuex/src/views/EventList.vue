<template>
  <div>
    <h1>Events Listing</h1>
    <h6>for {{ user.user.name}}</h6>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
    <router-link  :to="{ name: 'event-list', query: {page: page-1}}" rel="prev"> previous page </router-link>|
    </template>
    <template v-if="this.event.totalEvents > this.page * this.perPage">
    <router-link :to="{ name: 'event-list', query: {page: page+1}}" rel="next"> next page </router-link>
    </template>
    <span>Current Page: {{this.page}}</span>/
    <span> {{Math.floor($store.state.event.totalEvents / this.perPage) + 1}}</span>
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
    console.log('total events displayed: ' + this.perPage * this.page)
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    perPage() {
      return 3
    },

    ...mapState(['event', 'user'])
  }
}
</script>
