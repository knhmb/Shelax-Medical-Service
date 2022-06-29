<template>
  <div class="second-section">
    <base-content-container>
      <el-row :gutter="40">
        <el-col :sm="24" :md="12">
          <div class="img"></div>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>{{ $t("about_page_title") }}</h4>
          <p>
            {{ $t("about_page_description_one") }}
            {{ $t("about_page_description_two") }}
          </p>
        </el-col>
      </el-row>
    </base-content-container>
  </div>
</template>

<style scoped>
.second-section {
  padding: 4rem 0;
  background-color: #e6eaf0;
}

.second-section .el-row {
  align-items: center;
}

.second-section div.img {
  background: #bec6de;
  border-radius: 16px;
  width: 100%;
  height: 270px;
}

.second-section h4 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #262626;
  margin-bottom: 1.5rem;
}

.second-section p {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
}

@media screen and (max-width: 991px) {
  .second-section div.img {
    margin-bottom: 1.5rem;
  }
}
</style>