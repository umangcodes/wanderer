<template>
  <v-footer color="#0E2383" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-col color="#0E2383" class="py-4 text-center white--text" cols="12">
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
      ],
    };
  },
};
</script>

<style scoped></style>
