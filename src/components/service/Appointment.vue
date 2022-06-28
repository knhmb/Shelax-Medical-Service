<template>
  <h3>{{ $t("booking_date_and_time") }}</h3>
  <div class="content">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" v-if="singleItemDetail.itemType === 'service'">
        <p>{{ $t("booking_date") }}</p>
        <date-picker
          v-model="date"
          :locale="locale"
          is-expanded
          title-position="left"
          :masks="masks"
          @update:from-page="fromPage"
          :disabled-dates="disabledDates"
          :attributes="attributes"
          @dayclick="selectedDay"
        ></date-picker>
      </el-col>
      <el-col :sm="24" :lg="12">
        <Time
          @noOfPeople="getNoOfPeople"
          :selected-date="selectedDate"
          :date-data="dateData"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Time from "./Time.vue";
import { DatePicker } from "v-calendar";
import moment from "moment";

export default {
  //   setup() {
  //     const value = ref("2021-10-29");
  //     const holidays = [
  //       "2021-10-01",
  //       "2021-10-02",
  //       "2021-10-03",
  //       "2021-10-04",
  //       "2021-10-05",
  //       "2021-10-06",
  //       "2021-10-07",
  //     ];
  //     const isHoliday = ({ dayjs }) => {
  //       return holidays.includes(dayjs.format("YYYY-MM-DD"));
  //     };

  //     return {
  //       value,
  //       holidays,
  //       isHoliday,
  //     };
  //   },
  components: {
    Time,
    DatePicker,
  },

  data() {
    return {
      isSelected: "13",
      masks: {
        title: "YYYY MMM",
      },
      locale: "zh",
      dateData: {},
      noOfPeople: 1,
      date: new Date(),
      selectedDate: "",
    };
  },
  watch: {
    lang() {
      if (this.lang === "en-US") {
        this.locale = "en";
      } else {
        this.locale = "zh";
      }
    },
    // singleItemDetail: {
    //   deep: true,
    //   handler() {
    //     this.date = this.singleItemDetail.defaultBookingDate;
    //   },
    // },
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
    lang() {
      return this.$store.getters.lang;
    },
    calendarViewDates() {
      return this.$store.getters["search/calendarViewDates"];
    },
    disabledDates() {
      const dates = this.calendarViewDates.filter(
        (date) => date.available === false
      );
      const arr = [];
      for (let date of dates) {
        arr.push(date.bookingDate);
      }
      return arr;
    },
    availableDates() {
      const dates = this.calendarViewDates.filter(
        (date) => date.available === true
      );
      const arr = [];
      for (let date of dates) {
        arr.push(date.bookingDate);
      }
      return arr;
    },
    attributes() {
      return this.calendarViewDates.map((date) => ({
        dates: date.bookingDate,
        popover: {
          label: this.$t("price", { price: date.price }),
        },
      }));
    },
  },
  methods: {
    setClass(option) {
      this.isSelected = option;
    },
    fromPage(page) {
      console.log(page);
      const firstDay = new Date(page.year, page.month - 1);
      const lastDay = new Date(page.year, page.month, 0);

      const data = {
        itemId: this.singleItemDetail.basicInfo.id,
        dateFrom: moment(firstDay).format("YYYYMMDD"),
        dateTo: moment(lastDay).format("YYYYMMDD"),
        quantity: this.noOfPeople,
      };
      this.dateData = data;
      console.log(this.dateData);
      this.$store.dispatch("search/getDates", data).then(() => {
        this.date = this.singleItemDetail.defaultBookingDate;
      });
    },
    getNoOfPeople(event) {
      this.noOfPeople = event;
      console.log(this.noOfPeople);
    },
    selectedDay(day) {
      if (day.el.classList.contains("is-disabled")) {
        return;
      }
      console.log(day);
      const data = {
        itemId: this.singleItemDetail.basicInfo.id,
        bookingDate: moment(day.id).format("YYYYMMDD"),
        quantity: this.noOfPeople,
      };
      console.log(data);
      this.$store.dispatch("search/getSelectedDate", data);
      this.selectedDate = moment(day.id).format("YYYYMMDD");
    },
  },
  created() {
    this.locale = this.lang;
    this.date = this.singleItemDetail.defaultBookingDate;
    this.selectedDate = moment(this.singleItemDetail.defaultBookingDate).format(
      "YYYYMMDD"
    );
  },
};
</script>

<style scoped>
.service .appointment-section h3 {
  color: #525252;
  /* font-size: 24px; */
  margin: 0;
}

.service .appointment-section .content {
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 4px 20px;
  margin-top: 2rem;
}

.service .appointment-section .content .el-col p {
  color: #525252;
  font-size: 16px;
  margin-bottom: 2rem;
}

.content :deep(.vc-pane-container .vc-highlight),
.content :deep(.vc-pane-container .vc-day-content):hover {
  border-radius: 4px !important;
}

.content :deep(.vc-day-content.vc-focusable.is-disabled) {
  cursor: not-allowed;
}
</style>