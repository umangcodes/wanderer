<template>
  <v-app id="inspire">
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

    <v-main class="grey lighten-3" fluid>
      <v-container>
        <v-row justify-sm="center">
          <v-col cols="12" sm="8" >
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
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      links: [
        { title: "Home", to: "Home" },
        { title: "Dashboard", to: "Dashboard" },
        { title: "About", to: "About" },
      ],
    };
  },
};
</script>
