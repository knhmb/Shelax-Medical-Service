<template>
  <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          <p>人數: 2人</p>
        </el-col>
      </el-row>
    </div>
    <div class="form-body">
      <form-content></form-content>
    </div>
  </div>
  <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/Rectangle-77-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          <p>人數: 1人</p>
        </el-col>
      </el-row>
    </div>
    <div class="form-body">
      <form-content></form-content>
    </div>
  </div>
  <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/product-search-image.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>數量: 2件</p>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="form-body">
      <form-content></form-content>
    </div> -->
  </div>
  <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/product-search-image-2.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>數量: 1件</p>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="form-body">
      <form-content></form-content>
    </div> -->
  </div>
</template>

<script>
import FormContent from "./FormContent.vue";

export default {
  components: {
    FormContent,
  },
};
</script>

<style scoped>
.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 1.5rem;
}

.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form img {
  width: 100%;
  border-radius: 4px;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header
  h3 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header
  p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
  margin-bottom: 0.2rem;
}

/* .shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
} */

.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form .form-body {
  margin-top: 1rem;
  border-top: 0.8px solid #e0e0e0;
  padding-top: 1rem;
}
</style>