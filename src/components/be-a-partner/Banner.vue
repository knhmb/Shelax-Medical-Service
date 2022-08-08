<template>
  <div class="banner">
    <img :src="beAPartnerContent.thumbnail" alt="" />
    <!-- <img src="../../assets/banner-partner.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {
  computed: {
    beAPartnerContent() {
      return this.$store.getters["dashboard/beAPartnerContent"];
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