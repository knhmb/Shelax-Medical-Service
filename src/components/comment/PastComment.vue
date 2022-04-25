<template>
  <section class="past-comment">
    <div class="card">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="4">
          <img src="../../assets/Rectangle-77.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="20">
          <h4>綜合個人健康體檢套餐</h4>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </el-col>
      </el-row>
      <view-review></view-review>
      <div class="btn-content">
        <el-button>刪除</el-button>
        <el-button>修改</el-button>
      </div>
      <!-- <add-review></add-review> -->
    </div>
    <div class="card">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="4">
          <img src="../../assets/Rectangle-77-1.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="20">
          <h4>綜合個人健康體檢套餐</h4>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </el-col>
      </el-row>
      <view-review></view-review>
      <div class="btn-content">
        <el-button>刪除</el-button>
        <el-button>修改</el-button>
      </div>
    </div>
  </section>
</template>

<script>
import ViewReview from "./ViewReview.vue";

export default {
  components: {
    ViewReview,
  },
};
</script>

<style scoped>
.past-comment .card {
  background: #ffffff;
  padding: 24px 24px 16px;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 1rem;
}

.past-comment .card .el-row {
  align-items: center;
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.past-comment .card img {
  width: 100%;
  border-radius: 4px;
}

.past-comment .card h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.past-comment .card p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.past-comment .card .btn-content {
  text-align: end;
  margin-top: 2rem;
}

.past-comment .card .btn-content .el-button {
  border-radius: 4px;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.past-comment .card .btn-content .el-button:last-of-type {
  background: #2d99a0;

  color: #ffffff;
}

.past-comment .card .btn-content .el-button:first-of-type {
  background: #ffffff;
  border-color: #fa5757;
  color: #fa5757;
}
</style>