<template>
  <section class="shopping-cart-step-2">
    <base-content-container>
      <el-row>
        <el-col :span="18">
          <left-section></left-section>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import LeftSection from "../components/shopping-cart-2/LeftSection.vue";

export default {
  components: {
    LeftSection,
  },
};
</script>

<style scoped>
.shopping-cart-step-2 {
  margin: 2rem 0;
}
</style>