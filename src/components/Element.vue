<template>
  <article
    class="element"
    :class="getClass()"
    :style="{gridColumn: element.xpos, gridRow: element.ypos}"
  >
    <div class="element__number">{{ element.number }}</div>
    <div class="element__symbol">{{ element.symbol }}</div>
    <div class="element__name">{{ element.name }}</div>
  </article>
</template>

<script>
export default {
  name: "Element",
  props: {
    element: Object
  },
  data() {
    return {
      previousPosition: 0
    };
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
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";

.element {
  padding: 0.5rem;
  position: relative;

  &__number {
    font-size: 0.6rem;
  }
  &__symbol {
    font-size: 2.1rem;
    font-weight: bold;
    text-align: center;
  }
  &__name {
    font-size: 0.8rem;
    text-align: center;
  }
  &__mass {
    font-size: 0.5rem;
    text-align: center;
  }
  &__alkali-metal {
    background-color: $color-alkali-metals;
    color: $color-white;
  }
  &__alkaline-earth-metal {
    background-color: $color-alkaline-earth-metals;
    color: $color-white;
  }
  &__noble-gas {
    background-color: $color-noble-gases;
    color: $color-white;
  }
  &__metalloid {
    background-color: $color-metalloids;
    color: $color-white;
  }
  &__post-transition-metal {
    background-color: $color-post-transition-metals;
    color: $color-white;
  }
  &__transition-metal {
    background-color: $color-transition-metals;
    color: $color-white;
  }
  &__lanthanoids {
    background-color: $color-lanthanoids;
    color: $color-white;
  }
  &__aktinoids {
    background-color: $color-aktinoids;
    color: $color-white;
  }
  &__other-nonmetals {
    background-color: $color-other-non-metals;
    color: $color-white;
  }
  &__unknown {
    background-color: $color-unknown;
    color: $color-white;
  }
}
</style>