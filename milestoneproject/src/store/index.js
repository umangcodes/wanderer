import { createStore } from "vuex";
import weatherService from "@/services/weatherService";
export default createStore({
  state: {
    location: "london",
    apiKey: "7f155d2ca027ace846f8991f680697de",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    weather: {},
    display: false,
    tasks: [
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
    ],
  },
  mutations: {
    UPDATE_DATA(state, data) {
      state.weather = data;
    },
    UPDATE_DISPLAY(state) {
      state.display = true;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASKS(state, data) {
      state.tasks = data;
    },
  },
  actions: {
    weatherUpdate({ state, commit }, query) {
      state.location = query;
      console.log(state.location);

      weatherService
        .getWeather(state.baseUrl, query, state.apiKey)
        .then((response) => {
          commit("UPDATE_DATA", response);
          commit("UPDATE_DISPLAY");
          console.log("updatedisplay");
          console.log(state.display);
        });
    },
    addTask({ state, commit }, task) {
      commit("ADD_TASK", task);
      console.log(state.tasks);
    },
    updateTasks({ commit }, data) {
      commit("UPDATE_TASKS", data);
    },
  },
  modules: {},
});
