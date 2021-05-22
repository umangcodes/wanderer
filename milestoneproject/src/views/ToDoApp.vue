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
      tasks: this.$store.state.tasks,
    };
  },
  

};
</script>

<style scoped>
.page {
  height: auto;
  min-height: 500px;
}
</style>
