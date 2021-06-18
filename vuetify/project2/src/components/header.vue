<template>
  <v-app-bar app color="white" flat>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="link in links" :key="link.title" :to="{ name: link.to }">
        {{ link.title }}
      </v-tab>
    </v-tabs>

    <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", to: "Home" },
        { title: "Dashboard", to: "Dashboard" },
        { title: "About", to: "About" },
        { title: "Test", to: "Test" },
      ],
    };
  },
};
</script>

<style scoped></style>
