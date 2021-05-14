<template>
  <div class="main-panel" v-if="typeof weatherData.main != 'undefined'">
    <div class="location">{{ weatherData.name }} {{}}</div>
    <div class="temperature">{{ weatherData.main.temp }}</div>
    <div class="condition">{{ weatherData.weather[0].main }}</div>
    <img :src="image" :alt="condition" />
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
    };
  },
  methods: {
    image() {
      if (this.weatherData.weather[0].main == "clear") {
        return "src/assets/sunny-bg.svg";
      }
    },
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
</style>
