<template>
  <div class="page">
    <h1>Todo list</h1>
    <HomeButton />
    <TaskForm />
  </div>
</template>

<script>
import HomeButton from "@/components/buttons/HomeButton.vue";
import TaskForm from "@/components/panels/taskForm.vue";
export default {
  components: {
    HomeButton,
    TaskForm,
  },
};
</script>
