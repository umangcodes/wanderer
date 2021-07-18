<template>
  <Header />
  <div id="nav">
    <div class="nav-option">
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>

    <div class="nav-option">
      <router-link :to="{ name: 'WeatherApp' }">Weather App</router-link>
    </div>

    <!-- <div class="nav-option">
      <router-link :to="{ name: 'ToDo' }">Tasks List</router-link>
    </div>

    <div class="nav-option">
      <router-link :to="{ name: 'About' }">About</router-link>
    </div> -->
  </div>

  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/bars/header.vue";
import Footer from "@/components/bars/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  height: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgba(90, 169, 230, 1);
}

.page {
  border: 2px solid rgba(28, 35, 33, 0.5);
  background-color: rgba(249, 249, 249, 1);
  color: rgba(13, 27 30, 1);
  font-family: "Segoe UI";
  /* padding: 10px;
  margin: 10px; */
  height: 100vh;
}
.nav-option {
  align-content: center;
}
.nav-option:hover {
  transform: scale(1.1);
}
</style>
