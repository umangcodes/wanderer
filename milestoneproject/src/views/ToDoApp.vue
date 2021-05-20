<template>
  <div class="page">
    <h1>Todo list</h1>
    <HomeButton />
    <TaskForm />
    <div class="task-display" :class="remind ? 'highlight' : ''">
      <ListTasks />
    </div>
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
    };
  },
};
</script>

<style scoped>
.page {
  height: auto;
  min-height: 500px;
}
.task-display {
  border: 1px solid white;
  width: 100vh;
  padding-left: 30px;
  margin: 10px;
  border-radius: 20px;
}
.highlight {
  border-left: 5px solid green;
}
</style>
