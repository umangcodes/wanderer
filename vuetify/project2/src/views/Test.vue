<template>
  <div class="container">
    <img
      src="https://picsum.photos/1920/1080?random"
      width="500px"
      height="500px"
      alt=""
      align="center"
    />
    <div class="center-box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  align-self: center;
}
.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid white; */
  width: 100px;
  height: 100px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
}
</style>
