<template>
  <div class="latest-offers">
    <section class="latest-offers-content">
      <base-content-container>
        <h2 class="title">最新優惠</h2>
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
                  :category="product.productCategory"
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
        height="320px"
        class="hide"
      >
        <el-carousel-item>
          <!-- <base-container> -->
          <base-content-container>
            <el-row :gutter="12">
              <el-col :span="6" v-for="product in products" :key="product.id">
                <latest-offers-card
                  :name="product.name"
                  :description="product.description"
                  :price="product.price"
                  :rate="product.rate"
                  :category="product.productCategory"
                  :number-of-rate="product.numberOfRate"
                  :discount="product.discountPrice"
                ></latest-offers-card>
              </el-col>
            </el-row>
          </base-content-container>
          <!-- </base-container> -->
        </el-carousel-item>
      </el-carousel>
      <div class="latest-offers-btn">
        <el-button class="btn">顯示全部</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import LatestOffersCard from "./LatestOffersCard.vue";

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
          productCategory: "latestOffers",
        },
        {
          id: 2,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "latestOffers",
        },
        {
          id: 3,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "latestOffers",
        },
        {
          id: 4,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "latestOffers",
        },
      ],
    };
  },
};
</script>

<style>
.latest-offers {
  background-color: #e5e5e5;
  padding: 2rem 0;
}

/* .yahoo {
  margin-top: 3rem;
} */

.latest-offers .title {
  font-weight: 700;
  font-size: 32px;
  /* margin-bottom: 2rem; */
}

.latest-offers .latest-offers-btn {
  text-align: center;
}

.latest-offers .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #4b4b4b;
  margin-top: 0.5rem;
}

@media screen and (max-width: 767px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 650px !important;
  }
}

@media screen and (max-width: 590px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 550px !important;
  }
}

@media screen and (max-width: 540px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 470px !important;
  }
}

@media screen and (max-width: 485px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 430px !important;
  }
}

@media screen and (max-width: 440px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 400px !important;
  }
}

@media screen and (max-width: 360px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 350px !important;
  }
}

@media screen and (max-width: 320px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 350px !important;
  }
}

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