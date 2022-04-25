<template>
  <section class="booking-second-tab">
    <div class="box">
      <el-row>
        <el-col :sm="24" :md="7">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="17">
          <h4>綜合個人健康體檢套餐</h4>
          <p>ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <el-rate
            disabled
            :void-color="'#c6c6c6'"
            :colors="colors"
            model-value="3"
            score-template="(138,370)"
            show-score
          />
          <p class="date-time">最早可預約時間</p>
          <el-row>
            <el-col :xs="24" :sm="12">
              <div class="date-content">
                <span>2021/12/20</span>
                <span>12:30</span>
              </div>
            </el-col>
            <el-col class="all-prices" :xs="24" :sm="12">
              <small class="original-price">HK$ 800</small>
              <span class="discount-price">HKD 570</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="box">
      <el-row>
        <el-col :sm="24" :md="7">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="17">
          <h4>綜合個人健康體檢套餐</h4>
          <p>ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <el-rate
            disabled
            :void-color="'#c6c6c6'"
            :colors="colors"
            model-value="3"
            score-template="(138,370)"
            show-score
          />
          <p class="date-time">最早可預約時間</p>
          <el-row>
            <el-col :xs="24" :sm="12">
              <div class="date-content">
                <span>2021/12/20</span>
                <span>12:30</span>
              </div>
            </el-col>
            <el-col class="all-prices" :xs="24" :sm="12">
              <small class="original-price">HK$ 800</small>
              <span class="discount-price">HKD 570</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
    };
  },
};
</script>

<style>
.booking-second-tab .box {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.booking-second-tab .box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.booking-second-tab .box .el-col:nth-of-type(2) {
  padding: 16px 12px;
}

.booking-second-tab .box h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
}

.booking-second-tab .box p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
  margin-top: 0.5rem;
}

.booking-second-tab .box .el-rate {
  margin-top: 0.5rem;
}

.booking-second-tab .box .el-rate .el-rate__item .el-rate__icon {
  margin-right: 0;
}

.booking-second-tab .box .el-rate .el-rate__text {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d !important;
}

.booking-second-tab .box p.date-time {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}

.booking-second-tab .box .date-content {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.booking-second-tab .box .date-content span {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
}

.booking-second-tab .box .original-price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration-line: line-through;
  color: #8d8d8d;
}

.booking-second-tab .box .discount-price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #4e68b2;
  margin-left: 0.5rem;
}

.booking .box .all-prices {
  text-align: end;
}
</style>