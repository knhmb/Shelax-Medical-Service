<template>
  <div class="left-section-cart">
    <div class="header">
      <h2>填寫資料</h2>
    </div>
    <div class="body">
      <p class="body-title">預訂資料</p>
      <Form />
      <order-information></order-information>
      <promo-code></promo-code>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import OrderInformation from "./OrderInformation.vue";
import PromoCode from "./PromoCode.vue";

export default {
  components: {
    Form,
    OrderInformation,
    PromoCode,
  },
};
</script>

<style scoped>
.shopping-cart-step-2 .left-section-cart {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

.shopping-cart-step-2 .left-section-cart .header {
  border-radius: 8px 8px 0 0;
  box-shadow: none;
}

.shopping-cart-step-2 .left-section-cart .header h2 {
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #4e68b2;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
  padding: 8px 40px 8px 24px;
}

.shopping-cart-step-2 .left-section-cart .body {
  margin: 1rem;
}

.shopping-cart-step-2 .left-section-cart {
  position: relative;
}

.shopping-cart-step-2 .left-section-cart::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  bottom: 5rem;
}

.shopping-cart-step-2 .left-section-cart .body .body-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #fff;
  position: relative;
  z-index: 1;
  margin: 1.5rem 0;
}

.shopping-cart-step-2 .left-section-cart .body .body-title::before {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, #7690da 0%, rgba(118, 144, 218, 0) 100%);
  /* width: 480px; */
  height: 40px;
  z-index: -1;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 70%;
}

@media screen and (max-width: 991px) {
  .shopping-cart-step-2 .left-section-cart::after {
    bottom: 7rem;
  }
}
</style>