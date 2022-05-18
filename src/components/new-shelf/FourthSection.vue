<template>
  <div class="new-shelf">
    <section class="new-shelf-content">
      <base-content-container>
        <h2 class="title">全新上架</h2>
      </base-content-container>

      <el-carousel
        trigger="click"
        arrow="always"
        indicator-position="none"
        class="hidden-sm-and-up"
      >
        <el-carousel-item v-for="theme in otherTheme" :key="theme.id">
          <base-content-container>
            <el-row :gutter="12">
              <el-col :sm="6" :lg="6">
                <latest-offers-card
                  :name="theme.category"
                  :description="theme.itemName"
                  :price="theme.originalPrice"
                  :rate="theme.rating"
                  :number-of-rate="theme.reviewsCount"
                  :discount="theme.discountedPrice"
                  :image="theme.thumbnail"
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
        height="420px"
        class="hide"
      >
        <el-carousel-item>
          <!-- <base-container> -->
          <base-content-container>
            <el-row :gutter="12">
              <el-col :span="6" v-for="theme in otherTheme" :key="theme.id">
                <latest-offers-card
                  :name="theme.category"
                  :description="theme.itemName"
                  :price="theme.originalPrice"
                  :rate="theme.rating"
                  :number-of-rate="theme.reviewsCount"
                  :discount="theme.discountedPrice"
                  :image="theme.thumbnail"
                ></latest-offers-card>
              </el-col>
            </el-row>
          </base-content-container>
          <!-- </base-container> -->
        </el-carousel-item>
      </el-carousel>
      <div class="new-shelf-btn">
        <el-button class="btn">{{ $t("show_more_button") }}</el-button>
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
          image: require("../../assets/Rectangle-77.png"),
        },
        {
          id: 2,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/Rectangle-77-1.png"),
        },
        {
          id: 3,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/Rectangle-77-3.png"),
        },
        {
          id: 4,
          name: "身體檢查",
          price: "HK$ 570",
          discountPrice: "HK$ 800",
          description: "綜合個人健康體檢套餐",
          rate: 4,
          numberOfRate: "(138,370)",
          image: require("../../assets/Rectangle-77-2.png"),
        },
      ],
    };
  },
  computed: {
    themes() {
      return this.$store.getters["dashboard/themes"];
    },
    getSlug() {
      return this.themes.filter((item) => item.slug === "theme-other");
    },
    otherTheme() {
      return this.$store.getters["dashboard/otherTheme"];
    },
  },
  mounted() {
    console.log(this.getSlug);
    this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
  },
};
</script>

<style>
.new-shelf {
  background-color: #e5e5e5;
  padding: 2rem 0;
  /* min-width: 320px; */
}

/* .yahoo {
  margin-top: 3rem;
} */

.new-shelf .title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 2rem;
  text-align: center;
}

.new-shelf .new-shelf-btn {
  text-align: center;
}

.new-shelf .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #4b4b4b;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 70vh !important;
}

/* @media screen and (min-width: 591px) and (max-width: 767px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 750px !important;
  }
}

@media screen and (min-width: 541px) and (max-width: 590px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 650px !important;
  }
}

@media screen and (min-width: 486px) and (max-width: 540px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 620px !important;
  }
}

@media screen and (min-width: 441px) and (max-width: 485px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 530px !important;
  }
}

@media screen and (min-width: 361px) and (max-width: 440px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 500px !important;
  }
}

@media screen and (max-width: 360px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 450px !important;
  }
} */

/* @media screen and (max-width: 320px) {
  .new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 450px !important;
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