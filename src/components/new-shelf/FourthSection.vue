<template>
  <div class="new-shelf">
    <section class="new-shelf-content">
      <base-content-container>
        <template v-for="theme in themes" :key="theme.id">
          <h2 v-if="theme.slug === 'theme-other'" class="title">
            {{ theme.name }}
          </h2>
        </template>
        <!-- <h2 class="title">全新上架</h2> -->
      </base-content-container>

      <!-- <el-carousel
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
      </el-carousel> -->

      <!-- <el-carousel
        :interval="5000"
        trigger="click"
        arrow="always"
        indicator-position="none"
        height="420px"
        class="hide"
      >
        <el-carousel-item>
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
        </el-carousel-item>
      </el-carousel> -->
      <base-content-container>
        <Carousel :breakpoints="breakpoints">
          <Slide v-for="theme in otherTheme" :key="theme.id">
            <!-- <div class="carousel__item">{{ slide }}</div> -->
            <latest-offers-card
              :name="theme.category"
              :description="theme.itemName"
              :price="theme.originalPrice"
              :rate="theme.rating"
              :number-of-rate="theme.reviewsCount"
              :discount="theme.discountedPrice"
              :image="theme.thumbnail"
            ></latest-offers-card>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </base-content-container>
      <div class="new-shelf-btn">
        <template v-for="theme in themes" :key="theme.id">
          <el-button
            v-if="theme.slug === 'theme-other'"
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
import LatestOffersCard from "../LatestOffersCard.vue";
import { ElNotification } from "element-plus";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    LatestOffersCard,
    Carousel,
    Navigation,
    Slide,
  },
  data() {
    return {
      breakpoints: {
        // 300px and up
        300: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
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
      return this.themes.filter((item) => item.slug === "theme-other");
    },
    otherTheme() {
      return this.$store.getters["dashboard/otherTheme"];
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
  mounted() {
    console.log(this.getSlug);
    this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
  },
};
</script>

<style>
.new-shelf {
  background-color: #e6eaf0;
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
  margin-top: 1rem;
}

.new-shelf .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #7690da;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  background: #7690da;
  color: #fff;
}

.new-shelf .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 70vh !important;
}

.new-shelf .new-shelf-content .carousel .carousel__slide {
  margin-right: 0.7rem;
}

.new-shelf .new-shelf-content .carousel .carousel__next,
.new-shelf .new-shelf-content .carousel .carousel__prev {
  background: #fff;
  color: black;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.new-shelf .new-shelf-content .carousel .carousel__prev {
  left: -2rem;
}

.new-shelf .new-shelf-content .carousel .carousel__next {
  right: -2rem;
}

@media screen and (max-width: 767px) {
  .hide {
    display: none;
  }

  .new-shelf .new-shelf-content .carousel .carousel__prev {
    left: 0rem;
  }

  .new-shelf .new-shelf-content .carousel .carousel__next {
    right: 0rem;
  }
}

/* @media only screen and (max-width: 1139px) {
  .rakuten .btn {
    margin-top: 1.5rem;
  }
} */
</style>