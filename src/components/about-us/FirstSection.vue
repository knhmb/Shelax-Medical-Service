<template>
  <div class="first-section">
    <base-content-container>
      <el-row>
        <el-col>
          <h2>{{ $t("about_shelax") }}</h2>
          <h4>{{ $t("about_page_text") }}</h4>
        </el-col>

        <el-col>
          <p>
            {{ $t("about_page_description_one") }}
          </p>
          <p>
            {{ $t("about_page_description_two") }}
          </p>
          <p>
            {{ $t("about_page_description_three") }}
          </p>
        </el-col>
      </el-row>
    </base-content-container>
  </div>
</template>

<style scoped>
.first-section {
  padding: 4rem 0;
}

.first-section h2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #4e68b2;
  margin-bottom: 1rem;
}

.first-section h4 {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #262626;
}

.first-section p {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #525252;
  margin-bottom: 1.5rem;
}

.first-section .el-col {
  margin-bottom: 3rem;
}
</style>