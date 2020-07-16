<template>
  <div id="app">
    <h1>Periodic Table Of Elements</h1>
    <section class="periodic-table">
      <Element v-for="element in elements" :element="element" :key="element.number" />
    </section>
  </div>
</template>

<script>
import elements from "./data/data.json";
import Element from "@/components/Element";

export default {
  name: "App",
  components: {
    Element
  },
  data() {
    return {
      elements: elements.elements
    };
  },
  computed: {
    showOnSubgrid: function() {
      return this.elements.filter(function(element) {
        return (
          (element.number >= 57 && element.number <= 71) ||
          (element.number >= 89 && element.number <= 103)
        );
      });
    }
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
  font-family: $font-stack;
}

body {
  background-color: #1e063d;
}

.periodic-table {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(18, 6rem);
  grid-template-rows: repeat(10, 6rem);
  justify-content: center;
}
</style>
