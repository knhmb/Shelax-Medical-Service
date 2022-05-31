<template>
  <div class="latest-offers">
    <section class="latest-offers-content">
      <base-content-container>
        <template v-for="theme in themes" :key="theme.id">
          <h2
            v-if="theme.slug === 'theme-prevent-cervical-cancer'"
            class="title"
          >
            {{ theme.name }}
          </h2>
        </template>
      </base-content-container>

      <el-carousel
        trigger="click"
        arrow="always"
        indicator-position="none"
        class="hidden-sm-and-up"
      >
        <el-carousel-item
          v-for="product in cervicalCancerTheme"
          :key="product.id"
        >
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
              <el-col
                :span="6"
                v-for="theme in cervicalCancerTheme"
                :key="theme.id"
              >
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
            <!-- {{ getSlug }} -->
          </base-content-container>
          <!-- </base-container> -->
        </el-carousel-item>
      </el-carousel>
      <div class="latest-offers-btn">
        <template v-for="theme in themes" :key="theme.id">
          <el-button
            v-if="theme.slug === 'theme-prevent-cervical-cancer'"
            @click="submit(theme.slug)"
            class="btn"
            >{{ $t("show_more_button") }}</el-button
          >
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import LatestOffersCard from "./LatestOffersCard.vue";

export default {
  components: {
    LatestOffersCard,
  },
  data() {
    return {
      // products: [
      //   {
      //     id: 1,
      //     name: "身體檢查",
      //     price: "HK$ 570",
      //     discountPrice: "HK$ 800",
      //     description: "綜合個人健康體檢套餐",
      //     rate: 4,
      //     numberOfRate: "(138,370)",
      //     image: require("../assets/Rectangle-77.png"),
      //   },
      //   {
      //     id: 2,
      //     name: "身體檢查",
      //     price: "HK$ 570",
      //     discountPrice: "HK$ 800",
      //     description: "綜合個人健康體檢套餐",
      //     rate: 4,
      //     numberOfRate: "(138,370)",
      //     image: require("../assets/Rectangle-77-1.png"),
      //   },
      //   {
      //     id: 3,
      //     name: "身體檢查",
      //     price: "HK$ 570",
      //     discountPrice: "HK$ 800",
      //     description: "綜合個人健康體檢套餐",
      //     rate: 4,
      //     numberOfRate: "(138,370)",
      //     image: require("../assets/Rectangle-77-3.png"),
      //   },
      //   {
      //     id: 4,
      //     name: "身體檢查",
      //     price: "HK$ 570",
      //     discountPrice: "HK$ 800",
      //     description: "綜合個人健康體檢套餐",
      //     rate: 4,
      //     numberOfRate: "(138,370)",
      //     image: require("../assets/Rectangle-77-2.png"),
      //   },
      // ],
    };
  },
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
    },
  },
  computed: {
    themes() {
      return this.$store.getters["dashboard/themes"];
    },
    getSlug() {
      return this.themes.filter(
        (item) => item.slug === "theme-prevent-cervical-cancer"
      );
    },
    cervicalCancerTheme() {
      return this.$store.getters["dashboard/cervicalCancerTheme"];
    },
    lang() {
      return this.$store.getters.lang;
    },
  },
  methods: {
    submit(theme) {
      console.log(theme);
      this.$store
        .dispatch("search/getTheme", theme)
        .then(() => {
          this.$router.push({ name: "search", query: { q: theme } });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
  },
  created() {
    console.log(this.getSlug);
    this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
  },
};
</script>

<style>
.latest-offers {
  background-color: #e6eaf0;
  padding: 2rem 0;
  /* min-width: 320px; */
}

/* .yahoo {
  margin-top: 3rem;
} */

.latest-offers .title {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  margin-bottom: 2rem;
}

.latest-offers .latest-offers-btn {
  text-align: center;
}

.latest-offers .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #7690da;
  margin-top: 0.5rem;
  background: #7690da;
  color: #fff;
}

.latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 70vh !important;
}

/* @media screen and (min-width: 591px) and (max-width: 767px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 750px !important;
  }
}

@media screen and (min-width: 541px) and (max-width: 590px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 650px !important;
  }
}

@media screen and (min-width: 486px) and (max-width: 540px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 620px !important;
  }
}

@media screen and (min-width: 441px) and (max-width: 485px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 530px !important;
  }
}

@media screen and (min-width: 361px) and (max-width: 440px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 500px !important;
  }
}

@media screen and (max-width: 360px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
    height: 450px !important;
  }
} */

/* @media screen and (max-width: 320px) {
  .latest-offers .el-carousel.el-carousel--horizontal .el-carousel__container {
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