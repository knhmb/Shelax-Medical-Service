<template>
  <div class="q-and-a-banner">
    <img :src="faq.thumbnail" alt="" />
    <!-- <img src="../../assets/banner-q&a.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {
  computed: {
    faq() {
      return this.$store.getters["dashboard/faq"];
    },
  },
};
</script>

<style scoped>
.q-and-a-banner {
  /* margin: 1rem 0; */
}

.q-and-a-banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>