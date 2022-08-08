<template>
  <div class="second-section">
    <!-- <base-content-container>
      <h2>{{ $t("about_page_title") }}</h2>
      <h4>{{ $t("about_page_text") }}</h4>
      <el-row justify="space-between">
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">{{ $t("about_page_image_title") }}</p>
          <p class="desc">{{ $t("about_page_image_description") }}</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">{{ $t("about_page_image_title") }}</p>
          <p class="desc">{{ $t("about_page_image_description") }}</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">{{ $t("about_page_image_title") }}</p>
          <p class="desc">{{ $t("about_page_image_description") }}</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">{{ $t("about_page_image_title") }}</p>
          <p class="desc">{{ $t("about_page_image_description") }}</p>
        </el-col>
      </el-row>
    </base-content-container> -->
  </div>
</template>

<style scoped>
.second-section {
  background-color: #e6eaf0;
  /* padding: 4rem 0; */
}

.second-section .el-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-section h2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #4e68b2;
  margin-bottom: 1rem;
}

.second-section h4 {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #262626;
  margin-bottom: 4rem;
}

.second-section .img {
  background: #bec6de;
  border-radius: 16px;
  width: 120px;
  height: 120px;
}

.second-section .title {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #262626;
  margin: 1rem 0;
}

.second-section .desc {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #525252;
}

@media screen and (max-width: 991px) {
  .second-section .el-col {
    margin-bottom: 2rem;
  }
}
</style>