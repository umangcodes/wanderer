<template>
  <div class="page">
    <div class="home">
      <h1>Weather App View</h1>
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
