<template>
  <section class="search">
    <base-content-container>
      <div class="search-content">
        <el-row justify="space-between">
          <el-col :sm="24" :md="5" :lg="5">
            <p class="title">選擇服務</p>
            <el-select
              popper-class="service-dropdown"
              v-model="value"
              placeholder="身體檢查"
            >
              <h5>選擇服務</h5>
              <el-row justify="space-between">
                <el-col class="service-option" :span="7">
                  <el-option value="HPV疫苗">
                    <p>HPV疫苗</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="四痘混合疫苗">
                    <p>四痘混合疫苗</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="兒童疫苗">
                    <p>兒童疫苗</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="13價肺炎球菌疫苗">
                    <p>13價肺炎球菌疫苗</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="孕前檢查">
                    <p>孕前檢查</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="人工受孕">
                    <p>人工受孕</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="凍卵">
                    <p>凍卵</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="身體檢查">
                    <p>身體檢查</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="基因檢查">
                    <p>基因檢查</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="DNA基因檢查">
                    <p>DNA基因檢查</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="腫瘤基因檢查">
                    <p>腫瘤基因檢查</p>
                  </el-option>
                </el-col>
                <el-col class="service-option" :span="7">
                  <el-option value="兒科檢查">
                    <p>兒科檢查</p>
                  </el-option>
                </el-col>
              </el-row>
            </el-select>
          </el-col>
          <el-col :sm="24" :md="5" :lg="5">
            <p class="title">預約日期</p>
            <el-date-picker
              v-model="datePicker"
              type="date"
              placeholder="Pick a day"
            >
            </el-date-picker>
            <!-- <p>2021/12/20</p> -->
          </el-col>
          <el-col :sm="24" :md="5" :lg="5">
            <p class="title">預約時間</p>
            <el-time-picker v-model="timePicker" placeholder="Arbitrary time">
            </el-time-picker>
            <!-- <p>上午 10:00</p> -->
          </el-col>
          <el-col :sm="24" :md="5" :lg="5">
            <button>
              <img
                src="../assets/icon-search@2x.png"
                class="search-icon"
                alt=""
              />
              搜尋
            </button>
          </el-col>
        </el-row>
      </div>
    </base-content-container>
  </section>
  <meds-slider></meds-slider>
  <latest-offers-section></latest-offers-section>
</template>

<script>
import MedsSlider from "./MedsSlider.vue";
import LatestOffersSection from "./LatestOffersSection.vue";

export default {
  components: {
    MedsSlider,
    LatestOffersSection,
  },
  data() {
    return {
      value: "",
      datePicker: "",
      timePicker: "",
    };
  },
};
</script>

<style>
.search {
  background-color: #e5e5e5;
  padding: 2rem 0;
  /* min-width: 320px; */
}

.search p {
  margin: 0;
}

.search .title {
  color: grey;
  font-size: 14px;
  line-height: 20px;
}

.search .el-row {
  align-items: center;
}

.search .search-content {
  background-color: #fff;
  border-radius: 128px;
  padding: 8px 8px 8px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  margin-top: -70px;
  position: relative;
  z-index: 1;
  min-width: 200px;
}

.search .el-button.el-button--primary {
  background-color: #7690da;
  border-color: #7690da;
  padding: 16px;
  width: 100%;
  border-radius: 100px;
}

.search .search-icon {
  width: 18px;
  margin-right: 0.5rem;
  /* margin-right: 0.3rem; */
  /* margin-top: 0.6rem; */
}

.search button {
  background-color: #7690da;
  border: 1px solid #7690da;
  padding: 16px;
  width: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  /* font-size: 18px; */
  font-weight: 700;
  line-height: 28px;
}

.el-select__popper.service-dropdown.el-popper.is-pure {
  /* min-width: 630px; */
  max-width: 640px;
  border-radius: 24px;
  padding: 8px 16px;
}

.el-select-dropdown.service-dropdown .el-scrollbar {
  border-radius: 24px;
}

.el-select-dropdown.service-dropdown .el-scrollbar .service-option {
  background: #f4f4f4;
  border-radius: 100px;
  /* padding: 16px 24px; */
  margin-bottom: 1rem;
}

.el-select-dropdown.service-dropdown .el-scrollbar .service-option li p {
  text-align: center;
}

.el-select-dropdown.service-dropdown .el-select-dropdown__item:hover,
.el-select-dropdown.service-dropdown .el-select-dropdown__item.selected {
  border: 1px solid #7690da;
  border-radius: 24px;
  color: #606266;
  font-weight: normal;
}

.service-dropdown h5 {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #525252;
  margin-bottom: 1rem;
}

.search .el-select .el-input__inner,
.search .el-input .el-input__inner {
  border: none;
  padding: 0;
  background: transparent;
}

.search .el-select .el-icon.el-select__caret.el-input__icon,
.search .el-input .el-input__prefix {
  display: none;
}

@media screen and (max-width: 768px) {
  .search .search-content {
    border-radius: 16px;
    text-align: center;
    margin-top: 0;
    padding-left: 8px;
  }

  .search .search-content .title + p {
    margin-bottom: 0.5rem;
  }
  .search .search-content .el-col,
  .search .search-content .el-col .el-input__inner {
    text-align: center;
  }
}
</style>