<template>
  <div class="promo-code">
    <h3>優惠碼</h3>
    <el-row :gutter="10">
      <el-col :span="7">
        <el-input placeholder="請輸入優惠碼"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button>添加優惠碼</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.promo-code {
  margin-top: 2rem;
}

.promo-code h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;
}

.promo-code h3::before {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, #7690da 0%, rgba(118, 144, 218, 0) 100%);
  height: 40px;
  z-index: -1;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 70%;
}

.promo-code .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #2d99a0;
  border-color: #2d99a0;
  padding: 0;
  width: 100%;
}
</style>