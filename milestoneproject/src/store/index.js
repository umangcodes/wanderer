import { createStore } from "vuex";
import weatherService from "@/services/weatherService";
export default createStore({
  state: {
    location: "london",
    apiKey: "7f155d2ca027ace846f8991f680697de",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    weather: {},
    display: false,
  },
  mutations: {
    UPDATE_DATA(state, data) {
      state.weather = data;
    },
    UPDATE_DISPLAY(state) {
      state.display = true;
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
  },
  modules: {},
});
