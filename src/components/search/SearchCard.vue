<template>
  <el-row>
    <el-col
      :sm="24"
      :lg="6"
      class="card-img"
      :style="{ 'background-image': 'url(' + image + ')' }"
    >
      <!-- <img src="../../assets/Rectangle-77.png" class="card-img" alt="" /> -->
    </el-col>
    <el-col :sm="24" :lg="12">
      <div class="card-content">
        <h4>{{ name }}</h4>
        <p>{{ earliestAppointment }} - {{ description }}</p>
        <el-rate
          :colors="colors"
          :model-value="rate"
          show-score
          :score-template="rateNo"
          :disabled-void-color="voidColor"
          disabled
          text-color="#8D8D8D"
        />
        <p class="earliest-appointment">最早可預約時間</p>
        <div class="appointment-time-date">
          <span>{{ date }}</span>
          <span>{{ time }}</span>
        </div>
      </div>
    </el-col>
    <el-col class="pricing" :sm="24" :lg="6">
      <div>
        <p>HKD{{ discountPrice }}</p>
        <h6>HKD{{ price }}</h6>
      </div>
      <el-button>立即預約</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: [
    "name",
    "description",
    "rate",
    "rateNo",
    "earliestAppointment",
    "time",
    "date",
    "discountPrice",
    "price",
    "image",
  ],
  data() {
    return {
      colors: ["#7690da", "#7690da", "#7690da"],
      voidColor: "#C6C6C6",
      finalRate: this.rate,
    };
  },
};
</script>

<style>
.right-section .box-card .el-card__body {
  padding: 0 !important;
}

.right-section .box-card .card-img {
  /* width: 190px; */
  /* width: 100%;
  height: 100%;
  object-fit: contain; */
  /* background-image: url("../../assets/Rectangle-77.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: contain; */
  /* width: 180px; */
  /* height: 200px; */
}

.right-section .box-card .card-content {
  margin-left: 1rem;
  position: relative;
  /* border-right: 0.8px solid #e0e0e0;
  height: 138.22px; */
}

/* .right-section .box-card .card-content::after {
  content: "";
  position: absolute;
  width: 29.3rem;
  height: 1px;
  background-color: #e0e0e0;
  transform: rotate(90deg);
  right: -233px;
} */

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
  /* max-width: 150px; */
  width: 55%;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.right-section .box-card .card-content .appointment-time-date span {
  /* margin-right: 0.5rem; */
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

@media screen and (max-width: 1024px) {
  .right-section .box-card .card-img {
    height: 500px;
  }
}

@media screen and (max-width: 414px) {
  .right-section .box-card .card-img {
    height: 250px;
  }
}

/* @media screen and (max-width: 1024px) {
  .right-section .box-card .card-content::after {
    display: none;
  }
} */
</style>