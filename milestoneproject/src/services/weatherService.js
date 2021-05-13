export default {
  async getWeather(url, location, apiKey) {
    await fetch(
      `${url}weather?q=${location}&units=metric&APPID=${apiKey}`
    ).then((response) => {
      console.log(response);
      return response.json();
    });
  },
};
