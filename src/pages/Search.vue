<template>
  <!-- <the-header></the-header> -->
  <Product
    @changedSort="setOption"
    :is-active="isActive"
    v-if="searchItems.length > 0 && searchItems[0].searchItemType === 'product'"
  />
  <!-- <section
    v-if="searchItems.length > 0 && searchItems[0].searchItemType === 'service'"
    class="search-section"
  > -->
  <section class="search-section" v-if="isService">
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
                type="date"
                class="appointment-date"
                v-model="date"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <p class="input-label">{{ $t("search_time") }}</p>

              <el-input
                type="time"
                class="appointment-time"
                v-model="time"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <button @click.prevent="searchItem">
              <img
                src="../assets/icon-search@2x.png"
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

  <!-- <section
    class="content"
    v-if="searchItems.length > 0 && searchItems[0].searchItemType === 'service'"
  > -->
  <section class="content" v-if="isService">
    <base-content-container>
      <h2>{{ $t("body_checkup") }}</h2>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="6">
          <!-- <div class="google-maps">
            <img
              src="../assets/img-google-map@2x.png"
              class="google-maps-img"
              alt=""
            />
            <div class="inner-img-text">
              <img src="../assets/icon-location@2x-1.png" alt="" />
              <p>查看地圖</p>
            </div>
          </div> -->
          <div class="slider">
            <h3>{{ $t("filter_by_price") }}</h3>
            <el-slider
              v-model="value"
              show-tooltip
              :step="10"
              range
              :min="1"
              :max="10000"
              @change="triggerSearch"
            >
            </el-slider>
            <div class="range">
              <el-row>
                <el-col :span="10">
                  <el-input readonly v-model="value[0]"></el-input>
                </el-col>
                <el-col :span="4">
                  <span></span>
                </el-col>
                <el-col :span="10">
                  <el-input readonly v-model="value[1]"></el-input>
                </el-col>
              </el-row>
            </div>
          </div>
          <!-- <div class="customer-review">
            <h3>顧客評價</h3>
            <el-checkbox size="large">
              <el-rate
                class="five-stars"
                v-model="fiveStarRating"
                disabled
                text-color="#ff9900"
              >
              </el-rate>
            </el-checkbox>
            <el-checkbox size="large">
              <el-rate
                class="four-stars"
                v-model="fourStarRating"
                disabled
                text-color="#ff9900"
              >
              </el-rate>
            </el-checkbox>
            <el-checkbox size="large">
              <el-rate
                class="three-stars"
                v-model="threeStarRating"
                disabled
                text-color="#ff9900"
              >
              </el-rate>
            </el-checkbox>
            <el-checkbox size="large">
              <el-rate
                class="two-stars"
                v-model="twoStarRating"
                disabled
                text-color="#ff9900"
              >
              </el-rate>
            </el-checkbox>
          </div> -->
          <div class="area">
            <h3>{{ $t("filter_by_location") }}</h3>
            <div v-for="region in regions" :key="region" class="single-area">
              <p>{{ region.name }}</p>
              <el-checkbox-group @change="triggerSearch" v-model="checkList">
                <template v-for="district in districts" :key="district">
                  <el-checkbox
                    v-if="district.parentCodexSlug === region.slug"
                    :label="district.slug"
                    >{{ district.name }}</el-checkbox
                  >
                </template>
                <!-- <el-checkbox
                  v-for="district in districts"
                  :key="district"
                  :label="district.name"
                />
                <el-checkbox label="東區" />
                <el-checkbox label="南區" />
                <el-checkbox label="灣仔區" /> -->
              </el-checkbox-group>
            </div>
            <!-- <div class="single-area">
              <p>九龍區</p>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="九龍城區" />
                <el-checkbox label="觀塘區" />
                <el-checkbox label="深水埗區" />
                <el-checkbox label="黃大仙區" />
                <el-checkbox label="油尖旺區" />
              </el-checkbox-group>
            </div>
            <div class="single-area">
              <p>新界區</p>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="離島區" />
                <el-checkbox label="葵青區" />
                <el-checkbox label="北區" />
                <el-checkbox label="西貢區" />
                <el-checkbox label="沙田區" />
                <el-checkbox label="大埔區" />
                <el-checkbox label="荃灣區" />
                <el-checkbox label="屯門區" />
                <el-checkbox label="元朗區" />
              </el-checkbox-group>
            </div> -->
          </div>
        </el-col>
        <el-col :sm="24" :lg="18">
          <search-right-section
            :date="date"
            :time="time"
            @changedSort="setOption"
            :is-active="isActive"
          ></search-right-section>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
// import TheHeader from "../components/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import SearchRightSection from "../components/search/SearchRightSection.vue";
import { ElNotification } from "element-plus";
import Product from "../components/product-search/Product.vue";

export default {
  components: {
    // TheHeader,
    // TheFooter,
    SearchRightSection,
    Product,
  },
  data() {
    return {
      isActive: "",
      service: "",
      date: null,
      time: null,
      value: [1, 10000],
      fiveStarRating: 5,
      fourStarRating: 4,
      threeStarRating: 3,
      twoStarRating: 2,
      checkList: [],
    };
  },
  watch: {
    lang() {
      this.$store.dispatch("search/getRegions");
      this.$store.dispatch("search/getDistricts");
    },
  },
  computed: {
    regions() {
      return this.$store.getters["search/regions"];
    },
    districts() {
      return this.$store.getters["search/districts"];
    },
    searchItems() {
      return this.$store.getters["search/searchItems"];
    },
    lang() {
      return this.$store.getters.lang;
    },
    isService() {
      if (this.searchItems.length > 0) {
        return this.searchItems[0].searchItemType === "service";
      }
      return true;
    },
  },
  methods: {
    triggerSearch() {
      const data = {
        price: this.value ? this.value : "",
        location:
          this.checkList.length > 0
            ? this.checkList.toString().replaceAll(",", "|")
            : "",
        query: this.$route.query.q ? this.$route.query.q : "",
        sort: this.isActive ? this.isActive : "",
      };
      console.log(data);
      this.$store
        .dispatch("search/searchSpecificItem", data)
        .then(() => {})
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
    setOption(option) {
      this.isActive = option;
      this.triggerSearch();
    },
    searchItem() {
      const data = {
        search: this.service,
        bookingDate: this.date ? this.date.replaceAll("-", "") : "",
        bookingTime: this.time ? this.time.replace(":", "") : "",
      };
      console.log(data);
      this.$store.commit("SET_SEARCH_VALUES", {
        date: this.date,
        time: this.time,
      });
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
  created() {
    this.$store.dispatch("search/getRegions");
    this.$store.dispatch("search/getDistricts");
  },
};
</script>

<style>
.search-section {
  background-color: #7690da;
  /* min-width: 387px; */
}

.search-section .el-form {
  padding-top: 1rem;
}

.search-section .el-form .el-form-item {
  margin-bottom: 0.5rem;
}

.search-section .el-input {
  position: relative;
  /* padding: 16px 26px 16px 24px; */
}

.search-section .el-form-item__content p.input-label {
  position: absolute;
  top: -0.4rem;
  left: 1rem;
  color: #333;
  z-index: 1;
}

/* .search-section .el-form-item__content > .service::before {
  content: "搜尋服務或產品";
}

.search-section .el-form-item__content > .appointment-date::before {
  content: "選擇日期";
}

.search-section .el-form-item__content > .appointment-time::before {
  content: "選擇時間";
} */

.search-section .el-form-item__content > .el-input::before {
  /* content: "選擇服務"; */
  position: absolute;
  top: 0;
  left: 1rem;
  color: #8d8d8d;
  /* padding-left: 24px; */
}

.search-section .el-input__inner {
  padding: 40px 26px 16px 16px;
  border-radius: 8px;
  font-size: 16px;
}

.search-section .el-form-item__label {
  padding: 0;
  color: #fff;
}

.search-section button {
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

.search-section .icon-search {
  width: 18px;
  margin-right: 0.2rem;
}

.content {
  margin-top: 2rem;
}

.content h2 {
  margin-bottom: 1.5rem;
}

.content .google-maps {
  position: relative;
  /* width: 280px; */
}

.content .google-maps-img {
  border-radius: 8px;
  width: 100%;
}

.content .inner-img-text {
  position: absolute;
  width: 120px;
  height: 35px;
  padding: 12px 24px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content .inner-img-text img {
  width: 20px;
  margin-right: 0.3rem;
}

.content .inner-img-text p {
  font-size: 16px;
  margin: 0;
}

.content .range .el-row {
  align-items: center;
}

.content .range .el-input {
  position: relative;
}

.content .range .el-input::before {
  content: "HKD";
  position: absolute;
  left: 10px;
  font-size: 12px;
  color: #8d8d8d;
}

.content .range .el-input .el-input__inner {
  text-align: end;
}

.content .range {
  position: relative;
}

.content .range span::after {
  content: "";
  position: absolute;
  border: 1px dashed #c6c6c6;
  width: 120px;
}

.content .slider {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.content .customer-review .el-checkbox {
  display: flex;
  align-items: center;
}

.content .customer-review {
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 1rem;
}

.content .area {
  /* border-bottom: 2px solid #e0e0e0; */
  /* padding-bottom: 0.5rem; */
  /* margin-bottom: 1rem; */
}

.content .area h3 {
  margin-bottom: 1rem;
}

.content .area .single-area {
  margin-bottom: 1rem;
}

.content .area .single-area p {
  color: #8d8d8d;
  margin-bottom: 0;
}

.content .area .single-area .el-checkbox-group {
  display: flex;
  flex-direction: column;
}

.content .customer-review .el-checkbox.is-checked .el-checkbox__inner,
.content
  .area
  .single-area
  .el-checkbox-group
  .el-checkbox.is-checked
  .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.content .customer-review .el-checkbox.is-checked .el-checkbox__label,
.content
  .area
  .single-area
  .el-checkbox-group
  .el-checkbox.is-checked
  .el-checkbox__label {
  color: #7690da;
}

/* .content .google-maps::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 35px;
  padding: 12px 24px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
} */

@media screen and (max-width: 991px) {
  .search-section .el-input__inner {
    padding: 2.2rem 1rem;
  }

  .search-section .el-input.service .el-input__inner {
    padding: 3.4rem 1rem 1rem 1rem;
  }
}
</style>