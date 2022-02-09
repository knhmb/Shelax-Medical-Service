<template>
  <div class="offer">
    <div class="body">
      <el-row>
        <el-col>
          <span class="small">from</span>
          <span>HKD 80</span>
        </el-col>
      </el-row>

      <el-rate
        :colors="colors"
        disabled-void-color="#C6C6C6"
        v-model="value"
        disabled
        show-score
        text-color="#7690DA"
      >
      </el-rate>
      <small>(138,370)</small>
      <el-button>立即購買</el-button>
      <div class="points">
        <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
        <span class="small">可累積 Shelax Points</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.2,
      colors: ["#7690DA", "#7690DA", "#7690DA"],
    };
  },
};
</script>

<style>
.product-detail .offer {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 1rem;
}

.product-detail .offer::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.8px;
  bottom: 2.7rem;
  left: 0;
  background-color: #e0e0e0;
}

.product-detail .offer .small {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #6f6f6f;
  margin-right: 0.5rem;
}

.product-detail .offer span {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.product-detail .offer .el-rate {
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
}

.product-detail .offer .el-rate .el-rate__text {
  order: -1;
  font-size: 14px;
  margin-right: 0.5rem;
}

.product-detail .offer small {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.product-detail .offer .el-button {
  width: 100%;
  background: #7690da;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.product-detail .offer .el-button span {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.product-detail .offer .points {
  display: flex;
  align-items: center;
}

.product-detail .offer img {
  width: 15px;
  margin-right: 0.5rem;
}

.product-detail .offer img + .small {
  color: #525252;
}
/* @media screen and (max-width: 1199px) {
  .product-detail .offer .el-rate {
    margin-left: 1rem;
  }
} */
</style>