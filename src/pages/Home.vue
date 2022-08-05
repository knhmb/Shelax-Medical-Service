<template>
  <carousel></carousel>
  <search-section></search-section>
  <popular-clinics-section></popular-clinics-section>
  <new-shelf-section></new-shelf-section>
  <fourth-section></fourth-section>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import SearchSection from "../components/SearchSection.vue";
import PopularClinicsSection from "../components/popular-clinics/PopularClinicsSection.vue";
import NewShelfSection from "../components/new-shelf/NewShelfSection.vue";
import FourthSection from "../components/new-shelf/FourthSection.vue";

export default {
  components: {
    // VFacebookLogin,
    // TheHeader,
    Carousel,
    SearchSection,
    PopularClinicsSection,
    NewShelfSection,
    FourthSection,
    // TheFooter,
  },
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getServiceCategory");
      this.$store.dispatch("dashboard/getProductCategory");
      this.$store.dispatch("dashboard/getThemes");
    },
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getThemes");
    this.$store.dispatch("dashboard/getServiceCategory");
    this.$store.dispatch("dashboard/getProductCategory");
    this.$store.dispatch("toggleSteps", false);
  },
};
</script>