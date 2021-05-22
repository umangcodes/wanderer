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
    console.log("get task");
    console.log(data);
    return data;
  },
  async postTask(task) {
    const res = await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
  },
  async deleteTask(id) {
    await fetch(`api/tasks/${id}`, {
      method: "DELETE",
    });
  },
  async updateTask(id, task) {
    const res = await fetch(`api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
  },
};
