<template>
  <!-- <div class="el-row">
    <div class="el-col"> -->
  <el-carousel
    trigger="click"
    height="390px"
    arrow="always"
    indicator-position="none"
  >
    <el-carousel-item v-for="item in singleItemDetail.coverPhotos" :key="item">
      <img :src="item.imagePath" alt="" />
    </el-carousel-item>
  </el-carousel>
  <!-- </div>
  </div> -->
</template>

<script>
export default {
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  created() {
    console.log(this.singleItemDetail);
  },
};
</script>

<style>
.service
  .service-carousel
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--left,
.service
  .service-carousel
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--right {
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  color: #262626;
}

.service
  .service-carousel
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--left {
  left: -13px;
}

.service
  .service-carousel
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--right {
  right: -12px;
}

.service .service-carousel .el-carousel .el-carousel__item img {
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service .service-carousel .el-carousel .el-carousel__container {
  height: 50vh !important;
}

/* @media screen and (max-width: 1024px) {
  .service .service-carousel .el-carousel .el-carousel__container {
    height: 256px !important;
  }
}

@media screen and (max-width: 540px) {
  .service .service-carousel .el-carousel .el-carousel__container {
    height: 176px !important;
  }
}

@media screen and (max-width: 414px) {
  .service .service-carousel .el-carousel .el-carousel__container {
    height: 127px !important;
  }
} */
</style>