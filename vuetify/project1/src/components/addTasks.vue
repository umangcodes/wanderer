<template>
  <v-form ref="form" v-model="valid" class="pa-2" lazy-validation>
    <v-card elevation="5" class="pa-3">
      <v-text-field
        v-model="newTask.title"
        label="Task"
        required
      ></v-text-field>

      <v-text-field
        v-model="newTask.help"
        label="Description"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="addTask(newTask)"
      >
        Add
      </v-btn>
      <v-btn color="red" class="white--text" @click="resetForm"> Reset</v-btn>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        id: Math.floor(Math.random() * 100000 + 100),
        title: null,
        help: null,
        done: false,
      },
    };
  },
  methods: {
    addTask(task) {
      this.$store.dispatch("addTask", task);
      this.$router.push("/");
    },
    resetForm() {
      this.newTask.title = null;
      this.newTask.help = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
