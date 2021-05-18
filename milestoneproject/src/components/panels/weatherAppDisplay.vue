<template>
  <div class="main-panel" v-if="typeof weatherData.main != 'undefined'">
    <div class="location">
      {{ weatherData.name }}, {{ weatherData.sys.country }}
    </div>
    <div class="temperature">{{ Math.floor(weatherData.main.temp) }} °C</div>
    <div class="condition">{{ weatherData.weather[0].main }}</div>
    <div>
      <img
        v-for="image in images"
        :key="image.id"
        v-show="image.alt == weatherData.weather[0].main"
        class="image"
        :src="image.url"
        :alt="image.alt"
      />
      <!-- <img src="@/assets/logo.png" alt="logo" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherAppDisplay",
  props: {
    weatherData: {
      type: Object,
    },
  },
  data() {
    return {
      condition: "conditionImage",
      images: [
        { id: 1, url: require("@/assets/cold-bg.svg"), alt: "Cold" },
        { id: 2, url: require("@/assets/rain-bg.svg"), alt: "Rain" },
        { id: 3, url: require("@/assets/storm-bg.svg"), alt: "Clouds" },
        { id: 4, url: require("@/assets/sunny-bg.svg"), alt: "Clear" },
        { id: 5, url: require("@/assets/windy-bg.svg"), alt: "Windy" },
      ],
    };
  },
  created() {
    console.log(this.getImage);
    console.log(this.image);
  },
};
</script>

<style scoped>
.main-panel {
  text-align: center;
}

.location {
  font-size: 40px;
}
.temperature {
  font-size: 75px;
  padding: 10px;
  /* margin: 20px; */
}
.condition {
  font-size: 50px;
  padding: 20px;
}
.image {
  width: 100px;
  height: 100px;
  justify-content: center;
}
</style>
