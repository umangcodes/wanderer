import { createStore } from "vuex";
import weatherService from "@/services/weatherService";
export default createStore({
  state: {
    location: "london",
    apiKey: "7f155d2ca027ace846f8991f680697de",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    weather: {},
    display: false,
    task: "",
    description: "",
    category: "",
    remind: "",
  },
  mutations: {
    UPDATE_DATA(state, data) {
      state.weather = data;
    },
    UPDATE_DISPLAY(state) {
      state.display = true;
    },
    SET_TASK(state, task) {
      state.task = task;
    },
    SET_DESCRIPTION(state, description) {
      state.description = description;
    },
    SET_CAT(state, category) {
      state.category = category;
    },
    SET_REMIND(state, remind) {
      state.remind = remind;
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
    userInput({ commit }, task, desc, cat, remind) {
      commit("SET_TASK", task);
      commit("SET_DESCRIPTION", desc);
      commit("SET_CAT", cat);
      commit("SET_REMIND", remind);
      console.log("action-userInput");
    },
  },
  modules: {},
});
