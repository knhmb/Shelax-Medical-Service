<template>
  <section class="product-search-category">
    <base-content-container>
      <el-form label-position="top">
        <el-row :gutter="10">
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <p class="input-label">{{ $t("search_service_or_product") }}</p>
              <el-input
                :placeholder="$t('body_checkup')"
                class="service"
                v-model="service"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <p class="input-label">{{ $t("search_date") }}</p>
              <el-input
                disabled
                class="appointment-date"
                v-model="date"
                :placeholder="$t('no_dates')"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <p class="input-label">{{ $t("search_time") }}</p>
              <el-input
                disabled
                class="appointment-time"
                v-model="time"
                :placeholder="$t('no_dates')"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <button @click.prevent="searchItem">
              <img
                src="../../assets/icon-search@2x.png"
                class="icon-search"
                alt=""
              />
              {{ $t("search_button") }}
            </button>
          </el-col>
        </el-row>
      </el-form>
    </base-content-container>
  </section>

  <section class="product-search-content">
    <base-content-container>
      <h4>Facial Mask</h4>
      <div class="options">
        <el-row>
          <el-col
            @click="setOption('recommendation')"
            :class="{ 'is-selected': isActive === 'recommendation' }"
            :sm="12"
            :md="6"
          >
            <p>{{ $t("recommended") }}</p>
          </el-col>
          <el-col
            @click="setOption('+price')"
            :class="{ 'is-selected': isActive === '+price' }"
            :sm="12"
            :md="6"
          >
            <p>{{ $t("price_low_to_high") }}</p>
          </el-col>
          <el-col
            @click="setOption('-price')"
            :class="{ 'is-selected': isActive === '-price' }"
            :sm="12"
            :md="6"
          >
            <p>{{ $t("price_high_to_low") }}</p>
          </el-col>
          <el-col
            @click="setOption('-rating')"
            :class="{ 'is-selected': isActive === '-rating' }"
            :sm="12"
            :md="6"
          >
            <p>{{ $t("highest_rating") }}</p>
          </el-col>
        </el-row>
      </div>

      <el-row :gutter="10">
        <el-col v-for="item in searchItems" :key="item.id" :sm="12" :md="5">
          <div class="product-card" @click="searchProduct(item.itemId)">
            <img :src="item.thumbnail" alt="" />
            <div class="product-card-content">
              <h5>{{ item.itemName }}</h5>
              <p class="address">{{ item.providerName }}</p>
              <el-rate
                :colors="colors"
                :model-value="item.rating"
                disabled
                show-score
                text-color="#8d8d8d"
                :score-template="`(${item.reviewsCount})`"
                disabled-void-color="#c6c6c6"
              />
              <p class="price">HKD {{ item.discountedPrice }}</p>
              <el-button @click.stop="searchProduct(item.itemId)">{{
                $t("add_to_cart")
              }}</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import moment from "moment";

export default {
  props: ["isActive"],
  data() {
    return {
      service: "",
      date: null,
      time: null,
      colors: ["#7690DA", "#7690DA", "#7690DA"],
    };
  },
  computed: {
    searchItems() {
      return this.$store.getters["search/searchItems"];
    },
  },
  methods: {
    setOption(option) {
      this.$emit("changedSort", option);
    },
    // addToShoppingCart(item) {
    //   const data = {
    //     itemId: item.itemId,
    //     quantity: 1,
    //   };
    //   console.log(data);
    //   this.$store.dispatch('auth/checkAccessToken').then(() => {
    //     this.$store.dispatch("shoppingCart/addToShoppingCart", data).then(() => {
    //     ElNotification({
    //       title: "Success",
    //       message: this.$t("added_to_shopping_cart"),
    //       type: "success",
    //     });
    //   });
    //   })
    // },
    searchProduct(itemId) {
      console.log(itemId);
      const data = {
        itemId: itemId,
        bookingDate: moment(new Date()).format("YYYYMMDD"),
        bookingTime: "-",
      };
      console.log(data);
      this.$store.dispatch("search/getItemDetail", data).then(() => {
        this.$router.push("/service");
      });
      // this.$store
      //   .dispatch("auth/checkAccessToken")
      //   .then(() => {
      //     this.$store.dispatch("search/getItemDetail", data).then(() => {
      //       this.$router.push("/service");
      //     });
      //   })
      //   .catch(() => {
      //     this.$store
      //       .dispatch("auth/checkRefreshToken")
      //       .then(() => {
      //         this.$store.dispatch("search/getItemDetail", data).then(() => {
      //           this.$router.push("/service");
      //         });
      //       })
      //       .catch((err) => {
      //         ElNotification({
      //           title: "Error",
      //           message: this.$t(err.response.data.message),
      //           type: "error",
      //         });
      //         this.$store.dispatch("auth/logout");
      //       });
      //   });
    },
    searchItem() {
      const data = {
        search: this.service,
        bookingDate: this.date ? this.date.replaceAll("-", "") : "",
        bookingTime: this.time ? this.time.replace(":", "") : "",
      };
      console.log(data);
      this.$router.push({
        query: {
          q: `${data.search ? `search=${data.search}&` : ""}${
            data.bookingDate && data.bookingTime
              ? `filter=bookingdate:${data.bookingDate},bookingtime:${data.bookingTime}`
              : data.bookingDate
              ? `filter=bookingdate:${data.bookingDate}`
              : data.bookingTime
              ? `filter=bookingtime:${data.bookingTime}`
              : ""
          }`,
        },
      });
      this.$store
        .dispatch("search/searchItems", data)
        .then(() => {})
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
  },
};
</script>

<style>
.product-search-category {
  background-color: #7690da;
  /* min-width: 387px; */
}

.product-search-category .el-form {
  padding-top: 1rem;
}

.product-search-category .el-form .el-form-item {
  margin-bottom: 0.5rem;
}

.product-search-category .el-input {
  position: relative;
  /* padding: 16px 26px 16px 24px; */
}

.product-search-category .el-form-item__content p.input-label {
  position: absolute;
  top: -0.4rem;
  left: 1rem;
  color: #333;
  z-index: 1;
}

/* .product-search-category .el-form-item__content > .service::before {
  content: "搜尋服務或產品";
} */

/* .product-search-category .el-form-item__content > .appointment-date::before {
  content: "預約日期";
} */

/* .product-search-category .el-form-item__content > .appointment-time::before {
  content: "預約時間";
} */

.product-search-category .el-form-item__content > .el-input::before {
  /* content: "選擇服務"; */
  position: absolute;
  top: 0;
  left: 1rem;
  color: #8d8d8d;
  /* padding-left: 24px; */
}

.product-search-category .el-input__inner {
  padding: 40px 26px 16px 16px;
  border-radius: 8px;
  font-size: 16px;
}

.product-search-category .el-form-item__label {
  padding: 0;
  color: #fff;
}

.product-search-category button {
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  background-color: #4e68b2;
  border: 1px solid #4e68b2;
  color: white;
  /* margin-bottom: 22px; */
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.product-search-category .icon-search {
  width: 18px;
  margin-right: 0.2rem;
}

.product-search-content h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #525252;
  margin: 2rem 0;
}

.product-search-content .options {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.product-search-content .options .el-col {
  text-align: center;
  cursor: pointer;
  padding: 8px 24px;
  position: relative;
}

.product-search-content .options .el-col p {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.product-search-content .options .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  width: 1px;
  height: 30px;
  background: #e0e0e0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.product-search-content .options .el-col:hover:not(:last-of-type):after {
  background: #7690da;
}

.product-search-content .options .el-col:hover {
  background: #7690da;
  transition: all 0.2s ease;
}

.product-search-content .options .el-col:hover p {
  color: #fff;
}

.product-search-content .options .el-col.is-selected {
  background: #7690da;
}

.product-search-content .options .el-col.is-selected p {
  color: #fff;
}

.product-search-content .options .el-col.is-selected:after {
  background: #7690da;
}

.product-search-content .product-card {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;
}

.product-search-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-search-content .product-card .product-card-content {
  padding: 0 0.5rem 0.5rem 0.5rem;
}

.product-search-content .product-card .product-card-content h5 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #262626;
}

.product-search-content .product-card .product-card-content p.address {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
  margin: 0.5rem 0;
}

.product-search-content
  .product-card
  .product-card-content
  .el-rate
  .el-rate__item
  .el-rate__icon {
  margin-right: 0;
}

.product-search-content
  .product-card
  .product-card-content
  .el-rate
  .el-rate__text {
  margin-left: 0.1rem;
}

.product-search-content .product-card .product-card-content .el-button {
  background: #7690da;
  border-color: #7690da;
  border-radius: 4px;
  padding: 4px 24px;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
  width: 100%;
  margin-top: 0.5rem;
}

.product-search-content .product-card .product-card-content p.price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #4e68b2;
  margin-top: 0.5rem;
}
</style>