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
  background: #7c0023e8;
}
.cardColor {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  color: #007c59;
}
</style>
