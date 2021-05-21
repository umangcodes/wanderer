export default {
  async getTasks() {
    const response = await fetch("http://localhost:3000/tasks/");
    const data = await response.json();
    console.log(data);
    return data;
  },
};
