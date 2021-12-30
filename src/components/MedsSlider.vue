<template>
  <div class="all-content">
    <base-content-container>
      <section class="medication">
        <el-carousel trigger="click" height="150px" arrow="always">
          <el-carousel-item>
            <div class="slider">
              <el-row justify="space-around">
                <el-col :span="5">
                  <img
                    src="../assets/icon-product-a@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>抗疫產品</p>
                </el-col>
                <el-col :span="5">
                  <img
                    src="../assets/icon-product-b@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>健康營養</p>
                </el-col>
                <el-col :span="5">
                  <img
                    src="../assets/icon-product-c@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>復康保健</p>
                </el-col>
                <el-col :span="5">
                  <img
                    src="../assets/icon-product-d@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>舒緩痛症</p>
                </el-col>
                <el-col :span="4">
                  <img
                    src="../assets/icon-product-e@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>醫療器械</p>
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </section>
    </base-content-container>
  </div>
</template>

<style>
.all-content {
  background-color: #e5e5e5;
  padding: 2rem 0;
}
.all-content .medication {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  border-radius: 16px;
  /* margin-top: 1rem; */
}

.all-content .product-img {
  width: 78px;
}

.all-content .slider {
  /* text-align: center; */
  /* display: flex;
  justify-content: ; */
  padding: 1rem 0 1rem 4rem;
}

.all-content .el-carousel.el-carousel--horizontal .el-carousel__item {
  /* padding: 1rem 0 1rem 0; */
}

.all-content
  .el-carousel.el-carousel--horizontal
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--left,
.all-content
  .el-carousel.el-carousel--horizontal
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--right {
  background-color: transparent;
}

.all-content
  .el-carousel.el-carousel--horizontal
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--left
  .el-icon,
.all-content
  .el-carousel.el-carousel--horizontal
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--right
  .el-icon {
  color: #262626;
  font-size: 20px;
}

.all-content p {
  margin: 0;
}
</style>