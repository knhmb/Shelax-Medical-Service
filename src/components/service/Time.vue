<template>
  <div class="time-section">
    <p>選擇時間</p>
    <div class="am">
      <p class="divider"><span>上午</span></p>
      <el-row :gutter="10">
        <el-col
          v-for="time in singleItemDetail.defaultDateTimeslots.slice(0, 6)"
          :key="time.id"
          :sm="24"
          :md="6"
          :lg="6"
        >
          <base-button>{{
            `${time.sessionStart.slice(0, time.sessionStart.lastIndexOf(":"))}`
          }}</base-button>
        </el-col>
        <!-- <el-col :sm="24" :md="6" :lg="6">
          <base-button>9:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>10:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>10:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>11:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>11:30</base-button>
        </el-col> -->
      </el-row>
    </div>

    <div class="pm">
      <p class="divider"><span>下午</span></p>
      <el-row :gutter="10">
        <el-col
          v-for="time in singleItemDetail.defaultDateTimeslots.slice(6)"
          :key="time.id"
          :sm="24"
          :md="6"
          :lg="6"
        >
          <base-button>{{
            `${time.sessionStart.slice(0, time.sessionStart.lastIndexOf(":"))}`
          }}</base-button>
        </el-col>
        <!-- <el-col :sm="24" :md="6" :lg="6">
          <base-button>12:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>13:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>13:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>14:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>14:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>15:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>15:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>16:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>16:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>17:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>17:30</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>18:00</base-button>
        </el-col>
        <el-col :sm="24" :md="6" :lg="6">
          <base-button>18:30</base-button>
        </el-col> -->
      </el-row>
    </div>
  </div>
  <div class="time-footer">
    <el-row>
      <el-col>
        <p class="quantity">數量</p>
      </el-col>
      <el-col>
        <div class="quantity-range">
          <el-row>
            <el-col :span="12">
              <p>人數</p>
            </el-col>
            <el-col class="quantity-input" :span="12">
              <el-input-number size="small" v-model="num" :min="1" :max="10" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="btns">
        <el-button type="primary">加入購物車</el-button>
        <el-button type="success">立即預約</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
};
</script>

<style>
.time-section p {
  color: #525252;
}

.time-section .divider {
  width: 100%;
  /* text-align: center; */
  border-bottom: 1px solid #c6c6c6;
  line-height: 0.1em;
  /* margin: 15px 0 20px; */
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.time-section .divider span {
  background: #fff;
  /* padding: 0 10px; */
  padding-right: 5px;
  color: #c6c6c6;
  margin-top: 1rem;
}

.time-section {
  border-bottom: 0.8px solid #c6c6c6;
}

.time-section .pm {
  padding-bottom: 1.5rem;
}

.time-footer .el-row .btns {
  text-align: end;
}

.time-footer .el-row .el-button {
  padding: 12px 42px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.time-footer .el-row .el-button--primary {
  background-color: #2d99a0;
  border-color: #2d99a0;
}

.time-footer .el-row .el-button--success {
  background-color: #7690da;
  border-color: #7690da;
}

.time-footer p.quantity {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
  margin: 1rem 0;
}

.time-footer .quantity-range {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
}

.time-footer .quantity-range p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
}

.time-footer .quantity-range .el-row {
  align-items: center;
}

.time-footer .quantity-range .quantity-input {
  text-align: end;
}

.time-footer .quantity-input .el-input-number {
  width: 100%;
}

.time-footer .quantity-input .el-input-number__decrease,
.time-footer .quantity-input .el-input-number__increase,
.time-footer .quantity-input .el-input__inner {
  border: none;
}

.time-footer .quantity-input .el-input-number__decrease,
.time-footer .quantity-input .el-input-number__increase {
  background: #f4f4f4;
}

.time-footer .quantity-input .el-input__inner {
  font-weight: bold;
  font-size: 16px;
}

@media screen and (max-width: 414px) {
  .time-sectfooter .el-row .btns {
    text-align: center;
  }

  .time-footer .el-row .el-button {
    padding: 12px 20px;
    /* margin-bottom: 0.5rem; */
  }
}
</style>