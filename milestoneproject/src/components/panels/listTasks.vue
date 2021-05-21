<template>
  <div class="task" v-for="task in displayTasks" :key="task.id">
    <div
      @dblclick="remindOff(task.id)"
      class="task-display"
      :class="task.reminder ? 'highlight' : ''"
    >
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
  data() {
    return {
      displayTasks: [],
    };
  },
  methods: {
    closeClicked(id) {
      this.displayTasks = this.displayTasks.filter((task) => task.id != id);
      this.$store.dispatch("addTask", this.displayTasks);
      console.log(this.displayTasks);
      console.log(this.$store.state.tasks);
    },
    remindOff(id) {
      let temp = this.displayTasks.find((task) => task.id == id);
      temp.reminder = !temp.reminder;
      this.displayTasks = this.displayTasks.filter((task) => task.id != id);
      this.$store.dispatch("updateTasks", this.displayTasks);
      this.$store.dispatch("addTask", temp);
    },
  },
  created() {
    this.displayTasks = this.$store.state.tasks;
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
