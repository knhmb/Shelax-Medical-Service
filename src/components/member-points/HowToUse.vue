<template>
  <section class="how-to-use">
    <base-member-card :invisible="true">
      <h3>怎樣使用點數？</h3>
      <p>Shelax Points 可於下次訂購扣減訂單金額，每100點可減HKD1.00。</p>
      <p>如何獲得點數</p>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>預訂行程</h4>
            <p>消費金額 HKD 100 可得 1 點，快註冊會員賺取點數！</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>開用何少</h4>
            <p>斗央棵知叫風文山好示室牠吧風發吧實！</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="box">
            <h4>開用何少</h4>
            <p>斗央棵知叫風文山好示室牠吧風發吧實！</p>
          </div>
        </el-col>
      </el-row>
    </base-member-card>
  </section>
</template>

<style scoped>
.how-to-use {
  margin: 1rem 0;
}

.how-to-use h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.how-to-use p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.how-to-use p:nth-of-type(2) {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin-top: 1rem;
  color: #262626;
}

.how-to-use .box {
  padding: 14px;
  border-radius: 4px;
  background: #fff;
  border: 0.8px solid #e0e0e0;
  margin-top: 1rem;
  width: 100%;
  height: 90%;
}

.how-to-use .box h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.how-to-use .box p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}
</style>