<template>
  <div class="popular-clinics">
    <section class="popular-clinics-content">
      <base-content-container>
        <h2 class="title">熱門診所</h2>
      </base-content-container>

      <el-carousel
        :interval="5000"
        trigger="click"
        arrow="always"
        indicator-position="none"
        height="330px"
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
          productCategory: "popularClinics",
        },
        {
          id: 2,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "popularClinics",
        },
        {
          id: 3,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "popularClinics",
        },
        {
          id: 4,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          productCategory: "popularClinics",
        },
      ],
    };
  },
};
</script>

<style scoped>
.popular-clinics {
  background-color: #e6eaf0;
  padding: 2rem 0;
}

/* .yahoo {
  margin-top: 3rem;
} */

.title {
  font-weight: 700;
  font-size: 32px;
  /* margin-bottom: 2rem; */
}

.popular-clinics-btn {
  text-align: center;
}

.btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #4b4b4b;
  margin-top: 0.5rem;
}

/* @media only screen and (max-width: 1139px) {
  .rakuten .btn {
    margin-top: 1.5rem;
  }
} */
</style>