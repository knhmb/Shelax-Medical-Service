<template>
  <carousel></carousel>
  <search-section></search-section>
  <!-- <popular-clinics-section></popular-clinics-section>
  <new-shelf-section></new-shelf-section>
  <fourth-section></fourth-section>
  <theme-x></theme-x>
  <Theme8 /> -->
</template>

<script>
import Carousel from "../components/Carousel.vue";
import SearchSection from "../components/SearchSection.vue";
// import PopularClinicsSection from "../components/popular-clinics/PopularClinicsSection.vue";
// import NewShelfSection from "../components/new-shelf/NewShelfSection.vue";
// import FourthSection from "../components/new-shelf/FourthSection.vue";
// import ThemeX from "../components/theme-x/ThemeX.vue";
// import Theme8 from "../components/theme-8/Theme8.vue";

export default {
  components: {
    // VFacebookLogin,
    // TheHeader,
    Carousel,
    SearchSection,
    // PopularClinicsSection,
    // NewShelfSection,
    // FourthSection,
    // ThemeX,
    // Theme8,
    // TheFooter,
  },
  watch: {
    async lang() {
      this.$store.dispatch("dashboard/getServiceCategory");
      this.$store.dispatch("dashboard/getProductCategory");
      this.$store.commit("dashboard/RESET_THEMES");
      await this.$store.dispatch("dashboard/getThemes");
      this.themes.filter((item) => {
        this.$store.dispatch("dashboard/getSingleTheme", item);
      });
    },
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
    themes() {
      return this.$store.getters["dashboard/themes"];
    },
    getSlug() {
      return this.themes.filter((item) => item);
    },
  },
  async created() {
    this.$store.commit("dashboard/RESET_THEMES");

    await this.$store.dispatch("dashboard/getThemes");
    this.themes.filter((item) => {
      this.$store.dispatch("dashboard/getSingleTheme", item);
    });
    // this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
    this.$store.dispatch("dashboard/getServiceCategory");
    this.$store.dispatch("dashboard/getProductCategory");
    this.$store.dispatch("toggleSteps", false);
  },
};
</script>