<template>
  <div id="app">
    <h1>Periodic Table Of Elements</h1>
    <section class="periodic-table">
      <Element v-for="element in elements" :element="element" :key="element.number" />
    </section>
    <section class="sub-grid" v-if="showOnSubgrid">
      <Element v-for="element in showOnSubgrid" :element="element" :key="element.number" />
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

.periodic-table {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(18, 6rem);
  grid-template-rows: repeat(7, 6rem);
  justify-content: center;
}

.sub-grid {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(15, 6rem);
  grid-template-rows: repeat(2, 6rem);
  justify-content: center;
}
</style>
