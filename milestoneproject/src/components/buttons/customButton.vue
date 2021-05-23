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
  border: 1px solid rgba(28, 35, 33, 0.5);
  border-radius: 2px;
  background: inherit;
  color: rgba(13, 27 30, 1);
}
.button:hover {
  background-color: rgba(240, 74, 84, 1);
  color: white;
}
</style>
