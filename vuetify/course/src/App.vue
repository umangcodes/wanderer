<template>
  <v-app>
    <!-- <v-app-bar app color="#0E2383" dark>
      <v-toolbar-title>Course @ Vuemastery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn> -->
    <!-- </v-app-bar> -->
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
