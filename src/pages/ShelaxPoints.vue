<template>
  <section class="shelax-points">
    <Banner />
    <section-2></section-2>
    <section-3></section-3>
  </section>
</template>

<script>
import Banner from "../components/shelax-points/Banner.vue";
import Section2 from "../components/shelax-points/Section2.vue";
import Section3 from "../components/shelax-points/Section3.vue";

export default {
  components: {
    Banner,
    Section2,
    Section3,
  },
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getShelaxPointsContent");
    },
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getShelaxPointsContent");
  },
};
</script>