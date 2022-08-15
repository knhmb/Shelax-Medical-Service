<template>
  <div class="theme-8">
    <section class="theme-8-content">
      <base-content-container>
        <template v-for="theme in themes" :key="theme.id">
          <h2 v-if="theme.slug === 'theme-theme-8'" class="title">
            {{ theme.name }}
          </h2>
        </template>
      </base-content-container>

      <base-content-container>
        <Carousel v-if="themeTheme8.length > 0" :breakpoints="breakpoints">
          <Slide v-for="theme in themeTheme8" :key="theme.id">
            {{ theme }}
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
      <div class="theme-8-btn">
        <template v-for="theme in themes" :key="theme.id">
          <el-button
            v-if="theme.slug === 'theme-theme-8'"
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
  // watch: {
  //   lang() {
  //     this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
  //   },
  // },
  computed: {
    themes() {
      return this.$store.getters["dashboard/themes"];
    },
    themeTheme8() {
      return this.$store.getters["dashboard/themeTheme8"];
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
  },
};
</script>

<style>
.theme-8 {
  background-color: #e6eaf0;
  padding: 2rem 0;
  /* min-width: 320px; */
}

/* .yahoo {
  margin-top: 3rem;
} */

.theme-8 .title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 2rem;
  text-align: center;
}

.theme-8 .theme-8-btn {
  text-align: center;
  margin-top: 1rem;
}

.theme-8 .btn {
  /* margin-top: 0.5rem; */
  padding: 8px 120px;
  border-radius: 8px;
  border: 1px solid #7690da;
  margin-top: 0.5rem;
  background: #7690da;
  color: #fff;
}

.theme-8 .el-carousel.el-carousel--horizontal .el-carousel__container {
  height: 60vh !important;
}

.theme-8 .theme-8-content .carousel .carousel__slide {
  margin-right: 0.7rem;
}

.theme-8 .theme-8-content .carousel .carousel__next,
.theme-8 .theme-8-content .carousel .carousel__prev {
  background: #fff;
  color: black;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.theme-8 .theme-8-content .carousel .carousel__prev {
  left: -2rem;
}

.theme-8 .theme-8-content .carousel .carousel__next {
  right: -2rem;
}

@media screen and (max-width: 767px) {
  .hide {
    display: none;
  }
  .theme-8 .theme-8-content .carousel .carousel__prev {
    left: 0rem;
  }

  .theme-8 .theme-8-content .carousel .carousel__next {
    right: 0rem;
  }
}

/* @media only screen and (max-width: 1139px) {
  .rakuten .btn {
    margin-top: 1.5rem;
  }
} */
</style>