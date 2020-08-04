<template>
  <header>
    <h1>Periodic Table Of Elements</h1>
    <div class="categories">
      <a href="#" class="category__alkali-metal">Alkali Metals</a>
      <a href="#" class="category__alkaline-earth-metal"
        >Alkaline Earth Metals</a
      >
      <a href="#" class="category__post-transition-metal"
        >Post Transition Metals</a
      >
      <a href="#" class="category__metalloid">Metalloids</a>
      <a href="#" class="category__aktinoids">Aktinoids</a>
      <a href="#" class="category__lanthanoids">Lanthanoids</a>
      <a href="#" class="category__noble-gas">Noble Gases</a>
      <a href="#" class="category__other-nonmetals">Other Non Metals</a>
      <a href="#" class="category__unknown">Unknown</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../scss/variables";

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 3rem 0 1.5rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.8rem;
  max-width: 80rem;
  justify-content: center;
}

.category {
  transition: 0.2s ease all;

  &__alkali-metal {
    border: 2px solid $color-alkali-metals;

    &:hover {
      border-color: transparent;
      background-color: $color-alkali-metals;
    }
  }
  &__alkaline-earth-metal {
    border: 2px solid $color-alkaline-earth-metals;

    &:hover {
      border-color: transparent;
      background-color: $color-alkaline-earth-metals;
    }
  }
  &__noble-gas {
    border: 2px solid $color-noble-gases;

    &:hover {
      border-color: transparent;
      background-color: $color-noble-gases;
    }
  }
  &__metalloid {
    border: 2px solid $color-metalloids;

    &:hover {
      border-color: transparent;
      background-color: $color-metalloids;
    }
  }
  &__post-transition-metal {
    border: 2px solid $color-post-transition-metals;

    &:hover {
      border-color: transparent;
      background-color: $color-post-transition-metals;
    }
  }
  &__transition-metal {
    border: 2px solid $color-transition-metals;

    &:hover {
      border-color: transparent;
      background-color: $color-transition-metals;
    }
  }
  &__lanthanoids {
    border: 2px solid $color-lanthanoids;

    &:hover {
      border-color: transparent;
      background-color: $color-lanthanoids;
    }
  }
  &__aktinoids {
    border: 2px solid $color-aktinoids;

    &:hover {
      border-color: transparent;
      background-color: $color-aktinoids;
    }
  }
  &__other-nonmetals {
    border: 2px solid $color-other-non-metals;

    &:hover {
      border-color: transparent;
      background-color: $color-other-non-metals;
    }
  }
  &__unknown {
    border: 2px solid $color-unknown;

    &:hover {
      border-color: transparent;
      background-color: $color-unknown;
    }
  }
}

a {
  text-decoration: none;
  color: $color-white;
  padding: 1rem;
  margin-top: 1rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
