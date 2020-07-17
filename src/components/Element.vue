<template>
  <article
    class="element"
    :class="getClass()"
    :style="{ gridColumn: element.xpos, gridRow: element.ypos }"
    @click="sendDetails(element)"
  >
    <div class="element__number">{{ element.number }}</div>
    <div class="element__symbol">{{ element.symbol }}</div>
    <div class="element__name">{{ element.name }}</div>
  </article>
</template>

<script>
// import "atomic-bohr-model/dist/atomicBohrModel.min.js";

export default {
  name: "Element",
  props: {
    element: Object
  },
  methods: {
    getClass() {
      let elementCategory;

      switch (this.element.category) {
        case "diatomic nonmetal":
        case "polyatomic nonmetal":
          elementCategory = "element__other-nonmetals";
          break;
        case "noble gas":
          elementCategory = "element__noble-gas";
          break;
        case "alkali metal":
          elementCategory = "element__alkali-metal";
          break;
        case "alkaline earth metal":
          elementCategory = "element__alkaline-earth-metal";
          break;
        case "metalloid":
          elementCategory = "element__metalloid";
          break;
        case "post-transition metal":
          elementCategory = "element__post-transition-metal";
          break;
        case "transition metal":
          elementCategory = "element__transition-metal";
          break;
        case "lanthanide":
          elementCategory = "element__lanthanoids";
          break;
        case "actinide":
          elementCategory = "element__aktinoids";
          break;
      }
      return elementCategory;
    },
    sendDetails(element) {
      this.$emit("sendDetails", { element });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";

.element {
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  color: $color-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-collapse: collapse;

  &__number {
    position: absolute;
    font-size: 1rem;
    top: 0.5rem;
    left: 0.5rem;
  }
  &__symbol {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  &__name {
    font-size: 1rem;
    text-align: center;
  }
  &__mass {
    font-size: 0.5rem;
    text-align: center;
  }
  &__alkali-metal {
    background-color: $color-alkali-metals;
  }
  &__alkaline-earth-metal {
    background-color: $color-alkaline-earth-metals;
  }
  &__noble-gas {
    background-color: $color-noble-gases;
  }
  &__metalloid {
    background-color: $color-metalloids;
  }
  &__post-transition-metal {
    background-color: $color-post-transition-metals;
  }
  &__transition-metal {
    background-color: $color-transition-metals;
  }
  &__lanthanoids {
    background-color: $color-lanthanoids;
  }
  &__aktinoids {
    background-color: $color-aktinoids;
  }
  &__other-nonmetals {
    background-color: $color-other-non-metals;
  }
  &__unknown {
    background-color: $color-unknown;
  }
}
</style>