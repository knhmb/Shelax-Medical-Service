<template>
  <img src="../assets/banner-partner.jpg" alt="" />
  <Tab />
  <h1>partner</h1>
</template>

<script>
import Tab from "../components/Tab.vue";

export default {
  components: {
    Tab,
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