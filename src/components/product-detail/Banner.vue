<template>
  <base-content-container>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>主頁 </el-breadcrumb-item>
      <el-breadcrumb-item>抗疫產品</el-breadcrumb-item>
      <el-breadcrumb-item>產品名稱</el-breadcrumb-item>
    </el-breadcrumb>
  </base-content-container>
  <div class="banner">
    <el-carousel trigger="click" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <base-content-container>
          <img src="../../assets/product-detail-banner.png" alt="" />
        </base-content-container>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      ArrowRight,
    };
  },
};
</script>

<style>
.product-detail .el-breadcrumb {
  margin: 2rem 0;
}

.product-detail .banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-detail .banner .el-carousel {
  margin-bottom: 2rem;
}

.product-detail .banner .el-carousel__arrow {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}

.product-detail .banner .el-carousel__arrow .el-icon {
  color: black;
  font-size: 20px;
}

.product-detail .banner .el-carousel__arrow.el-carousel__arrow--left {
  left: 11rem;
}

.product-detail .banner .el-carousel__arrow.el-carousel__arrow--right {
  right: 11rem;
}

@media screen and (min-width: 1349px) {
  .product-detail .banner .el-carousel__container {
    height: 390px;
  }
}

@media screen and (max-width: 991px) {
  .product-detail .banner .el-carousel__arrow.el-carousel__arrow--left {
    left: 2rem;
  }

  .product-detail .banner .el-carousel__arrow.el-carousel__arrow--right {
    right: 2rem;
  }
}

@media screen and (max-width: 1024px) {
  .product-detail .banner .el-carousel__container {
    height: 258px;
  }
}

@media screen and (max-width: 540px) {
  .product-detail .banner .el-carousel__container {
    height: 180px;
  }
}

@media screen and (max-width: 414px) {
  .product-detail .banner .el-carousel__container {
    height: 128px;
  }
}

@media screen and (max-width: 393px) {
  .product-detail .banner .el-carousel__container {
    height: 120px;
  }
}

@media screen and (max-width: 375px) {
  .product-detail .banner .el-carousel__container {
    height: 112px;
  }
}
</style>