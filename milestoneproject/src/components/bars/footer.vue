<template>
  <div class="footer">
    <h4>
      Developed By
      <a class="link" href="https://github.com/umangcodes">Umang A</a>
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: auto;
  height: 75px;
  background-color: rgba(249, 249, 249, 1);
  color: rgba(13, 27 30, 1);
  justify-content: space-around;
  align-self: center;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  font-family: Cambria;
  position: relative;
  bottom: 0;

  padding: 5px;
  margin: 10px;
  border: 2px solid rgba(28, 35, 33, 0.5);
  border-radius: 50px;
}

.link {
  font-size: 18px;
  text-decoration: none;
  color: rgba(13, 27 30, 1);
  font-style: normal;
}
.link:hover {
  transition: 0.4s;
  font-style: italic;
}
.link:visited {
  text-decoration: none;
  color: rgba(13, 27 30, 1);
}
</style>
