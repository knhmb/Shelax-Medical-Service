<template>
  <section class="booking-first-tab">
    <div class="box">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="6">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="18">
          <p>綜合個人健康體檢套餐</p>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          <p class="price">HKD 570</p>
        </el-col>
      </el-row>
    </div>
    <div class="box">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="6">
          <img src="../../assets/Rectangle-77-1.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="18">
          <p>綜合個人健康體檢套餐</p>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          <p class="price">HKD 570</p>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

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