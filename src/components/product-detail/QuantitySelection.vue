<template>
  <div class="select-quantity">
    <base-content-container>
      <h3>選擇數量</h3>
      <div class="quantity">
        <p>數量</p>
        <el-row>
          <el-col :sm="24" :md="15">
            <div class="prod-name">
              <el-row>
                <el-col :sm="24" :md="12">
                  <p>產品名稱</p>
                </el-col>
                <el-col :sm="24" :md="12">
                  <el-input-number v-model="num" :min="1" :max="10" />
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="24" :md="9">
            <el-button>加入購物車</el-button>
          </el-col>
        </el-row>
      </div>
    </base-content-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
    };
  },
};
</script>

<style>
.product-detail .select-quantity {
  background: #f5f7fa;
  padding: 2rem 0;
}

.product-detail .select-quantity h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #525252;
  margin-bottom: 1rem;
}

.product-detail .select-quantity .quantity {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 16px;
}

.product-detail .select-quantity .quantity > p {
  margin-bottom: 1rem;
}

.product-detail .select-quantity .quantity p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
}

.product-detail .select-quantity .quantity .prod-name {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
}

.product-detail .select-quantity .quantity .el-row {
  align-items: center;
}

.product-detail .select-quantity .quantity .el-row .el-col:last-of-type {
  text-align: end;
}

.product-detail .select-quantity .quantity .el-row .el-col .el-button {
  width: 50%;
  background: #2d99a0;
  border-radius: 4px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.product-detail
  .select-quantity
  .quantity
  .prod-name
  .el-row
  .el-col:last-of-type {
  text-align: end;
}

.product-detail
  .quantity
  .prod-name
  .el-input-number
  .el-input-number__decrease,
.product-detail
  .quantity
  .prod-name
  .el-input-number
  .el-input-number__increase {
  background: #f4f4f4;
  border: 0.8px solid #e0e0e0;
}

.product-detail .quantity .prod-name .el-input-number .el-input__inner {
  border: none;
}

@media screen and (max-width: 991px) {
  .product-detail
    .select-quantity
    .quantity
    .prod-name
    .el-row
    .el-col:last-of-type,
  .product-detail .select-quantity .quantity p {
    text-align: center;
  }

  .product-detail .select-quantity .quantity .el-row .el-col:last-of-type {
    text-align: center;
    margin-top: 1rem;
  }
}
</style>