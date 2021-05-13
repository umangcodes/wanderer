<template>
  <div class="page">
    <div class="home">
      <h1>Weather App View</h1>
      <div class="weather-app">
        <div class="search">
          <input type="text" placeholder="Search Location" class="search-bar" />
        </div>
      </div>
    </div>
    <HomeButton />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";

export default {
  name: "Home",
  components: {
    HomeButton,
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}
.search .search-bar {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 0px 5px;
  padding: 5px;
  margin: 20px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  box-shadow: none;
  font-style: italic;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.search-bar:focus {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px 0px;
  outline: none;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.5);
  font-style: italic;
}
.weather-app {
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 100vh;
}
</style>
