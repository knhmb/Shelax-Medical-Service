<template>
  <section class="booking-first-tab">
    <template v-for="order in orderHistory" :key="order.orderId">
      <div class="box" v-if="order.isService">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6">
            <img :src="order.thumbnail" alt="" />
          </el-col>
          <el-col :xs="24" :sm="18">
            <p>{{ order.itemName }}</p>
            <p>地址: {{ order.providerName }} - {{ order.providerAddress }}</p>
            <p v-if="order.isProduct">
              {{ $t("quantity") }}: {{ order.quantity }} - 14:30
            </p>
            <p v-if="order.isService">
              預約日期及時間: {{ order.reservedDate }} -
              {{ order.reservedTime }}
            </p>
            <p class="price">HKD {{ order.price }}</p>
          </el-col>
        </el-row>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  computed: {
    orderHistory() {
      return this.$store.getters["profile/orderHistory"];
    },
  },
};
</script>

<style scoped>
.booking-first-tab .box {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 1rem;
}

.booking-first-tab .box img {
  width: 100%;
  border-radius: 4px;
  height: 100%;
  object-fit: cover;
  /* margin-bottom: 3rem; */
}

.booking-first-tab .box p:first-of-type {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 1rem;
}

.booking-first-tab .box p:nth-of-type(2),
.booking-first-tab .box p:nth-of-type(3) {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.booking-first-tab .box p:nth-of-type(3) {
  margin-top: 0.1rem;
}

.booking-first-tab .box p.price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #4e68b2;
  margin-top: 2rem;
}

@media screen and (max-width: 767px) {
  .booking-first-tab .box p:first-of-type {
    margin-top: 1rem;
  }

  .booking-first-tab .box p:nth-of-type(3) {
    margin-top: 0.5rem;
  }
}
</style>