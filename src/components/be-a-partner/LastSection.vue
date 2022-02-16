<template>
  <div class="last-section">
    <h2>商戶合作</h2>
    <p>你發位王珠借立乍村文遠前把石象</p>
    <el-button @click="$router.push('/vendor-registration')"
      >立即申請成為合作伙伴</el-button
    >
  </div>
</template>

<style scoped>
.last-section {
  background-image: url(../../assets/banner-partner-backdrop.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4rem 0;
  text-align: center;
}

.last-section h2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.last-section p {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 2.5rem;
}

.last-section .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.4px;
  color: #ffffff;
  background: linear-gradient(
      269.19deg,
      rgba(255, 46, 0, 0.4) 0%,
      rgba(255, 46, 0, 0) 100%
    ),
    #ff8a00;
  border-radius: 100px;
  border-color: #ff8a00;
}
</style>