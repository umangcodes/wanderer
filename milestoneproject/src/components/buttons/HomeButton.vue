<template>
  <router-link :to="{ name: 'Home' }" class="float">
    <div class="home">Home</div>
  </router-link>
</template>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: auto;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  padding: 20px;
  margin: 10px;
  text-decoration: none;
  text-align: center;
}

.home {
  text-align: center;
  font-size: 20px;
  font-style: italic;
  font-weight: 900;
}
</style>
