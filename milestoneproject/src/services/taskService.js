export default {
  async getTasks() {
    const response = await fetch("api/tasks/");
    const data = await response.json();
    console.log(data);
    return data;
  },
  async getTask(id) {
    const response = await fetch(`api/tasks/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  },
};
