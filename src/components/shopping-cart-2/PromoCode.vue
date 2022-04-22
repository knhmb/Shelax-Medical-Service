<template>
  <div class="promo-code">
    <h3>優惠碼</h3>
    <el-row :gutter="10">
      <el-col :sm="24" :md="7">
        <el-input placeholder="請輸入優惠碼"></el-input>
      </el-col>
      <el-col :sm="24" :md="5">
        <el-button>添加優惠碼</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24" :md="16">
        <p>點擊按鈕後，你的訂單將會自動提交。請在下一頁選擇付款方式</p>
      </el-col>
      <el-col :sm="24" :md="8">
        <el-button type="primary">付款</el-button>
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

.promo-code .el-row:last-of-type {
  margin-top: 3.5rem;
  align-items: center;
}

.promo-code p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #000000;
}

.promo-code .el-button--primary {
  background: #7690da;
  border-radius: 4px;
  border-color: #7690da;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .promo-code .el-button {
    margin-top: 1rem;
  }
}
</style>