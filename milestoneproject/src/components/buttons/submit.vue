<template>
  <div class="submit-button">
    <button click="buttonPressed">Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonPressed() {
      this.$emit("submitPressed");
    },
  },
};
</script>

<style scoped>
.submit-button {
  width: 100px;
  height: 40px;

  color: white;
  font-style: italic;
}
</style>
