<template>
  <el-card class="box-card">
    <img
      v-if="category === 'latestOffers'"
      src="https://previews.123rf.com/images/pressmaster/pressmaster1606/pressmaster160601214/59150208-pretty-patient-sitting-in-bed.jpg"
      style="width: 100%"
      alt=""
    />
    <img
      v-else-if="category === 'popularClinics'"
      src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1702/wavebreakmediamicro170202630/71205692-portrait-of-smiling-patient-lying-on-bed-in-a-hospital.jpg"
      style="width: 100%"
      alt=""
    />
    <img
      v-else-if="category === 'newShelf'"
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
      <small class="discount">{{ discount }}</small>
      <p class="latest-offers-price">
        {{ price }}
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
    "category",
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
.latest-offers .box-card,
.popular-clinics .box-card,
.new-shelf .box-card,
.recommended-services .box-card {
  border-radius: 12px !important;
  height: 100% !important;
}

.latest-offers p,
.popular-clinics p,
.new-shelf p,
.recommended-services p {
  margin: 0;
}

.latest-offers .content,
.popular-clinics .content,
.new-shelf .content,
.recommended-services .content {
  padding: 0.5rem 1rem;
}

.latest-offers .latest-offers-img-text,
.popular-clinics .latest-offers-img-text,
.new-shelf .latest-offers-img-text,
.recommended-services .latest-offers-img-text {
  font-size: 12px;
  color: #8d8d8d;
  margin-bottom: 0.1rem;
}

.latest-offers .latest-offers-desc,
.popular-clinics .latest-offers-desc,
.new-shelf .latest-offers-desc,
.recommended-services .latest-offers-desc {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: #2d2d2d;
}

.latest-offers .el-rate .el-rate__text,
.popular-clinics .el-rate .el-rate__text,
.new-shelf .el-rate .el-rate__text,
.recommended-services .el-rate .el-rate__text {
  font-size: 10px !important;
  color: #7e7e7e !important;
}

.latest-offers .el-rate,
.popular-clinics .el-rate,
.new-shelf .el-rate,
.recommended-services .el-rate {
  margin-bottom: 2rem;
}

.latest-offers .discount,
.popular-clinics .discount,
.new-shelf .discount,
.recommended-services .discount {
  text-decoration: line-through;
  color: #8d8d8d;
  font-size: 12px;
}

.latest-offers .latest-offers-price,
.popular-clinics .latest-offers-price,
.new-shelf .latest-offers-price,
.recommended-services .latest-offers-price {
  font-size: 16px;
  font-weight: bold;
  /* color: #7a3d87; */
}

.latest-offers .latest-offers-price small,
.popular-clinics .latest-offers-price small,
.new-shelf .latest-offers-price small,
.recommended-services .small {
  font-size: 12px;
  color: #7e7e7e;
}

.latest-offers .el-carousel__arrow,
.popular-clinics .el-carousel__arrow,
.new-shelf .el-carousel__arrow,
.recommended-services .el-carousel__arrow {
  background-color: #fff !important;
  color: black !important;
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--left,
.new-shelf .el-carousel__arrow.el-carousel__arrow--left,
.recommended-services .el-carousel__arrow.el-carousel__arrow--left {
  left: 140px !important;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left:hover,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--left:hover,
.new-shelf .el-carousel__arrow.el-carousel__arrow--left:hover,
.recommended-services .el-carousel__arrow.el-carousel__arrow--left:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--right,
.new-shelf .el-carousel__arrow.el-carousel__arrow--right,
.recommended-services .el-carousel__arrow.el-carousel__arrow--right {
  right: 140px !important;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right:hover,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--right:hover,
.new-shelf .el-carousel__arrow.el-carousel__arrow--right:hover,
.recommended-services .el-carousel__arrow.el-carousel__arrow--right:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-card__body,
.popular-clinics .el-card__body,
.new-shelf .el-card__body,
.recommended-services .el-card__body {
  padding: 0;
}
</style>