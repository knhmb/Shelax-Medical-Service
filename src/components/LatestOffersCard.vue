<template>
  <el-card class="box-card">
    <img
      src="https://previews.123rf.com/images/pressmaster/pressmaster1606/pressmaster160601214/59150208-pretty-patient-sitting-in-bed.jpg"
      style="width: 100%"
      alt=""
    />
    <div class="content">
      <p class="latest-offers-img-text">{{ name }}</p>
      <p class="latest-offers-desc">
        {{ description }}
      </p>
      <el-rate
        :colors="colors"
        :void-color="voidColor"
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        :score-template="numberOfRate"
      >
      </el-rate>
      <p class="latest-offers-price">
        {{ price }} <small>{{ discount }}</small>
      </p>
    </div>
  </el-card>
</template>

<script>
import { ref } from "vue";

export default {
  props: [
    "name",
    "description",
    "price",
    "discount",
    "rate",
    "numberOfRate",
    "productName",
  ],
  setup(props) {
    const value = ref(props.rate);
    const colors = ref(["#7690DA", "#7690DA", "#7690DA"]);
    const voidColor = ref("#c6c6c6");

    return {
      value,
      colors,
      voidColor,
    };
  },
};
</script>

<style>
.latest-offers .box-card {
  border-radius: 12px !important;
  height: 100% !important;
}

.latest-offers p {
  margin: 0;
}

.latest-offers .content {
  padding: 0.5rem 1rem;
}

.latest-offers .latest-offers-img-text {
  font-size: 12px;
  color: #ea3e3e;
  margin-bottom: 0.1rem;
}

.latest-offers .latest-offers-desc {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 0.1rem;
}

.latest-offers .el-rate .el-rate__text {
  font-size: 10px !important;
  color: #7e7e7e !important;
}

.latest-offers .el-rate .el-icon.el-rate__icon {
  /* color: #7690da !important; */
}

.latest-offers .latest-offers-price {
  font-size: 16px;
  font-weight: bold;
  color: #7a3d87;
  margin-top: 2rem;
}

.latest-offers .latest-offers-price small {
  font-size: 12px;
  color: #7e7e7e;
}

.latest-offers .el-carousel__arrow {
  background-color: #fff !important;
  color: black !important;
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left {
  left: 140px !important;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right {
  right: 140px !important;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-card__body {
  padding: 0;
}
</style>