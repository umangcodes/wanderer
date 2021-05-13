<template>
  <div class="page">
    <div class="home">
      <h1>Weather App View</h1>
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
        <weatherAppDisplay :weatherData="wdata" />
      </div>
    </div>
    <HomeButton />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";
import WeatherAppDisplay from "@/components/panels/weatherAppDisplay.vue";
import weatherService from "@/services/weatherService";
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
    };
  },
  methods: {
    SaveQuery() {
      this.$store.state.location = this.query;
      console.log(this.$store.state.location);
      //  TODO: instead of storing the data to the state directly use an store action. mapaction to a local computed property
      this.wdata = weatherService.getWeather(
        this.$store.state.baseUrl,
        this.query,
        this.$store.state.apiKey
      );
    },
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
  height: 450px;
}
</style>
