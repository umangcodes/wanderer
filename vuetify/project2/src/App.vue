<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3" fluid>
      <v-container>
        <v-row justify-sm="center">
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" min-with="auto" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>
