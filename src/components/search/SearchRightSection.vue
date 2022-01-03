<template>
  <div class="right-section">
    <el-card class="box-card" v-for="service in services" :key="service.id">
      <search-card
        :name="service.name"
        :description="service.description"
        :rate="service.rate"
        :rate-no="service.rateNo"
        :earliestAppointment="service.earliestAppointment"
        :date="service.date"
        :time="service.time"
        :discountPrice="service.discountPrice"
        :price="service.price"
      ></search-card>
    </el-card>
  </div>
</template>

<script>
import SearchCard from "./SearchCard.vue";

export default {
  components: {
    SearchCard,
  },
  data() {
    return {
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
        },
      ],
    };
  },
};
</script>



<style>
.right-section .box-card {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
}
</style>