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
        class="close-button"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/buttons/customButton.vue";
import taskService from "@/services/taskService.js";
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
    async closeClicked(id) {
      await taskService.deleteTask(id);
      this.displayTasks = this.displayTasks.filter((task) => task.id != id);
      this.$store.dispatch("addTask", this.displayTasks);
      console.log(this.displayTasks);
      console.log(this.$store.state.tasks);
    },
    // deprecated method....for future reference to remind me of my stupidity! :P
    // remindOff(id) {
    //   let temp = this.displayTasks.find((task) => task.id == id);
    //   temp.reminder = !temp.reminder;
    //   this.displayTasks = this.displayTasks.filter((task) => task.id != id);
    //   this.$store.dispatch("updateTasks", this.displayTasks);
    //   this.$store.dispatch("addTask", temp);
    // },
    async remindOff(id) {
      console.log(id);
      const task = await taskService.getTask(id);
      console.log(task);
      const toggleReminder = { ...task, reminder: !task.reminder };
      const res = await taskService.updateTask(id, toggleReminder);
      this.displayTasks = this.displayTasks.map((task) =>
        task.id == id ? { ...task, reminder: res.reminder } : task
      );
      this.$store.dispatch("updateTasks", this.displayTasks);
    },
  },
  async created() {
    await taskService.getTasks().then((response) => {
      this.$store.dispatch("updateTasks", response);
    });
    this.displayTasks = this.$store.state.tasks;
  },
  // async updated() {
  //   await taskService.getTasks().then((response) => {
  //     this.$store.dispatch("updateTasks", response);
  //   });
  //   this.displayTasks = this.$store.state.tasks;
  // },
};
</script>

<style scoped>
.task-display {
  display: flex;
  border: 2px solid rgba(28, 35, 33, 0.5);
  width: 500px;
  padding-left: 30px;
  margin: 10px;
  border-radius: 0px 20px 20px 0px;
  cursor: pointer;
}
.task-display:hover {
  transition: 0.05s;
  transform: scale(1.01);
  /* width: 700px; */
}
.highlight {
  border-left: 5px solid rgba(240, 74, 84, 1);
}
.text-box {
  width: 500px;
}
.close-button {
  padding: 10px;
  background-color: inherit;
}
</style>
