<template>
  <section class="about-us">
    <Banner />
    <Tab />
    <first-section></first-section>
    <second-section></second-section>
    <third-section></third-section>
  </section>
</template>

<script>
import Banner from "../components/about-us/Banner.vue";
import Tab from "../components/Tab.vue";
import FirstSection from "../components/about-us/FirstSection.vue";
import SecondSection from "../components/about-us/SecondSection.vue";
import ThirdSection from "../components/about-us/ThirdSection.vue";

export default {
  components: {
    Banner,
    Tab,
    FirstSection,
    SecondSection,
    ThirdSection,
  },
};
</script>