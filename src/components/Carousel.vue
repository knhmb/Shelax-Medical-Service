<template>
  <div class="carousel">
    <el-row>
      <el-col>
        <el-carousel trigger="click" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <img
              src="../assets/banner-sample@2x.png"
              class="carousel-img"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.carousel .carousel-img {
  width: 100%;
  height: 100%;
  /* height: 100%; */
}

.carousel
  .el-carousel.el-carousel--horizontal
  .el-carousel__arrow.el-carousel__arrow--left,
.carousel
  .el-carousel.el-carousel--horizontal
  .el-carousel__arrow.el-carousel__arrow--right {
  background-color: transparent;
}

.carousel .el-carousel__arrow.el-carousel__arrow--left .el-icon,
.carousel .el-carousel__arrow.el-carousel__arrow--right .el-icon {
  font-size: 2rem;
}
</style>