<template>
  <div class="right-section">
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
          @click="setOption('rating')"
          :class="{ 'is-selected': isActive === 'rating' }"
          :sm="12"
          :md="6"
        >
          <p>{{ $t("highest_rating") }}</p>
        </el-col>
      </el-row>
    </div>
    <el-card
      @click="getItemDetail(item.itemId)"
      class="box-card"
      v-for="item in searchItems"
      :key="item.itemId"
    >
      <search-card
        :id="item.itemId"
        :name="item.itemName"
        :description="item.address"
        :rate="item.rating"
        :rate-no="item.reviewsCount"
        :earliestAppointment="item.providerName"
        :date="item.earliestBookingDate"
        :time="item.earliestBookingTime"
        :discountPrice="item.discountedPrice"
        :price="item.originalPrice"
        :image="item.thumbnail"
        :search-date="date"
        :search-time="time"
        :dummy="item"
        :timeslotId="item.earliestTimeslotId"
        :item-type="item.searchItemType"
      ></search-card>
    </el-card>
  </div>
</template>

<script>
import SearchCard from "./SearchCard.vue";
import moment from "moment";

export default {
  props: ["isActive", "date", "time"],
  components: {
    SearchCard,
  },
  data() {
    return {
      // isActive: "推薦",
      services: [
        {
          id: 1,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77.png"),
        },
        {
          id: 2,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-1.png"),
        },
        {
          id: 3,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-2.png"),
        },
        {
          id: 4,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-3.png"),
        },
        {
          id: 5,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77.png"),
        },
        {
          id: 6,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-1.png"),
        },
        {
          id: 7,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-2.png"),
        },
        {
          id: 8,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-3.png"),
        },
        {
          id: 9,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77.png"),
        },
        {
          id: 10,
          name: "綜合個人健康體檢套餐",
          description: "ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號",
          rate: 4,
          rateNo: "(138,370)",
          earliestAppointment: "最早可預約時間",
          date: "2021/12/20",
          time: "12:30",
          discountPrice: "HK$ 800",
          price: "HKD 570",
          image: require("../../assets/Rectangle-77-1.png"),
        },
      ],
    };
  },
  computed: {
    searchItems() {
      return this.$store.getters["search/searchItems"];
    },
    dateSearchValue() {
      return this.$store.getters.date;
    },
    timeSearchValue() {
      return this.$store.getters.time;
    },
  },
  methods: {
    setOption(option) {
      this.$emit("changedSort", option);
    },
    getItemDetail(id) {
      const data = {
        itemId: id,
        bookingDate: this.dateSearchValue
          ? moment(this.dateSearchValue).format("YYYYMMDD")
          : moment(new Date()).format("YYYYMMDD"),
        bookingTime: this.timeSearchValue
          ? this.timeSearchValue.replace(":", "")
          : "-",
      };
      console.log(data);
      this.$store.dispatch("search/getItemDetail", data).then(() => {
        this.$router.push("/service");
      });
    },
  },
};
</script>



<style>
.right-section .box-card {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
  cursor: pointer;
}

.content .right-section .options {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.content .right-section .options .el-col {
  text-align: center;
  cursor: pointer;
  padding: 8px 24px;
  position: relative;
}

.content .right-section .options .el-col p {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.content .right-section .options .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  width: 1px;
  height: 30px;
  background: #e0e0e0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.content .right-section .options .el-col:hover:not(:last-of-type):after {
  background: #7690da;
}

.content .right-section .options .el-col:hover {
  background: #7690da;
  transition: all 0.2s ease;
}

.content .right-section .options .el-col:hover p {
  color: #fff;
}

.content .right-section .options .el-col.is-selected {
  background: #7690da;
}

.content .right-section .options .el-col.is-selected p {
  color: #fff;
}

.content .right-section .options .el-col.is-selected:after {
  background: #7690da;
}
</style>