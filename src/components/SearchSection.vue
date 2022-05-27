<template>
  <section class="search">
    <base-content-container>
      <div class="search-content">
        <el-row justify="space-between">
          <el-col class="first-column" :sm="24" :md="6" :lg="6">
            <div :class="{ 'first-column-content': language !== 'en-US' }">
              <el-row v-if="language !== 'en-US'" class="select-search-option">
                <el-col
                  @click="setActiveOption('service')"
                  :class="{ 'is-active': isActive === 'service' }"
                  :span="9"
                >
                  <p>服務</p>
                </el-col>
                <el-col
                  @click="setActiveOption('product')"
                  :class="{ 'is-active': isActive === 'product' }"
                  :span="9"
                >
                  <p>產品</p>
                </el-col>
              </el-row>
              <p v-if="language === 'en-US'" class="title">
                Search services or products
              </p>
              <el-select
                popper-class="service-dropdown"
                v-model="value"
                filterable
                allow-create
                :placeholder="$t('choose_appointment')"
              >
                <div class="service-options">
                  <h5>{{ $t("common_services") }}</h5>
                  <el-row justify="space-between">
                    <el-col
                      v-for="service in serviceCategory"
                      :key="service.id"
                      class="service-option"
                      :class="{ selected: currentOption === service.name }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption(service.name)"
                        :value="service.name"
                      >
                        <p>{{ service.name }}</p>
                      </el-option>
                    </el-col>
                    <!-- <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '四痘混合疫苗' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('四痘混合疫苗')"
                        :value="$t('mmrv')"
                      >
                        <p>{{ $t("mmrv") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '兒童疫苗' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('兒童疫苗')"
                        :value="$t('children_vaccine')"
                      >
                        <p>{{ $t("children_vaccine") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{
                        selected: currentOption === '13價肺炎球菌疫苗',
                      }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('13價肺炎球菌疫苗')"
                        :value="$t('pcv13')"
                      >
                        <p>{{ $t("pcv13") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '孕前檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('孕前檢查')"
                        :value="$t('pre-pregnancy_checkup')"
                      >
                        <p>{{ $t("pre-pregnancy_checkup") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '人工受孕' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('人工受孕')"
                        :value="$t('ivf')"
                      >
                        <p>{{ $t("ivf") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '凍卵' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('凍卵')"
                        :value="$t('social_egg_freezing')"
                      >
                        <p>{{ $t("social_egg_freezing") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '身體檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('身體檢查')"
                        :value="$t('body_check')"
                      >
                        <p>{{ $t("body_check") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '基因檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('基因檢查')"
                        :value="$t('genetic_testing')"
                      >
                        <p>{{ $t("genetic_testing") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === 'DNA基因檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('DNA基因檢查')"
                        :value="$t('dna_genetic_testing')"
                      >
                        <p>{{ $t("dna_genetic_testing") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '腫瘤基因檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('腫瘤基因檢查')"
                        :value="$t('cancer_genetic_testing')"
                      >
                        <p>{{ $t("cancer_genetic_testing") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '兒科檢查' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('兒科檢查')"
                        :value="$t('child_health_checks')"
                      >
                        <p>{{ $t("child_health_checks") }}</p>
                      </el-option>
                    </el-col> -->
                  </el-row>
                </div>
                <div class="product-options">
                  <h5>{{ $t("product_type") }}</h5>
                  <el-row justify="space-between">
                    <el-col
                      v-for="product in productCategory"
                      :key="product.id"
                      class="service-option"
                      :class="{ selected: currentOption === product.name }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption(product.name)"
                        :value="product.name"
                      >
                        <p>{{ product.name }}</p>
                      </el-option>
                    </el-col>
                    <!-- <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '健康營養' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('健康營養')"
                        :value="$t('health_and_nutrition')"
                      >
                        <p>{{ $t("health_and_nutrition") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '復康保健' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('復康保健')"
                        :value="$t('rehabilitation')"
                      >
                        <p>{{ $t("rehabilitation") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '舒緩痛症' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('舒緩痛症')"
                        :value="$t('pain_relief')"
                      >
                        <p>{{ $t("pain_relief") }}</p>
                      </el-option>
                    </el-col>
                    <el-col
                      class="service-option"
                      :class="{ selected: currentOption === '醫療器械' }"
                      :span="7"
                    >
                      <el-option
                        @click="selectedOption('醫療器械')"
                        :value="$t('medical_instruments')"
                      >
                        <p>{{ $t("medical_instruments") }}</p>
                      </el-option>
                    </el-col> -->
                    <el-col :span="7"></el-col>
                  </el-row>
                </div>
              </el-select>
            </div>
          </el-col>
          <el-col :sm="24" :md="4" :lg="4">
            <p class="title">{{ $t("booking_date") }}</p>
            <el-date-picker
              v-model="datePicker"
              type="date"
              :placeholder="$t('booking_date_placeholder')"
            >
            </el-date-picker>
            <!-- <p>2021/12/20</p> -->
          </el-col>
          <el-col :sm="24" :md="4" :lg="4">
            <p class="title">{{ $t("booking_time") }}</p>
            <el-select
              popper-class="time-dropdown"
              v-model="timePicker"
              :placeholder="$t('booking_time_placeholder')"
            >
              <h5>{{ $t("booking_time") }}</h5>
              <el-row justify="space-between">
                <el-col :span="24" class="time-card">
                  <el-option :value="$t('anytime')">
                    <p>{{ $t("anytime") }}</p>
                  </el-option>
                </el-col>
                <el-col :span="24" class="time-card">
                  <el-option :value="$t('am')">
                    <p>{{ $t("am") }}</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="07:00" label="7:00">
                    <p>7:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="07:30" label="7:30">
                    <p>7:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="08:00" label="8:00">
                    <p>8:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="08:30" label="8:30">
                    <p>8:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="09:00" label="9:00">
                    <p>9:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="09:30" label="9:30">
                    <p>9:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="10:00" label="10:00">
                    <p>10:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="10:30" label="10:30">
                    <p>10:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="11:00" label="11:00">
                    <p>11:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="11:30" label="11:30">
                    <p>11:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5"> </el-col>
                <el-col :span="5"> </el-col>
                <el-col :span="24" class="time-card">
                  <el-option :value="$t('pm')">
                    <p>{{ $t("pm") }}</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="12:00" label="12:00">
                    <p>12:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="12:30" label="12:30">
                    <p>12:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="13:00" label="13:00">
                    <p>13:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="13:30" label="13:30">
                    <p>13:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="14:00" label="14:00">
                    <p>14:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="14:30" label="14:30">
                    <p>14:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="15:00" label="15:00">
                    <p>15:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="15:30" label="15:30">
                    <p>15:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="16:00" label="16:00">
                    <p>16:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="16:30" label="16:30">
                    <p>16:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="17:00" label="17:00">
                    <p>17:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="17:30" label="17:30">
                    <p>17:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="18:00" label="18:00">
                    <p>18:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="18:30" label="18:30">
                    <p>18:30</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="19:00" label="19:00">
                    <p>19:00</p>
                  </el-option>
                </el-col>
                <el-col :span="5" class="time-card">
                  <el-option value="19:30" label="19:30">
                    <p>19:30</p>
                  </el-option>
                </el-col>
              </el-row>
            </el-select>
            <!-- <p>上午 10:00</p> -->
          </el-col>
          <el-col :sm="24" :md="6" :lg="6">
            <button @click="search">
              <img
                src="../assets/icon-search@2x.png"
                class="search-icon"
                alt=""
              />
              {{ $t("search_button") }}
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
import moment from "moment";

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
      isActive: "service",
      currentOption: "",
    };
  },
  watch: {
    isLanguageEnglish(oldVal, newVal) {
      console.log(oldVal);
      console.log(newVal);
    },
  },
  computed: {
    language() {
      return this.$store.getters.lang;
    },
    serviceCategory() {
      return this.$store.getters["dashboard/serviceCategory"];
    },
    productCategory() {
      return this.$store.getters["dashboard/productCategory"];
    },
  },
  methods: {
    setActiveOption(option) {
      this.isActive = option;
    },
    selectedOption(option) {
      this.currentOption = option;
    },
    resetFields() {
      (this.timePicker = ""),
        (this.datePicker = ""),
        (this.value = ""),
        (this.isActive = "service");
    },
    search() {
      const data = {
        option: this.isActive,
        search: this.value,
        time:
          this.timePicker && this.timePicker.includes(":")
            ? this.timePicker.replace(":", "")
            : this.timePicker === this.$t("anytime")
            ? ""
            : this.timePicker,
        date: this.datePicker ? moment(this.datePicker).format("YYYYMMDD") : "",
      };
      console.log(data);
      console.log(this.timePicker);
      this.$store.dispatch("search/searchItem", data).then(() => {
        this.$store.commit("SET_SEARCH_VALUES", {
          date: this.datePicker,
          time: this.timePicker,
        });
        this.$router.push({
          path: "search",
          query: {
            q: `${data.search ? `search=${data.search}&` : ""}${
              data.option && data.time && data.date
                ? `filter=itemtype:${data.option},bookingdate:${data.date},bookingtime:${data.time}`
                : data.option && data.date
                ? `filter=itemtype:${data.option},bookingdate:${data.date}`
                : data.option && data.time
                ? `filter=itemtype:${data.option},bookingtime:${data.time}`
                : data.option
                ? `filter=itemtype:${data.option}`
                : ""
            }`,
          },
        });
        this.resetFields();
      });
    },
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

.search .search-content .el-col {
  /* padding: 16px 26px 24px 24px; */
}

.search .search-content .el-col.first-column .first-column-content {
  background-color: #f4f4f4;
  border-radius: 100px;
  padding: 16px;
}

.search .el-row.select-search-option .el-col {
  background-color: #f4f4f4;
  border-radius: 100px;
  padding: 4px 12px;
  margin-right: 0.5rem;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  transition: 0.2s ease-out;
}

.search .el-row.select-search-option .el-col:hover,
.search .el-row.select-search-option .el-col.is-active {
  background: #7690da;
}

.search .el-row.select-search-option .el-col:hover p,
.search .el-row.select-search-option .el-col.is-active p {
  color: #fff;
}

.search .el-row.select-search-option .el-col p {
  text-align: center;
  width: 100%;
  word-break: break-word;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #a8a8a8;
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
  /* padding: 16px; */
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
  padding: 26px;
}

.el-select__popper.service-dropdown.el-popper.is-pure,
.el-select__popper.time-dropdown.el-popper.is-pure {
  /* min-width: 630px; */
  max-width: 640px;
  border-radius: 24px;
  padding: 8px 16px;
}

.el-select-dropdown.service-dropdown .el-scrollbar {
  border-radius: 24px;
  /* min-height: 500px; */
}

.el-select-dropdown.service-dropdown .el-select-dropdown__wrap {
  max-height: 100%;
}

.el-select-dropdown.service-dropdown .el-scrollbar .service-option {
  background: #f4f4f4;
  border-radius: 100px;
  /* padding: 16px 24px; */
  border: 1px solid #f4f4f4;
  padding: 0 32px 0 20px;
  margin-bottom: 1rem;
}

.el-select-dropdown.service-dropdown .el-scrollbar .service-option li p {
  text-align: center;
}

/* .el-select-dropdown.service-dropdown .el-select-dropdown__item:hover,
.el-select-dropdown.service-dropdown .el-select-dropdown__item.selected {
  border: 1px solid #7690da;
  border-radius: 24px;
  color: #606266;
  font-weight: normal;
} */

.el-select-dropdown.service-dropdown .el-select-dropdown__item.selected {
  /* border: 1px solid #7690da; */
  /* border-radius: 24px; */
  color: #606266;
  font-weight: normal;
}

.el-select-dropdown.service-dropdown .el-scrollbar .service-option:hover {
  border-color: #7690da;

  cursor: pointer;
}
.el-select-dropdown.service-dropdown .el-scrollbar .service-option.selected {
  border-color: #7690da;
}

.service-dropdown h5,
.time-dropdown h5 {
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

.el-select-dropdown.time-dropdown .el-scrollbar .time-card {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  /* margin-right: 1rem; */
}

.el-select-dropdown.time-dropdown .el-scrollbar .time-card p {
  text-align: center;
}

.time-dropdown
  .el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default {
  max-height: 100%;
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