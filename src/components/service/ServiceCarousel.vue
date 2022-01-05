<template>
  <!-- <div class="el-row">
    <div class="el-col"> -->
  <el-carousel
    trigger="click"
    height="300px"
    arrow="always"
    indicator-position="none"
  >
    <el-carousel-item v-for="item in 4" :key="item">
      <img
        src="https://www.wirelessnursecall.com/application/files/3414/4723/9076/l1.png"
        style="height: 100%; width: 100%"
        alt=""
      />
    </el-carousel-item>
  </el-carousel>
  <!-- </div>
  </div> -->
</template>

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
}
</style>