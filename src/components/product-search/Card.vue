<template>
  <div class="product-card">
    <el-row>
      <el-col :sm="24" :md="7">
        <img :src="image" alt="" />
      </el-col>
      <el-col :sm="24" :md="17">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <el-rate
          disabled
          disabled-void-color="#c6c6c6"
          :colors="colors"
          v-model="value"
          score-template="(138,370)"
          show-score
          text-color="#8D8D8D"
        ></el-rate>
        <p class="price">HKD 80</p>
        <div class="btn-align">
          <el-button type="primary" :icon="ArrowRight">立即購買</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";

export default {
  props: ["title", "description", "image"],
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 4,
      ArrowRight,
    };
  },
};
</script>

<style>
.right-section .product-card {
  border: 0.8px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.right-section .product-card .el-col:last-of-type {
  padding: 16px;
}

.right-section .product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 0 0 4px;
}

.right-section .product-card h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
  /* margin-top: 1rem; */
}

.right-section .product-card p {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
  margin: 0.5rem 0;
}

.right-section .product-card p.price {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #4e68b2;
  text-align: end;
}

.right-section .product-card .btn-align {
  text-align: end;
}

.right-section .product-card .el-button {
  display: inline-flex;
  align-items: center;
  background: #7690da;
  border-color: #7690da;
  border-radius: 4px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.right-section .product-card .el-button span {
  order: -1;
  margin-right: 0.5rem;
}
</style>