<template>
  <div class="to-do-app">
    <form @submit.prevent="formSubmit">
      <div>
        <h3>Task</h3>
        <input
          type="text"
          placeholder="Please enter task name"
          v-model="task"
        />
        {{ task }}
      </div>
      <div>
        <h3>Category</h3>
        <select name="category" v-model="category">
          <option value="cat-1">Cat 1</option>
          <option value="cat-2">Cat 2</option>
          <option value="cat-3">Cat 3</option>
          <option value="cat-4">Cat 4</option>
        </select>
        <span>{{ category }}</span>
      </div>
      <div>
        <h3>Description</h3>
        <input
          type="text"
          placeholder="Please enter task description"
          v-model="description"
        />
        {{ description }}
      </div>
      <Submit :submitPressed="formSubmit" />
    </form>
  </div>
</template>

<script>
import Submit from "@/components/buttons/submit.vue";
export default {
  name: "taskForm",
  components: {
    Submit,
  },
  data() {
    return {
      task: "",
      description: "",
      category: "cat",
    };
  },
  methods: {
    formSubmit() {
      console.log(this.category);
    },
  },
  created() {
    console.log(this.category);
  },
};
</script>

<style scoped>
.to-do-app {
  color: white;
}
</style>
