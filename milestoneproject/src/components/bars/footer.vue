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
  background-color: rgba(41, 41, 41, 1);
  color: rgba(255, 255, 255, 1);
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
  border: 3px solid rgba(0, 0, 0, 0.75);
  border-radius: 50px;
}

.link {
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-style: normal;
}
.link:hover {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  transition: 0.4s;
  font-style: italic;
}
</style>
