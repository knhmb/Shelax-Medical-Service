<template>
  <div class="banner">
    <img :src="aboutUsContent.thumbnail" alt="" />
    <!-- <img src="../../assets/banner-about.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {
  computed: {
    aboutUsContent() {
      return this.$store.getters["dashboard/aboutUsContent"];
    },
  },
};
</script>

<style scoped>
.banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>