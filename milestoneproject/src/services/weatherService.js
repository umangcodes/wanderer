export default {
  async getWeather(url, location, apiKey) {
    const data = await fetch(
      `${url}weather?q=${location}&units=metric&APPID=${apiKey}`
    ).then((response) => {
      return response.json();
    });
    return data;
  },
};
