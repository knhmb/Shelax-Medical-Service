<template>
  <section class="be-a-partner">
    <Banner />
    <Tab />
    <first-section></first-section>
    <second-section></second-section>
    <third-section></third-section>
    <fourth-section></fourth-section>
    <last-section></last-section>
  </section>
</template>

<script>
import Tab from "../components/Tab.vue";
import Banner from "../components/be-a-partner/Banner.vue";
import FirstSection from "../components/be-a-partner/FirstSection.vue";
import SecondSection from "../components/be-a-partner/SecondSection.vue";
import ThirdSection from "../components/be-a-partner/ThirdSection.vue";
import FourthSection from "../components/be-a-partner/FourthSection.vue";
import LastSection from "../components/be-a-partner/LastSection.vue";

export default {
  components: {
    Tab,
    Banner,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    LastSection,
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