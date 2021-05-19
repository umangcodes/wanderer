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
  display: flex;

  color: white;
  font-style: italic;
  justify-content: center;
  margin-top: 20px;
}
</style>
