<template>
  <p>選擇時間</p>
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
</template>

<style scoped>
p {
  color: #525252;
}

.divider {
  width: 100%;
  /* text-align: center; */
  border-bottom: 1px solid #c6c6c6;
  line-height: 0.1em;
  /* margin: 15px 0 20px; */
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.divider span {
  background: #fff;
  /* padding: 0 10px; */
  padding-right: 5px;
  color: #c6c6c6;
  margin-top: 1rem;
}
</style>