<template>
  <!-- <base-content-container> -->
  <div class="product-name">
    <el-row>
      <el-col :span="12">
        <h3>產品名稱</h3>
      </el-col>
      <el-col :span="12">
        <p class="wishlist">
          <img
            @mouseleave="imgLeave"
            @mouseover="imgHover"
            @click="imgSelected"
            class="icon-wish"
            :src="iconWish"
            alt=""
          />
          加入願望清單
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p>
          <img src="../../assets/icon-shop@2x.png" alt="" /> ＸＸＸＸ健康中心
        </p>
      </el-col>
      <el-col>
        <p>
          <img src="../../assets/icon-location@2x.png" alt="" />
          香港九龍城區九龍仔聯福道17號
        </p>
      </el-col>
      <el-col :xs="24" :sm="6">
        <p>
          <img src="../../assets/icon-refund@2x.png" alt="" />
          免費取消
        </p>
      </el-col>
      <el-col :xs="24" :sm="18">
        <p>
          <img src="../../assets/icon-qrcode@2x.png" alt="" />
          現場請出示電子憑證與護照正本
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p>
          服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
        </p>
      </el-col>
      <el-col>
        <p>
          服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
        </p>
      </el-col>
      <el-col>
        <ul>
          <li>
            服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
          </li>
          <li>
            服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
          </li>
          <li>
            服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
          </li>
          <li>
            服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
          </li>
          <li>
            服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容服務內容
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
  <!-- </base-content-container> -->
</template>

<script>
export default {
  data() {
    return {
      iconWish: require("../../assets/icon-wish-off@2x.png"),
    };
  },
  methods: {
    imgHover() {
      if (this.iconWish === require("../../assets/icon-wish-on@2x.png")) {
        return;
      } else {
        this.iconWish = require("../../assets/icon-wish-hover@2x.png");
      }
    },
    imgLeave() {
      if (this.iconWish === require("../../assets/icon-wish-on@2x.png")) {
        return;
      } else {
        this.iconWish = require("../../assets/icon-wish-off@2x.png");
      }
    },
    imgSelected() {
      if (this.iconWish === require("../../assets/icon-wish-on@2x.png")) {
        this.iconWish = require("../../assets/icon-wish-off@2x.png");
      } else if (
        this.iconWish === require("../../assets/icon-wish-off@2x.png") ||
        this.iconWish === require("../../assets/icon-wish-hover@2x.png")
      ) {
        this.iconWish = require("../../assets/icon-wish-on@2x.png");
      }
    },
  },
};
</script>

<style scoped>
.product-detail .product-name .el-row {
  align-items: center;
  margin-bottom: 2rem;
}

.product-detail .product-name h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.product-detail .product-name p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.product-detail .product-name .el-row:nth-of-type(2) .el-col {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.product-detail .product-name .el-row:nth-of-type(2) p {
  justify-content: flex-start;
}

.product-detail .product-name img {
  width: 24px;
  margin-right: 0.5rem;
  cursor: pointer;
}

.product-detail .product-name .el-row:nth-of-type(3) .el-col {
  margin-bottom: 1rem;
}

.product-detail .product-name .el-row:nth-of-type(3) .el-col ul {
  padding-left: 1.5rem;
}

.product-detail .product-name .el-row:nth-of-type(3) .el-col ul li {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
}
</style>