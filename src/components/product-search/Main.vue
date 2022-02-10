<template>
  <div class="product-search-content">
    <base-content-container>
      <h2>口罩</h2>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="6">
          <left-section></left-section>
        </el-col>
        <el-col :sm="24" :lg="18">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-content-container>
  </div>
</template>


<script>
import LeftSection from "./LeftSection.vue";
import RightSection from "./RightSection.vue";

export default {
  components: {
    LeftSection,
    RightSection,
  },
};
</script>

<style scoped>
.product-search-content {
  margin-top: 1.5rem;
}

.product-search-content h2 {
  margin-bottom: 1.5rem;
}
</style>