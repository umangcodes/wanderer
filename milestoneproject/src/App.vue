<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'WeatherApp' }">Weather App</router-link> |
    <router-link :to="{ name: 'ToDo' }">Tasks List</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

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
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 204, 153, 0.9);
  color: rgba(255, 255, 255, 0.95);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 10px;
  margin: 10px;
}
</style>
