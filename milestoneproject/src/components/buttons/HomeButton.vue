<template>
  <router-link :to="{ name: 'Home' }" class="float home"> Home </router-link>
</template>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: Auto;
  bottom: 10px;
  right: 20px;
  background-color: rgba(0, 204, 153, 1);
  color: #fff;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  padding: 20px;
  margin: 10px;
  text-decoration: none;
  text-align: center;
}

.float:hover {
  transition: 0.4s;
  background-color: rgba(0, 184, 133, 1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.75);
}

.home {
  font-size: 18px;
  font-style: italic;
}
</style>
