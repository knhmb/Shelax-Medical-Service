<template>
  <section class="about-us">
    <Banner />
    <Tab />
  </section>
</template>

<script>
import Banner from "../components/about-us/Banner.vue";
import Tab from "../components/Tab.vue";

export default {
  components: {
    Banner,
    Tab,
  },
};
</script>