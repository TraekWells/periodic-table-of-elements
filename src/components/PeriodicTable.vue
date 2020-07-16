<template>
  <section class="periodic-table">
    <article v-if="panelOpen" class="periodic-table__panel">
      <h3>{{ currentElement.name }}</h3>
      <p>{{ currentElement.category }}</p>
      <p>{{ currentElement.phase }}</p>
      <p>{{ currentElement.summary }}</p>
    </article>
    <Element
      v-for="element in elements"
      :element="element"
      :key="element.number"
      @sendDetails="displayDetails"
    />
  </section>
</template>

<script>
import elements from "../data/data.json";
import Element from "./Element";

export default {
  name: "PeriodicTable",
  components: {
    Element
  },
  data() {
    return {
      elements: elements.elements,
      panelOpen: false,
      currentElement: null
    };
  },
  methods: {
    displayDetails(payload) {
      this.panelOpen = true;
      this.currentElement = payload.element;
    }
  }
};
</script>

<style lang="scss">
.periodic-table {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(18, 6rem);
  grid-template-rows: repeat(10, 6rem);
  justify-content: center;
  margin-top: 7rem;
  grid-template-areas: ". . panel panel panel panel panel panel panel panel panel panel . . . .";

  &__panel {
    grid-area: panel;
  }
}
</style>