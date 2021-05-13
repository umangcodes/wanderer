<template>
  <div class="page">
    <h1>Todo list</h1>
    <HomeButton />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";
export default {
  components: {
    HomeButton,
  },
};
</script>
