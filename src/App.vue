<template>
  <the-header></the-header>
  <carousel></carousel>
  <search-section></search-section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import Carousel from "./components/Carousel.vue";
import SearchSection from "./components/SearchSection.vue";

export default {
  components: {
    TheHeader,
    Carousel,
    SearchSection,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans HK", sans-serif;
}
</style>
