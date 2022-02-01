<template>
  <section class="terms-and-conditions">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :md="6">
          <left-section></left-section>
        </el-col>
        <el-col :sm="24" :md="18">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import LeftSection from "../components/terms-and-conditions/LeftSection.vue";
import RightSection from "../components/terms-and-conditions/RightSection.vue";

export default {
  components: {
    LeftSection,
    RightSection,
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.terms-and-conditions {
  margin: 2rem 0;
}

@media screen and (max-width: 991px) {
  .terms-and-conditions .el-col:first-of-type {
    margin-bottom: 1rem;
  }
}
</style>