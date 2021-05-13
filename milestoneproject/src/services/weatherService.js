export default {
  async getWeather(url, location, apiKey) {
    await fetch(`${url}weather?q=${location}&units=metric&APPID=${apiKey}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        return res;
      });
  },
};
