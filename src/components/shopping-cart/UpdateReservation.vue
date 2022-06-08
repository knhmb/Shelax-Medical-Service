<template>
  <div class="update-reservation">
    <el-dialog @closed="dialogClosed" :model-value="dialogVisible">
      <el-row :gutter="15">
        <el-col :span="12">
          <p>選擇日期</p>
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
        <el-col :span="12">
          <Time
            :disable-button="disableButton"
            :item="item"
            :date="date"
            @closeDialog="dialogClosed"
          />
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import Time from "./Time.vue";
import moment from "moment";

export default {
  components: {
    DatePicker,
    Time,
  },
  props: ["dialogVisible", "item"],
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
      isFirstLoad: true,
      disableButton: false,
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
    singleItemDetail: {
      deep: true,
      handler() {
        if (this.isFirstLoad)
          this.date = this.singleItemDetail.defaultBookingDate;
        this.isFirstLoad = false;
      },
    },
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
    dialogClosed() {
      this.$emit("dialogClosed", false);
      this.isFirstLoad = true;
    },
    fromPage(page) {
      console.log(page);
      const firstDay = new Date(page.year, page.month - 1);
      const lastDay = new Date(page.year, page.month, 0);

      const data = {
        // itemId: this.singleItemDetail.basicInfo.id,
        itemId: this.item.reservedItemId,
        dateFrom: moment(firstDay).format("YYYYMMDD"),
        dateTo: moment(lastDay).format("YYYYMMDD"),
        quantity: this.item.quantity,
      };
      console.log(data);
      this.$store
        .dispatch("search/getDates", data)
        .then(() => {
          this.date = this.singleItemDetail.defaultBookingDate;
          this.disableButton = false;
        })
        .catch(() => {
          this.disableButton = true;
        });
    },
    selectedDay(day) {
      if (day.el.classList.contains("is-disabled")) {
        return;
      }
      console.log(day);
      const data = {
        // itemId: this.singleItemDetail.basicInfo.id,
        itemId: this.item.reservedItemId,
        bookingDate: moment(day.id).format("YYYYMMDD"),
        quantity: this.item.quantity,
        // quantity: this.noOfPeople,
      };
      console.log(data);
      this.$store.dispatch("search/getSelectedDate", data);
      //   this.selectedDate = moment(day.id).format("YYYYMMDD");
    },
  },
};
</script>

<style scoped>
.update-reservation .el-dialog {
  min-width: 50rem;
}

.update-reservation :deep(.el-dialog .el-dialog__body) {
  padding: 1rem;
}

.update-reservation p {
  color: #525252;
  font-size: 16px;
  margin-bottom: 1rem;
}

.update-reservation :deep(.vc-pane-container .vc-highlight),
.update-reservation :deep(.vc-pane-container .vc-day-content):hover {
  border-radius: 4px !important;
}

.update-reservation :deep(.vc-day-content.vc-focusable.is-disabled) {
  cursor: not-allowed;
}
</style>