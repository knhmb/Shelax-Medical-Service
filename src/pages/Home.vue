<template>
  <!-- <the-header></the-header> -->
  <carousel></carousel>
  <search-section></search-section>
  <popular-clinics-section></popular-clinics-section>
  <new-shelf-section></new-shelf-section>
  <fourth-section></fourth-section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
// import TheHeader from "../components/TheHeader.vue";
import Carousel from "../components/Carousel.vue";
import SearchSection from "../components/SearchSection.vue";
import PopularClinicsSection from "../components/popular-clinics/PopularClinicsSection.vue";
import NewShelfSection from "../components/new-shelf/NewShelfSection.vue";
import FourthSection from "../components/new-shelf/FourthSection.vue";
// import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    // TheHeader,
    Carousel,
    SearchSection,
    PopularClinicsSection,
    NewShelfSection,
    FourthSection,
    // TheFooter,
  },
  created() {
    this.$store.dispatch("dashboard/getThemes");
  },
};
</script>