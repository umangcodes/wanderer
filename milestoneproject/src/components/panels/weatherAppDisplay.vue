<template>
  <div class="main-panel" v-if="typeof weatherData.main != 'undefined'">
    <div class="location">
      {{ weatherData.name }}, {{ weatherData.sys.country }}
    </div>
    <div class="temperature">{{ Math.floor(weatherData.main.temp) }} °C</div>
    <div class="condition">{{ weatherData.weather[0].main }}</div>
    <img class="image" src="@/assets/sunny-bg.svg" :alt="condition" />
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
  computed: {
    getImage: function () {
      return "@/assets/sunny-bg.svg";
    },
  },
  created() {
    console.log(this.getImage);
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
