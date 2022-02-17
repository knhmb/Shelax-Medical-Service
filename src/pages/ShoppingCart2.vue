<template>
  <section class="shopping-cart-step-2">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="17">
          <left-section></left-section>
        </el-col>
        <el-col :sm="24" :lg="7">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import LeftSection from "../components/shopping-cart-2/LeftSection.vue";
import RightSection from "../components/shopping-cart-2/RightSection.vue";

export default {
  components: {
    LeftSection,
    RightSection,
  },
  computed: {
    isSteps() {
      return this.$store.getters.isStep;
    },
  },
  created() {
    this.$store.dispatch("toggleSteps", true);
    this.$store.dispatch("setStep", 1);
  },
  beforeUnmount() {
    this.$store.dispatch("toggleSteps", false);
  },
};
</script>

<style scoped>
.shopping-cart-step-2 {
  margin: 2rem 0;
  background: #e5e5e5;
  margin-top: -0.1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 0;
}
</style>