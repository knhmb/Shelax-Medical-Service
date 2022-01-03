<template>
  <div class="right-section">
    <el-card class="box-card">
      <el-row>
        <el-col :span="3">
          <img
            src="https://previews.123rf.com/images/pressmaster/pressmaster1606/pressmaster160601214/59150208-pretty-patient-sitting-in-bed.jpg"
            class="card-img"
            alt=""
          />
        </el-col>
        <el-col :span="15">
          <div class="card-content">
            <h4>綜合個人健康體檢套餐</h4>
            <p>ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
            <el-rate
              :colors="colors"
              v-model="value"
              show-score
              score-template="(138,370)"
              :disabled-void-color="voidColor"
              disabled
              text-color="#8D8D8D"
            />
            <p class="earliest-appointment">最早可預約時間</p>
            <div class="appointment-time-date">
              <span>2021/12/20</span>
              <span>12:30</span>
            </div>
          </div>
        </el-col>
        <el-col class="pricing" :span="6">
          <div>
            <p>160$</p>
            <h6>180$</h6>
          </div>
          <el-button>Buy</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      colors: ["#7690da", "#7690da", "#7690da"],
      voidColor: "#C6C6C6",
    };
  },
};
</script>

<style>
.right-section .box-card {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
}

.right-section .box-card .el-card__body {
  padding: 0 !important;
}

.right-section .box-card .card-img {
  width: 200px;
  height: 100%;
}

.right-section .box-card {
  /* border-right: 1px solid black; */
}

.right-section .box-card .card-content {
  margin-left: 8rem;
  position: relative;
  /* border-right: 0.8px solid #e0e0e0;
  height: 138.22px; */
}

.right-section .box-card .card-content::after {
  content: "";
  position: absolute;
  width: 27.2rem;
  height: 1px;
  background-color: #e0e0e0;
  transform: rotate(90deg);
  right: -218px;
}

.right-section .box-card .card-content h4 {
  margin: 0;
  margin-top: 1rem;
}

.right-section .box-card .card-content p {
  font-size: 12px;
}

.right-section .box-card .card-content .earliest-appointment {
  margin-top: 2rem;
  font-size: 14px;
}

.right-section .box-card .card-content .appointment-time-date {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-width: 150px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.right-section .box-card .pricing {
  align-self: flex-end;
  padding: 8px 12px;
}

.right-section .box-card .pricing p {
  color: #8d8d8d;
  font-size: 14px;
  letter-spacing: 0.1px;
  text-decoration: line-through;
  text-align: end;
  margin: 0;
}

.right-section .box-card .pricing h6 {
  margin: 0;
  font-size: 24px;
  text-align: end;
  margin-bottom: 1rem;
}

.right-section .box-card .pricing .el-button {
  width: 100%;
  background-color: #7690da;
  border-color: #7690da;
  color: #fff;
}
</style>