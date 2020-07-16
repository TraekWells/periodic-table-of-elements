<template>
  <footer class="footer">
    <p>
      Built and Designed with trial and error by
      <a href="#">Traek Wells</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
@import "../scss/variables";

footer {
  color: $color-white;
  text-align: center;
  padding: 8rem 0 3rem;
  font-size: 1.5rem;
}
</style>