<template>
  <v-app id="inspire" class="page">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuetify ToDo </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.to }"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      absolute
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Veutify ToDo App</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <a
          href="https://github.com/umangcodes/wanderer/tree/main/vuetify/project1"
          style="text-decoration: none"
        >
          <v-icon color="grey darken-2">mdi-github</v-icon>
        </a>
      </v-btn>

      <v-btn icon>
        <a href="mailto:meatwork07@gmail.com" style="text-decoration: none">
          <v-icon color="grey darken-2">mdi-email</v-icon>
        </a>
      </v-btn>
    </v-app-bar>
    <v-main class="page">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components() {},
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-format-list-checks", to: "Home" },
        { title: "About", icon: "mdi-forum", to: "About" },
        { title: "Add Task", icon: "mdi-information", to: "addTask" },
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true,
    };
  },
};
</script>

<style>
.page {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
