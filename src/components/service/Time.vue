<template>
  <div class="time-section">
    <p>選擇時間</p>
    <div class="am">
      <p class="divider"><span>上午</span></p>
      <el-row :gutter="10">
        <el-col :span="6">
          <base-button>9:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>9:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>10:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>10:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>11:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>11:30</base-button>
        </el-col>
      </el-row>
    </div>

    <div class="pm">
      <p class="divider"><span>下午</span></p>
      <el-row :gutter="10">
        <el-col :span="6">
          <base-button>12:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>12:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>13:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>13:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>14:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>14:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>15:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>15:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>16:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>16:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>17:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>17:30</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>18:00</base-button>
        </el-col>
        <el-col :span="6">
          <base-button>18:30</base-button>
        </el-col>
      </el-row>
    </div>
  </div>
  <el-row>
    <el-col class="btns">
      <el-button type="primary">加入購物車</el-button>
      <el-button type="success">立即預約</el-button>
    </el-col>
  </el-row>
</template>

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

.time-section + .el-row .btns {
  text-align: end;
}

.time-section + .el-row .el-button {
  padding: 12px 42px;
  margin-top: 1rem;
}

.time-section + .el-row .el-button--primary {
  background-color: #2d99a0;
  border-color: #2d99a0;
}

.time-section + .el-row .el-button--success {
  background-color: #7690da;
  border-color: #7690da;
}
</style>