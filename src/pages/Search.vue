<template>
  <the-header></the-header>
  <section class="search-section">
    <base-content-container>
      <el-form label-position="top">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item>
              <el-input
                placeholder="身體檢查"
                class="service"
                v-model.trim="service"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-input
                type="date"
                class="appointment-date"
                v-model="date"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-input
                type="time"
                class="appointment-time"
                v-model="time"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <button>
              <img
                src="../assets/icon-search@2x.png"
                class="icon-search"
                alt=""
              />
              搜尋
            </button>
          </el-col>
        </el-row>
      </el-form>
    </base-content-container>
  </section>

  <section class="content">
    <base-content-container>
      <h2>身體檢查</h2>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="google-maps">
            <img
              src="../assets/img-google-map@2x.png"
              class="google-maps-img"
              alt=""
            />
            <div class="inner-img-text">
              <img src="../assets/icon-location@2x-1.png" alt="" />
              <p>查看地圖</p>
            </div>
          </div>
          <div class="slider">
            <h3>價錢</h3>
            <el-slider v-model="value" range show-stops :max="10"> </el-slider>
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
          <div class="customer-review">
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
          </div>
          <div class="area">
            <h3>區域</h3>
            <div class="single-area">
              <p>香港區</p>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="中西區" />
                <el-checkbox label="東區" />
                <el-checkbox label="南區" />
                <el-checkbox label="灣仔區" />
              </el-checkbox-group>
            </div>
            <div class="single-area">
              <p>九龍區</p>
              <el-checkbox-group v-model="checkList">
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
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <search-right-section></search-right-section>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import SearchRightSection from "../components/search/SearchRightSection.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    SearchRightSection,
  },
  data() {
    return {
      service: "",
      date: null,
      time: null,
      value: [4, 8],
      fiveStarRating: 5,
      fourStarRating: 4,
      threeStarRating: 3,
      twoStarRating: 2,
      checkList: [],
    };
  },
};
</script>

<style>
.search-section {
  background-color: #4e68b2;
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

.search-section .el-form-item__content > .service::before {
  content: "選擇服務";
}

.search-section .el-form-item__content > .appointment-date::before {
  content: "預約日期";
}

.search-section .el-form-item__content > .appointment-time::before {
  content: "預約時間";
}

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
  background-color: #7690da;
  border: 1px solid #7690da;
  color: white;
  /* margin-bottom: 22px; */
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.search-section .icon-search {
  width: 18px;
  margin-right: 0.2rem;
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
  /* width: 100%; */
  /* white-space: nowrap; */
  /* margin-left: -0.3rem; */
  /* color: #c6c6c6; */
  /* margin-top: 1rem; */
}

.content .slider {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.content .five-stars .el-rate__item .el-rate__icon svg,
.content .four-stars .el-rate__item:first-of-type .el-rate__icon svg,
.content .four-stars .el-rate__item:nth-of-type(2) .el-rate__icon svg,
.content .four-stars .el-rate__item:nth-of-type(3) .el-rate__icon svg,
.content .four-stars .el-rate__item:nth-of-type(4) .el-rate__icon svg,
.content .three-stars .el-rate__item:nth-of-type(1) .el-rate__icon svg,
.content .three-stars .el-rate__item:nth-of-type(2) .el-rate__icon svg,
.content .three-stars .el-rate__item:nth-of-type(3) .el-rate__icon svg,
.content .two-stars .el-rate__item:nth-of-type(1) .el-rate__icon svg,
.content .two-stars .el-rate__item:nth-of-type(2) .el-rate__icon svg {
  color: #7690da;
}

.content .four-stars .el-rate__item:nth-of-type(5) .el-rate__icon svg,
.content .three-stars .el-rate__item:nth-of-type(4) .el-rate__icon svg,
.content .three-stars .el-rate__item:nth-of-type(5) .el-rate__icon svg,
.content .two-stars .el-rate__item:nth-of-type(3) .el-rate__icon svg,
.content .two-stars .el-rate__item:nth-of-type(4) .el-rate__icon svg,
.content .two-stars .el-rate__item:nth-of-type(5) .el-rate__icon svg {
  color: #fff;
}

.content .customer-review .el-checkbox {
  display: flex;
  align-items: center;
}

.content .customer-review {
  border-bottom: 2px solid #e0e0e0;
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
</style>