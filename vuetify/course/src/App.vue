<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: #fcf7f8;
}
.cardColor {
  background-color: rgba(209, 122, 34, 0.2) !important;
  border-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
.glassHeader {
  background-color: rgba(209, 122, 34, 0.2) !important;
  border-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
