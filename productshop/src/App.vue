<template>
  <div id="nav">
    <div class="nav-bar">
      <div class="nav-tab">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-tab">
        <router-link to="/eventList">EventList</router-link>
      </div>
      <div class="nav-tab">
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: #e2e1e0;
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 5px #555;
  border-radius: 2px;
  display: inline-block;
  height: 100px;
  margin: 1rem;
  position: relative;
  width: 500px;
}

.card:hover {
  box-shadow: 1px 1px 5px 5px #aaa;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.nav-bar {
  display: flex;
  justify-content: space-evenly;
}

.nav-tab {
  border-bottom: 5px solid transparent;
  width: 100vh;
}

.nav-tab:hover {
  border-bottom: 5px solid #d0d0d0;
}
</style>
