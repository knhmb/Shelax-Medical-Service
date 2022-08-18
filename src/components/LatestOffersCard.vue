<template>
  <el-card class="box-card">
    <img :src="image" alt="" />
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
      <small class="discount">HK${{ price }}</small>
      <p class="latest-offers-price">HK${{ discount }}</p>
      <!-- <small class="discount">HK${{ discount }}</small>
      <p class="latest-offers-price">HK${{ price }}</p> -->
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
    "image",
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
.recommended-services .box-card,
.theme-x .box-card .theme-8 .box-card {
  border-radius: 12px !important;
  height: 100% !important;
  object-fit: contain;
  width: 100%;
  /* min-width: 400px; */
}

.latest-offers .box-card img,
.popular-clinics .box-card img,
.new-shelf .box-card img,
.theme-8 .box-card img,
.theme-x .box-card img,
.recommended-services .box-card img {
  width: 100%;
  height: 10rem;
  /* height: 11rem; */
  object-fit: cover;
}

.latest-offers p,
.popular-clinics p,
.new-shelf p,
.theme-8 p,
.theme-x p,
.recommended-services p {
  margin: 0;
}

.latest-offers .content,
.popular-clinics .content,
.new-shelf .content,
.theme-8 .content,
.theme-x .content,
.recommended-services .content {
  padding: 0.5rem 1rem;
  text-align: start;
}

.latest-offers .latest-offers-img-text,
.popular-clinics .latest-offers-img-text,
.new-shelf .latest-offers-img-text,
.theme-8 .latest-offers-img-text,
.theme-x .latest-offers-img-text,
.recommended-services .latest-offers-img-text {
  font-size: 12px;
  color: #8d8d8d;
  margin-bottom: 0.1rem;
}

.latest-offers .latest-offers-desc,
.popular-clinics .latest-offers-desc,
.new-shelf .latest-offers-desc,
.theme-8 .latest-offers-desc,
.theme-x .latest-offers-desc,
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
.theme-8 .el-rate .el-rate__text,
.theme-x .el-rate .el-rate__text,
.recommended-services .el-rate .el-rate__text {
  font-size: 10px !important;
  color: #7e7e7e !important;
}

.latest-offers .el-rate,
.popular-clinics .el-rate,
.new-shelf .el-rate,
.theme-8 .el-rate,
.theme-x .el-rate,
.recommended-services .el-rate {
  margin-bottom: 2rem;
}

.latest-offers .discount,
.popular-clinics .discount,
.new-shelf .discount,
.theme-8 .discount,
.theme-x .discount,
.recommended-services .discount {
  text-decoration: line-through;
  color: #8d8d8d;
  font-size: 12px;
}

.latest-offers .latest-offers-price,
.popular-clinics .latest-offers-price,
.new-shelf .latest-offers-price,
.theme-8 .latest-offers-price,
.theme-x .latest-offers-price,
.recommended-services .latest-offers-price {
  font-size: 16px;
  font-weight: bold;
  /* color: #7a3d87; */
}

.latest-offers .latest-offers-price small,
.popular-clinics .latest-offers-price small,
.new-shelf .latest-offers-price small,
.theme-8 .latest-offers-price small,
.theme-x .latest-offers-price small,
.recommended-services small {
  font-size: 12px;
  color: #7e7e7e;
}

.latest-offers .el-carousel__arrow,
.popular-clinics .el-carousel__arrow,
.new-shelf .el-carousel__arrow,
.theme-8 .el-carousel__arrow,
.theme-x .el-carousel__arrow,
.recommended-services .el-carousel__arrow {
  background-color: #fff !important;
  color: black !important;
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--left,
.new-shelf .el-carousel__arrow.el-carousel__arrow--left,
.theme-8 .el-carousel__arrow.el-carousel__arrow--left,
.theme-x .el-carousel__arrow.el-carousel__arrow--left,
.recommended-services .el-carousel__arrow.el-carousel__arrow--left {
  /* left: 140px !important; */
  left: 10% !important;

  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--left:hover,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--left:hover,
.new-shelf .el-carousel__arrow.el-carousel__arrow--left:hover,
.theme-8 .el-carousel__arrow.el-carousel__arrow--left:hover,
.theme-x .el-carousel__arrow.el-carousel__arrow--left:hover,
.recommended-services .el-carousel__arrow.el-carousel__arrow--left:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--right,
.new-shelf .el-carousel__arrow.el-carousel__arrow--right,
.theme-8 .el-carousel__arrow.el-carousel__arrow--right,
.theme-x .el-carousel__arrow.el-carousel__arrow--right,
.recommended-services .el-carousel__arrow.el-carousel__arrow--right {
  right: 10% !important;
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.33);
}

.latest-offers .el-carousel__arrow.el-carousel__arrow--right:hover,
.popular-clinics .el-carousel__arrow.el-carousel__arrow--right:hover,
.new-shelf .el-carousel__arrow.el-carousel__arrow--right:hover,
.theme-8 .el-carousel__arrow.el-carousel__arrow--right:hover,
.theme-x .el-carousel__arrow.el-carousel__arrow--right:hover,
.recommended-services .el-carousel__arrow.el-carousel__arrow--right:hover {
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.898);
}

.latest-offers .el-card__body,
.popular-clinics .el-card__body,
.new-shelf .el-card__body,
.theme-8 .el-card__body,
.theme-x .el-card__body,
.recommended-services .el-card__body {
  padding: 0;
}

/* MEDIA QUERIES */

@media screen and (max-width: 1024px) {
  .latest-offers .latest-offers-desc,
  .popular-clinics .latest-offers-desc,
  .new-shelf .latest-offers-desc,
  .theme-8 .latest-offers-desc,
  .theme-x .latest-offers-desc,
  .recommended-services .latest-offers-desc {
    font-size: 10px;
  }

  .latest-offers .el-rate .el-icon.el-rate__icon,
  .popular-clinics .el-rate .el-icon.el-rate__icon,
  .new-shelf .el-rate .el-icon.el-rate__icon,
  .theme-8 .el-rate .el-icon.el-rate__icon,
  .theme-x .el-rate .el-icon.el-rate__icon,
  .recommended-services .el-rate .el-icon.el-rate__icon {
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .latest-offers .el-carousel__arrow.el-carousel__arrow--right,
  .popular-clinics .el-carousel__arrow.el-carousel__arrow--right,
  .new-shelf .el-carousel__arrow.el-carousel__arrow--right,
  .theme-8 .el-carousel__arrow.el-carousel__arrow--right,
  .theme-x .el-carousel__arrow.el-carousel__arrow--right,
  .recommended-services .el-carousel__arrow.el-carousel__arrow--right {
    right: 1% !important;
  }

  .latest-offers .el-carousel__arrow.el-carousel__arrow--left,
  .popular-clinics .el-carousel__arrow.el-carousel__arrow--left,
  .new-shelf .el-carousel__arrow.el-carousel__arrow--left,
  .theme-8 .el-carousel__arrow.el-carousel__arrow--left,
  .theme-x .el-carousel__arrow.el-carousel__arrow--left,
  .recommended-services .el-carousel__arrow.el-carousel__arrow--left {
    left: 1% !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .latest-offers .el-carousel__arrow.el-carousel__arrow--right,
  .popular-clinics .el-carousel__arrow.el-carousel__arrow--right,
  .new-shelf .el-carousel__arrow.el-carousel__arrow--right,
  .theme-8 .el-carousel__arrow.el-carousel__arrow--right,
  .theme-x .el-carousel__arrow.el-carousel__arrow--right,
  .recommended-services .el-carousel__arrow.el-carousel__arrow--right {
    right: 1% !important;
  }

  .latest-offers .el-carousel__arrow.el-carousel__arrow--left,
  .popular-clinics .el-carousel__arrow.el-carousel__arrow--left,
  .new-shelf .el-carousel__arrow.el-carousel__arrow--left,
  .theme-8 .el-carousel__arrow.el-carousel__arrow--left,
  .theme-x .el-carousel__arrow.el-carousel__arrow--left,
  .recommended-services .el-carousel__arrow.el-carousel__arrow--left {
    left: 1% !important;
  }
}
</style>