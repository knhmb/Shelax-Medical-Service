<template>
  <div class="popular-clinics">
    <section class="popular-clinics-content">
      <base-content-container>
        <h2 class="title">孕前檢查</h2>
      </base-content-container>

      <el-carousel
        trigger="click"
        arrow="always"
        indicator-position="none"
        class="hidden-sm-and-up"
      >
        <el-carousel-item v-for="product in products" :key="product.id">
          <base-content-container>
            <el-row :gutter="12">
              <el-col :sm="6" :lg="6">
                <latest-offers-card
                  :name="product.name"
                  :description="product.description"
                  :price="product.price"
                  :rate="product.rate"
                  :image="product.image"
                  :number-of-rate="product.numberOfRate"
                  :discount="product.discountPrice"
                ></latest-offers-card>
              </el-col>
            </el-row>
          </base-content-container>
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        :interval="5000"
        trigger="click"
        arrow="always"
        indicator-position="none"
        height="350px"
        class="hide"
      >
        <el-carousel-item>
          <base-content-container>
            <el-row :gutter="12">
              <el-col
                :sm="6"
                :lg="6"
                v-for="product in products"
                :key="product.id"
              >
                <latest-offers-card
                  :name="product.name"
                  :description="product.description"
                  :price="product.price"
                  :rate="product.rate"
                  :image="product.image"
                  :number-of-rate="product.numberOfRate"
                  :discount="product.discountPrice"
                ></latest-offers-card>
              </el-col>
            </el-row>
          </base-content-container>
        </el-carousel-item>
      </el-carousel>
      <div class="popular-clinics-btn">
        <el-button class="btn">顯示全部</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import LatestOffersCard from "../LatestOffersCard.vue";

export default {
  components: {
    LatestOffersCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/unsplash_HuWm7malJ18.png"),
        },
        {
          id: 2,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/unsplash_e7MJLM5VGjY.png"),
        },
        {
          id: 3,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/unsplash_XJptUS8nbhs.png"),
        },
        {
          id: 4,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/unsplash_vVKh9xeLub4.png"),
        },
      ],
    };
  },
};
</script>

<style>
.popular-clinics {
  background-color: #e6eaf0;
  padding: 2rem 0;
  /* min-width: 320px; */
}

/* .yahoo {
  margin-top: 3rem;
} */

.popular-clinics .title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 2rem;
  text-align: center;
}

.popular-clinics .popular-clinics-btn {
  text-align: center;
}

.popular-clinics .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #4b4b4b;
  margin-top: 0.5rem;
}

.popular-clinics .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 60vh !important;
}

.mobile-view {
  /* min-width: 800px !important; */
}

/* @media screen and (min-width: 591px) and (max-width: 767px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 650px !important;
  }
}

@media screen and (min-width: 541px) and (max-width: 590px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 550px !important;
  }
}

@media screen and (min-width: 486px) and (max-width: 540px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 490px !important;
  }
}

@media screen and (min-width: 441px) and (max-width: 485px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 430px !important;
  }
}

@media screen and (min-width: 361px) and (max-width: 440px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 400px !important;
  }
}

@media screen and (min-width: 321px) and (max-width: 360px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 370px !important;
  }
}

@media screen and (max-width: 320px) {
  .popular-clinics
    .el-carousel.el-carousel--horizontal
    .el-carousel__container {
    height: 370px !important;
  }
} */

@media screen and (max-width: 767px) {
  .hide {
    display: none;
  }
}

/* @media only screen and (max-width: 1139px) {
  .rakuten .btn {
    margin-top: 1.5rem;
  }
} */
</style>