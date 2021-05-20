<template>
  <div class="task" v-for="task in tasks" :key="task.id">
    <div class="task-display" :class="task.reminder ? 'highlight' : ''">
      <div class="text-box">
        <h3>{{ task.text }}</h3>
        <p>{{ task.day }}</p>
      </div>
      <CustomButton
        label="X"
        emitEvent="closeButton"
        @closeButton="closeClicked(task.id)"
        style="padding: 10px"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/buttons/customButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeClicked(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.task-display {
  display: flex;
  border: 1px solid white;
  width: 100vh;
  padding-left: 30px;
  margin: 10px;
  border-radius: 20px;
}
.highlight {
  border-left: 5px solid green;
}
.text-box {
  width: 500px;
}
</style>
