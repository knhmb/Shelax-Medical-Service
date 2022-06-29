<template>
  <section class="second-section">
    <base-content-container>
      <el-row :gutter="40">
        <el-col :sm="24" :md="11">
          <h3>{{ $t("about_page_title") }}</h3>
          <p>
            {{ $t("about_page_description_one") }}
            {{ $t("about_page_description_two") }}
          </p>
        </el-col>
        <el-col :sm="24" :md="13">
          <div class="box"></div>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<style scoped>
.second-section {
  background: #e5e5e5;
  padding: 3rem 0;
}

.second-section .el-row {
  align-items: center;
}

.second-section h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #262626;
}

.second-section p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  color: #525252;
  margin: 1.5rem 0;
}

.second-section .box {
  background: #bec6de;
  border-radius: 1rem;
  /* width: 35.6875rem; */
  width: 100%;
  height: 20rem;
}
</style>