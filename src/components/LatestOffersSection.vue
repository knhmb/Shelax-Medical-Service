<template>
  <div class="latest-offers">
    <section class="latest-offers-content">
      <base-content-container>
        <template v-for="theme in themes" :key="theme.id">
          <h2 class="title">
            {{ theme.slug }}
          </h2>
          <Carousel
            v-if="cervicalCancerTheme.length > 0"
            :breakpoints="breakpoints"
          >
            <template v-for="item in allThemes" :key="item.id">
              <Slide v-for="data in item.data" :key="data.id">
                <latest-offers-card
                  v-if="theme.slug === item.slug"
                  :name="data.category"
                  :description="data.itemName"
                  :price="data.originalPrice"
                  :rate="data.rating"
                  :number-of-rate="data.reviewsCount"
                  :discount="data.discountedPrice"
                  :image="data.thumbnail"
                ></latest-offers-card>
              </Slide>
            </template>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <div class="latest-offers-btn">
            <el-button
              v-if="theme.slug === 'theme-prevent-cervical-cancer'"
              @click="submit(theme.slug)"
              class="btn"
              >{{ $t("show_more_button") }}</el-button
            >
          </div>
          <!-- <h2
            v-if="theme.slug === 'theme-prevent-cervical-cancer'"
            class="title"
          >
            {{ theme.name }}
          </h2> -->
        </template>
      </base-content-container>

      <base-content-container>
        <!-- <Carousel
          v-if="cervicalCancerTheme.length > 0"
          :breakpoints="breakpoints"
        >
          <Slide v-for="theme in cervicalCancerTheme" :key="theme.id">
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
        </Carousel> -->
      </base-content-container>
      <!-- <div class="latest-offers-btn">
        <template v-for="theme in themes" :key="theme.id">
          <el-button
            v-if="theme.slug === 'theme-prevent-cervical-cancer'"
            @click="submit(theme.slug)"
            class="btn"
            >{{ $t("show_more_button") }}</el-button
          >
        </template>
      </div> -->
    </section>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import LatestOffersCard from "./LatestOffersCard.vue";
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
          snapAlign: "start",
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
    allThemes() {
      return this.$store.getters["dashboard/allThemes"];
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
    // this.$store.dispatch("dashboard/getThemes").then(() => {
    //   this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
    // });

    console.log(this.themes);
    console.log(this.cervicalCancerTheme);
    // if (this.getSlug.length <= 0) {
    //   console.log("empty Array");
    // } else {
    //   this.$store.dispatch("dashboard/getSingleTheme", this.getSlug);
    // }
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
  margin-top: 1rem;
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

.latest-offers .latest-offers-content .carousel .carousel__slide {
  margin-right: 0.7rem;
}

.latest-offers .latest-offers-content .carousel .carousel__next,
.latest-offers .latest-offers-content .carousel .carousel__prev {
  background: #fff;
  color: black;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .latest-offers-content .carousel .carousel__prev {
  left: -2rem;
}

.latest-offers .latest-offers-content .carousel .carousel__next {
  right: -2rem;
}

@media screen and (max-width: 767px) {
  .hide {
    display: none;
  }
  .latest-offers .latest-offers-content .carousel .carousel__prev {
    left: 0rem;
  }

  .latest-offers .latest-offers-content .carousel .carousel__next {
    right: 0rem;
  }
}

/* @media only screen and (max-width: 1139px) {
  .rakuten .btn {
    margin-top: 1.5rem;
  }
} */
</style>