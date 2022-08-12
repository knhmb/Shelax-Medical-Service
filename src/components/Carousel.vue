<template>
  <div class="carousel">
    <el-row>
      <el-col>
        <el-carousel
          trigger="click"
          arrow="always"
          height="350px"
          indicator-position="none"
        >
          <el-carousel-item v-for="banner in promoBanners" :key="banner.id">
            <img :src="banner.path" class="carousel-img" alt="" />
          </el-carousel-item>
          <!-- <el-carousel-item v-for="item in 4" :key="item">
            <img
              src="../assets/banner-sample@2x.png"
              class="carousel-img"
              alt=""
            />
          </el-carousel-item> -->
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    promoBanners() {
      return this.$store.getters["dashboard/promoBanners"];
    },
  },
  async created() {
    this.$store.dispatch("dashboard/getPromoBanner");
  },
};
</script>

<style>
.carousel {
  /* min-width: 320px; */
}

.carousel .carousel-img {
  width: 100%;
  /* height: fit-content; */
  height: 100%;
  object-fit: cover;
  /* object-fit: scale-down; */
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

.carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 50vh !important;
}

@media screen and (max-width: 1024px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  } */

  /* .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 256px !important;
  } */
}

@media screen and (max-width: 768px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  } */

  /* .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 192px !important;
  } */
}

@media screen and (max-width: 540px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  } */

  /* .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 135px !important;
  } */
}

@media screen and (max-width: 490px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  } */

  /* .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 104px !important;
  } */
}

@media screen and (max-width: 375px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  } */

  /* .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 95px !important;
  } */
}

@media screen and (max-width: 320px) {
  /* .carousel .carousel-img {
    object-fit: contain;
  }

  .carousel .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 80px !important;
  } */
}
</style>