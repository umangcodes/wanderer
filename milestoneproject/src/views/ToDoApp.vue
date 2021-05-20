<template>
  <div class="page">
    <h1>Todo list</h1>
    <HomeButton />
    <TaskForm />
    <ListTasks :tasks="tasks" />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";
import TaskForm from "@/components/panels/taskForm.vue";
import ListTasks from "@/components/panels/listTasks.vue";
export default {
  components: {
    HomeButton,
    TaskForm,
    ListTasks,
  },
  data() {
    return {
      remind: true,
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "random stuff 1",
        day: "today?",
        reminder: true,
      },
      {
        id: 2,
        text: "random stuff 2",
        day: "today??",
        reminder: true,
      },
      {
        id: 3,
        text: "random stuff 3",
        day: "today???",
        reminder: false,
      },
    ];
  },
};
</script>

<style scoped>
.page {
  height: auto;
  min-height: 500px;
}
</style>
