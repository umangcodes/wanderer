<template>
  <div class="to-do-app">
    <div class="toggle-button">
      <CustomButton
        :label="toggleSymbol"
        emitEvent="closePanel"
        @closePanel="toggleAddTaskPanel"
      />
    </div>
    <div v-if="toggleTaskPanel != false">
      <form @submit.prevent="formSubmit">
        <div class="task">
          <h3>Task</h3>
          <input
            type="text"
            placeholder="Please enter task name"
            v-model="taskName"
          />
          {{ taskName }}
        </div>
        <div class="task category">
          <h3>Category</h3>
          <select name="category" v-model="category">
            <option value="cat-1">Cat 1</option>
            <option value="cat-2">Cat 2</option>
            <option value="cat-3">Cat 3</option>
            <option value="cat-4">Cat 4</option>
          </select>
          <span>{{ category }}</span>
        </div>
        <div class="task description">
          <h3>Description</h3>
          <input
            type="text"
            placeholder="Please enter task description"
            v-model="description"
          />
          {{ description }}
        </div>
        <div class="task mark">
          <h3 style="padding: 0px">Do you want me to mark it?</h3>
          <input
            style="height: 25px; width: 25px"
            type="checkbox"
            true-false="yes"
            v-model="remind"
          />
          {{ description }}
        </div>
        <Submit :submitPressed="formSubmit" />
        {{ $store.state.task }}
      </form>
    </div>
    <div v-if="toggleTaskPanel == false">
      <h1>Press button to add tasks</h1>
    </div>
  </div>
</template>

<script>
import Submit from "@/components/buttons/submit.vue";
import CustomButton from "@/components/buttons/customButton.vue";
export default {
  name: "taskForm",
  components: {
    Submit,
    CustomButton,
  },
  data() {
    return {
      taskName: "",
      description: "",
      category: "",
      remind: "",
      toggleTaskPanel: false,
      toggleSymbol: "+",
      randomId: Math.floor(Math.random() * 1000000),
    };
  },
  methods: {
    async formSubmit() {
      const newTask = {
        id: this.randomId,
        text: this.taskName,
        description: this.description,
        reminder: this.remind,
        enumerable: true,
      };
      // console.log(newTask);
      // console.log(typeof newTask);

      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      this.$store.dispatch("updateTasks", data);
      console.log(data);
    },
    buttonPressed() {
      console.log("Button is pressed");
    },
    toggleAddTaskPanel() {
      this.toggleTaskPanel = !this.toggleTaskPanel;
      console.log(this.toggleTaskPanel);
      if (this.toggleTaskPanel == true) {
        this.toggleSymbol = "X";
      } else if (this.toggleTaskPanel != true) {
        this.toggleSymbol = "+";
      }
    },
  },
  computed: {
    // computedTask() {
    //   return (newTask = {
    //     id: this.randomId,
    //     taskName: this.taskName,
    //     description: this.description,
    //     reminder: this.remind,
    //   });
    // },
  },
};
</script>

<style scoped>
.to-do-app {
  width: 500px;
  height: auto;
  border: 2px solid white;
  border-radius: 15px;
  color: white;
  padding: 10px;
  padding-top: 0px;
  margin: 10px;
}
.task {
  font-family: "Segoe UI";
  font-size: 20px;
}
.toggle-button {
  text-align: right;
  padding: 10px;
}
</style>
