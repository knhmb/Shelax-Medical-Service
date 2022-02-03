<template>
  <div class="second-section">
    <base-content-container>
      <h2>即南助乞門</h2>
      <h4>你發位王珠借立乍村文遠前把石象</h4>
      <el-row justify="space-between">
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">你發位王珠借立</p>
          <p class="desc">吃申三旦力未歡們了同半干十跳而菜用未歡</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">你發位王珠借立</p>
          <p class="desc">吃申三旦力未歡們了同半干十跳而菜用未歡</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">你發位王珠借立</p>
          <p class="desc">吃申三旦力未歡們了同半干十跳而菜用未歡</p>
        </el-col>
        <el-col :sm="12" :md="4">
          <div class="img"></div>
          <p class="title">你發位王珠借立</p>
          <p class="desc">吃申三旦力未歡們了同半干十跳而菜用未歡</p>
        </el-col>
      </el-row>
    </base-content-container>
  </div>
</template>

<style scoped>
.second-section {
  background-color: #e6eaf0;
  padding: 4rem 0;
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