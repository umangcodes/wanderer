import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: "Task 1", help: "desc 1", done: false },
      { id: 2, title: "Task 2", help: "desc 2", done: false },
      { id: 3, title: "Task 3", help: "desc 3", done: false },
      { id: 4, title: "Task 4", help: "desc 4", done: false },
    ],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id != taskId);
    },
    MARK_TASK(state, taskId) {
      let task = state.tasks.filter((task) => task.id === taskId)[0];
      task.done = !task.done;
      console.log(state.tasks);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit("ADD_TASK", task);
      console.log("new task added: " + task);
    },
    deleteTask({ state, commit }, taskId) {
      commit("DELETE_TASK", taskId);
      console.log(state.tasks);
    },
    markTask({ commit }, taskId) {
      commit("MARK_TASK", taskId);
    },
  },
  modules: {},
});
