<template>
  <v-app-bar app class="glassHeader">
    <v-toolbar-title>Course @ Vuemastery</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      text
      rounded
      v-for="link in links"
      :key="`${link.label}-header-link`"
      :to="link.url"
    >
      {{ link.label }}</v-btn
    >

    <!-- :to="{ name: 'Home' }" -->
    <!-- :to="{ name: 'Login' }" -->
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { label: "Home", url: "/home" },
        { label: "Login", url: "/" },
        { label: "Dashboard", url: "/dashboard" },
        { label: "Sts", url: "/stats" },
        { label: "About", url: "/about" },
      ],
    };
  },
};
</script>

<style scoped></style>
