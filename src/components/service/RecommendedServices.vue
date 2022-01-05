<template>
  <div class="recommended-services">
    <section class="recommended-services-content">
      <base-content-container>
        <h2 class="title">更多推薦服務</h2>
      </base-content-container>

      <el-carousel
        :interval="5000"
        trigger="click"
        arrow="always"
        indicator-position="none"
        height="350px"
      >
        <el-carousel-item>
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
        </el-carousel-item>
      </el-carousel>
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

<style scoped>
.recommended-services {
  background-color: #e5e5e5;
  padding: 2rem 0;
}

.title {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
}
</style>