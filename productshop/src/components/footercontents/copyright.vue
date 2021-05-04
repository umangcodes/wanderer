<template>
  <div class="copyright">
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright: {{ companyName }}
        <!-- TODO: use store in future -->
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  props: {
    companyName: {
      type: String,
    },
  },
}
</script>

<style scoped>
.copyright {
  position: absolute;
  bottom: 0;
  width: 100vh;
}
</style>
