<template>
  <div style="align-content: center">
    <v-list class="pa-2 page">
      <div v-for="task in tasks" :key="task.id" class="pa-2">
        <v-list-item
          @click="taskCompleted(task.id)"
          :class="[task.done ? 'card-done' : 'card', 'enlarge']"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content :class="[task.done ? 'completed' : '']">
              <v-list-item-title class="black--text">{{
                task.title
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ task.help }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-check</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-action>
              <v-btn v-on:click.stop="deleteTask(task.id)" icon>
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <!-- <v-divider></v-divider> -->
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tasks: null,
    };
  },
  methods: {
    taskCompleted(id) {
      // let task = this.tasks.filter((task) => task.id === id)[0];
      // task.done = !task.done;
      console.log("taskCompleted");
      this.$store.dispatch("markTask", id);
    },
    deleteTask(id) {
      // this.tasks = this.tasks.filter((task) => task.id != id);
      this.$store.dispatch("deleteTask", id);
      this.tasks = this.$store.state.tasks;
    },
  },
  created() {
    this.tasks = this.$store.state.tasks;
  },
  updated() {
    this.tasks = this.$store.state.tasks;
  },
};
</script>

<style scoped>
.card-done {
  transition: 0.4s;
  background-color: rgb(0, 255, 0, 0.1);
  box-shadow: 0 0px 2px 2px rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 0px 10px 0px 10px;
}
.card {
  background-color: rgba(255, 0, 0, 0.07);
  box-shadow: 0 0px 2px 2px rgba(255, 0, 0, 0.1);
  border-radius: 10px 0px 10px 0px;

  backdrop-filter: blur(20px);
}
.page {
  background-color: rgba(255, 255, 255, 0.1);
}

.white-font {
  color: white;
}
.completed {
  text-decoration: line-through;
}
.card:hover {
  transform: scale(1.01);
  background-color: rgba(255, 0, 0, 0.1);
}
</style>
