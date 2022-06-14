<template>
  <section class="apply-shelax-points">
    <h3>{{ $t("use_shelax_points") }} Shelax Points</h3>
    <span>you have</span>
    <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
    <p class="value">171 Shelax Points</p>
  </section>
</template>

<style scoped>
.apply-shelax-points {
  margin-top: 2rem;
}

.apply-shelax-points h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;
}

.apply-shelax-points h3::before {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, #7690da 0%, rgba(118, 144, 218, 0) 100%);
  height: 40px;
  z-index: -1;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 70%;
}

.apply-shelax-points p.value {
  color: #feb431;
  font-size: 14px;
  display: inline-block;
}

.apply-shelax-points img {
  width: 1.3rem;
  vertical-align: middle;
  margin: 0 0.5rem;
}
</style>