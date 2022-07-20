<template>
  <div class="all-content">
    <base-content-container>
      <section class="medication">
        <el-carousel
          trigger="click"
          height="150px"
          arrow="always"
          class="hidden-sm-and-up"
        >
          <el-carousel-item v-for="product in productItems" :key="product.id">
            <div class="slider">
              <el-row justify="space-around">
                <el-col
                  @click="searchProduct(product.slug)"
                  :sm="12"
                  :md="5"
                  :lg="5"
                >
                  <img :src="product.thumbnail" class="product-img" alt="" />
                  <p>{{ product.name }}</p>
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>

        <el-carousel
          class="hidden-xs-only"
          trigger="click"
          height="150px"
          arrow="always"
        >
          <el-carousel-item>
            <div class="slider">
              <el-row>
                <el-col
                  @click="searchProduct(product.slug)"
                  v-for="product in productItems"
                  :key="product.id"
                  :sm="4"
                  :md="4"
                  :lg="4"
                >
                  <img :src="product.thumbnail" class="product-img" alt="" />
                  <p>{{ product.name }}</p>
                </el-col>
                <!-- <el-col :sm="24" :md="5" :lg="5">
                  <img
                    src="../assets/icon-product-b@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>健康營養</p>
                </el-col>
                <el-col :sm="24" :md="5" :lg="5">
                  <img
                    src="../assets/icon-product-c@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>復康保健</p>
                </el-col>
                <el-col :sm="24" :md="5" :lg="5">
                  <img
                    src="../assets/icon-product-d@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>舒緩痛症</p>
                </el-col>
                <el-col :sm="24" :md="4" :lg="4">
                  <img
                    src="../assets/icon-product-e@2x.png"
                    class="product-img"
                    alt=""
                  />
                  <p>醫療器械</p>
                </el-col> -->
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </section>
    </base-content-container>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  watch: {
    lang() {
      this.$store.dispatch("dashboard/getProductItems");
    },
  },
  computed: {
    productItems() {
      return this.$store.getters["dashboard/productItems"];
    },
    lang() {
      return this.$store.getters.lang;
    },
  },
  methods: {
    searchProduct(slug) {
      this.$store
        .dispatch("search/searchProduct", slug)
        .then(() => {
          this.$router.push({
            path: "search",
            query: { q: `filter=productcat:${slug}` },
          });
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
    this.$store.dispatch("dashboard/getProductItems");
  },
};
</script>

<style>
.all-content {
  background-color: #e6eaf0;
  /* min-width: 100vh; */
  padding: 2rem 0;
  /* min-width: 320px; */
}
.all-content .medication {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  border-radius: 16px;
  min-width: 220px;
  /* text-align: center; */
  /* margin-top: 1rem; */
}

.all-content .product-img {
  width: 78px;
}

/* .all-content .product-img + p {
  margin: 2rem 0;
} */

.all-content .slider .el-row {
  justify-content: center;
}

.all-content .slider .el-col {
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.all-content .slider {
  /* text-align: center; */
  /* display: flex;
  justify-content: ; */
  /* padding: 1rem 0 1rem 4rem; */
}

.all-content
  .medication
  .el-carousel.el-carousel--horizontal
  .el-carousel__container {
  height: 25vh !important;
}

@media screen and (max-width: 1024px) {
  .all-content .slider {
    padding: 1rem 4rem 1rem 4rem;
  }

  /* .all-content .product-img {
    width: 58px;
  } */
}

@media screen and (max-width: 600px) {
  .all-content .medication {
    text-align: center;
  }

  .all-content .slider {
    padding: 0;
  }
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