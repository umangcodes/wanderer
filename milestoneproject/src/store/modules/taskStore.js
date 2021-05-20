export const state = {
  task: "",
  description: "",
  category: "",
  remind: "",
};

export const mutations = {
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
};
export const actions = {
  userInput({ commit }, task, desc, cat, remind) {
    commit("SET_TASK", task);
    commit("SET_DESCRIPTION", desc);
    commit("SET_CAT", cat);
    commit("SET_REMIND", remind);
    console.log("action-userInput");
  },
};
