# milestoneproject

## Scope

```
About the project:
- This project is developed as a part of my FE-webdev intership at silvertouch technologies.
- The project is developed using different components of vue.js such as vue 3, vuex, vue-router and also uses axios to call weather api provided by open-weather.
- Please note this project was designed as a portfolio project and not for public distribution.
- Feel free to use the code but please change the api-key in store.


```

### modules and dependencies used in this project

```
vuex
router
axios
```

### Deployement details:

```
- Vercel is used for deployement and main branch of this repository is linked to it.
- please find this deployment at https://portfolio-alpha-lovat.vercel.app/WeatherApp
```

### How it works:

```
- The project uses vue 3 as the base technology. Vuex and vuerouter are also used along with it as mentioned.

- There are 2 main views
	- Weather app
	- To do list[hidden]

- Weather app:
	- weather app asks user for city of interest. Once the user enters city and submits the form, an action is dispatched in the store which mutates the state of the store to store the city(default value is toronto). Then the store calls the api service to get the data which when returned mutates the state to store the value.
	- Finally when store is populated with the data, the weatherAppDisplay component is rendered which displays the temperature, condition and an image related to the provided data.

```

### Major issues faced during this part of project:

```

	- Image binding was a major issue as the images were in the public directory and not on a remote server. During the compilation process, the images were ignored which in turn created an issue of images not being displayed.

	- This was fixed when the images in discussion were 'require' when path of those images was provided.

```

### Other Things worth mentioning:

```

	- I had worked a little on webdev projects prior to this project and had fundamental level knowledge of the HTML and CSS.
	- I learned a lot of different things during and after this project such as SASS and material design. This is the reason why the UI of the page look old.

```
