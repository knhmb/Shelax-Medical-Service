<template>
  <section class="be-a-partner">
    <Banner />
    <Tab />
    <first-section></first-section>
    <second-section></second-section>
  </section>
</template>

<script>
import Tab from "../components/Tab.vue";
import Banner from "../components/be-a-partner/Banner.vue";
import FirstSection from "../components/be-a-partner/FirstSection.vue";
import SecondSection from "../components/be-a-partner/SecondSection.vue";

export default {
  components: {
    Tab,
    Banner,
    FirstSection,
    SecondSection,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>