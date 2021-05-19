<template>
  <div class="page">
    <div class="home">
      <h1 class="app-title">Weather App View</h1>
      <div class="weather-app">
        <div class="search">
          <form @submit.prevent="SaveQuery">
            <input
              type="text"
              placeholder="Search Location"
              class="search-bar"
              v-model="query"
            />
          </form>
        </div>
        <weatherAppDisplay :weatherData="$store.state.weather" />
        <h1 style="text-align: center" v-show="!$store.state.display">
          Please enter a location or Press enter!
        </h1>
      </div>
    </div>
    <HomeButton />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";
import WeatherAppDisplay from "@/components/panels/weatherAppDisplay.vue";
export default {
  name: "Home",
  components: {
    HomeButton,
    WeatherAppDisplay,
  },
  data() {
    return {
      query: "toronto",
      wdata: {},
      display: this.$store.state.display,
    };
  },
  methods: {
    SaveQuery() {
      this.$store.dispatch("weatherUpdate", this.query);
    },
  },
  mounted() {
    console.log("component mounted");
    console.log(this.display);
  },
  updated() {
    console.log(this.display);
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
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px;
  margin: 20px;
  font-size: 20px;
  color: rgba(41, 41, 41, 1);
  box-shadow: none;
  font-style: italic;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.search-bar:focus {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  outline: none;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.5);
  font-style: italic bold;
  transform: scale(1.01);
}
.weather-app {
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  height: 100vh;
}
.app-title {
  text-align: center;
}
</style>
