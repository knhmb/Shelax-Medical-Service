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
};
</script>

<style scoped>
.shopping-cart-step-2 {
  margin: 2rem 0;
}
</style>