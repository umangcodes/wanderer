<template>
  <div>
    <button class="button" v-on:click.prevent="buttonPress(emitEvent)">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "customButton",
  props: {
    emitEvent: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    buttonPress(event) {
      this.$emit(event);
      console.log("button pressed");
      console.log(event);
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
