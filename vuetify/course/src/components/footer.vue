<template>
  <v-footer class="cardColor" padless elevation="5">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-col class="py-4 text-center cardColor" elevation="5" cols="12">
        {{ new Date().getFullYear() }} — <strong>Course @ Vuemastery</strong>
      </v-col>
    </v-row>
  </v-footer>
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
      ],
    };
  },
};
</script>

<style scoped></style>
