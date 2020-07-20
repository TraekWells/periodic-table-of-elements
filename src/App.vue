<template>
  <div id="app">
    <Header />
    <PeriodicTable />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PeriodicTable from "@/components/PeriodicTable";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    PeriodicTable,
    Footer
  }
};
</script>

<style lang="scss">
@import "scss/variables";

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body,
div,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: $font-stack-body;
}

body {
  background-color: #11151c;
}

h1 {
  text-align: center;
  color: $color-white;
  font-size: 4rem;
}

h1,
h2,
h3 {
  font-family: $font-stack-headers;
}
</style>
