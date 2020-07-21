<template>
  <section class="periodic-table">
    <article v-if="panelOpen" class="periodic-table__panel">
      <!-- <div id="bohr-model-container"></div> -->
      <div class="details">
        <h3 class="details__name">
          <!-- <span>{{ currentElement.number }}</span> -->
          {{ currentElement.name }}
        </h3>
        <div class="columns">
          <div class="details__column">
            <p class="details__title">Phase</p>
            <p class="details__description">{{ currentElement.phase }}</p>
          </div>
          <div class="details__column">
            <p class="details__title">Category</p>
            <p class="details__description">{{ currentElement.category }}</p>
          </div>
          <div class="details__column">
            <p class="details__title">Atomic Mass</p>
            <p class="details__description">{{ currentElement.atomic_mass }}</p>
          </div>
        </div>
        <!-- <p class="details__summary">{{ currentElement.summary }}</p> -->
      </div>
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
// import "atomic-bohr-model/dist/atomicBohrModel.min.js";

export default {
  name: "PeriodicTable",
  components: {
    Element
  },
  data() {
    return {
      elements: elements.elements,
      panelOpen: false,
      currentElement: null,
      atomDisplay: null
    };
  },
  methods: {
    displayDetails(payload) {
      this.panelOpen = true;
      this.currentElement = payload.element;
      // this.atomDisplay = new Atom({
      //   containerId: "#bohr-model-container",
      //   numElectrons: 8,
      //   idNumber: 1
      // });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";

.periodic-table {
  width: 95%;
  margin: 6rem auto 0;
  display: grid;
  grid-template-columns: repeat(18, 8rem);
  grid-template-rows: repeat(10, 8rem);
  grid-template-areas:
    ". . panel panel panel panel panel panel panel panel panel panel . . . . . ."
    ". . panel panel panel panel panel panel panel panel panel panel . . . . . ."
    ". . panel panel panel panel panel panel panel panel panel panel . . . . . .";
  justify-content: center;

  &__panel {
    grid-area: panel;
    display: flex;
    color: $color-white;
    padding: 4rem;

    .details {
      // flex-basis: 65%;

      &__name {
        margin-top: 0;
        position: relative;
        font-size: 4rem;
        margin-bottom: 1rem;

        span {
          position: absolute;
          left: -3rem;
          font-size: 1.3rem;
          border-radius: 50%;
          background-color: firebrick;
          height: 2rem;
          width: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .columns {
        display: flex;
      }

      &__column {
        &:not(:last-child) {
          margin-right: 3rem;
        }
      }

      &__title {
        font-size: 1.4rem;
      }

      &__description {
        font-size: 2.5rem;
      }

      &__summary {
        font-size: 1.6rem;
      }
    }

    #bohr-model-container {
      flex-basis: 35%;
      height: 500px;
      width: 500px;
    }
  }
}
</style>
