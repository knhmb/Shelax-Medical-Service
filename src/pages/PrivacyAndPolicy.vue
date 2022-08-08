<template>
  <section class="privacy-and-policy">
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
import LeftSection from "../components/privacy-and-policy/LeftSection.vue";
import RightSection from "../components/privacy-and-policy/RightSection.vue";

export default {
  components: {
    LeftSection,
    RightSection,
  },
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getPrivacyPolicyContent");
    },
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getPrivacyPolicyContent");
  },
};
</script>

<style scoped>
.privacy-and-policy {
  margin: 2rem 0;
}

@media screen and (max-width: 991px) {
  .privacy-and-policy .el-col:first-of-type {
    margin-bottom: 1rem;
  }
}
</style>