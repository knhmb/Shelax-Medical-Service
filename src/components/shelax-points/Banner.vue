<template>
  <section class="shelax-banner">
    <base-content-container>
      <!-- <div v-html="shelaxPointsContent.content"></div> -->
      <h3>{{ $t("shelax_points") }}</h3>
      <!-- <p>{{ $t("about_page_text") }}</p> -->
      <el-row justify="space-between">
        <el-col :sm="10" :md="5">
          <img src="../../assets/visual-sample1.png" alt="" />
          <p>{{ $t("become_a_member") }}</p>
          <!-- <p>{{ $t("about_page_image_description") }}</p> -->
        </el-col>
        <el-col :sm="10" :md="5">
          <img src="../../assets/visual-sample1.png" alt="" />
          <p>{{ $t("accumulate_points") }}</p>
          <!-- <p>{{ $t("about_page_image_description") }}</p> -->
        </el-col>
        <el-col :sm="10" :md="5">
          <img src="../../assets/visual-sample1.png" alt="" />
          <p>{{ $t("gift_exchange") }}</p>
          <!-- <p>{{ $t("about_page_image_description") }}</p> -->
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
export default {
  computed: {
    shelaxPointsContent() {
      return this.$store.getters["dashboard/shelaxPointsContent"];
    },
  },
};
</script>

<style scoped>
.shelax-banner {
  padding: 3rem 0 5rem 0;
  background: #8d9de8;
}

.shelax-banner h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 6rem;
}

.shelax-banner p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 120%;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0 6rem 0;
}

.shelax-banner img {
  width: 100%;
}

.shelax-banner .el-row .el-col p:first-of-type {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  margin: 1rem 0 0.5rem 0;
}

.shelax-banner .el-row .el-col p:nth-of-type(2) {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #26408a;
  margin: 0;
  margin-bottom: 2.5rem;
}
</style>