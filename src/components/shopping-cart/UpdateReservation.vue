<template>
  <div class="update-reservation">
    <el-dialog @closed="dialogClosed" :model-value="dialogVisible">
      <el-row>
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
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },
  props: ["dialogVisible"],
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
    singleItemDetail: {
      deep: true,
      handler() {
        this.date = this.singleItemDetail.defaultBookingDate;
        console.log("data changed");
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
    },
  },
};
</script>

<style scoped>
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