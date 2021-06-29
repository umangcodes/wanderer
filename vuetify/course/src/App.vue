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
.triadicGlass {
  background-color: rgba(122, 209, 34, 0.1) !important;
  backdrop-filter: blur(5px);
}

.triadicGlass2 {
  background-color: rgba(34, 209, 122, 0.1) !important;
  backdrop-filter: blur(5px);
}

.compGlass {
  background-color: rgba(34, 122, 209, 0.1) !important;
  backdrop-filter: blur(5px);
}
.anaGlass {
  background-color: rgba(209, 34, 34, 0.1) !important;
  backdrop-filter: blur(5px);
}
</style>
