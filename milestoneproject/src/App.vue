<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'WeatherApp' }">Weather App</router-link> |
    <router-link :to="{ name: 'ToDo' }">Tasks List</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>

  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/bars/footer.vue";
export default {
  components: {
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
  padding: 20px;
  height: 80px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
</style>
