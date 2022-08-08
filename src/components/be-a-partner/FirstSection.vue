<template>
  <div class="first-section">
    <base-content-container>
      <div v-html="beAPartnerContent.content"></div>
      <!-- <h2>{{ $t("merchant_partnership") }}</h2>
      <h4>{{ $t("about_page_text") }}</h4>
      <p>
        {{ $t("about_page_description_one") }}
        {{ $t("about_page_description_two") }}
      </p>
      <router-link v-slot="{ navigate }" to="/vendor-registration">
        <el-button @click="navigate">{{
          $t("become_a_partner_button")
        }}</el-button>
      </router-link> -->
    </base-content-container>
  </div>
</template>

<script>
export default {
  computed: {
    beAPartnerContent() {
      return this.$store.getters["dashboard/beAPartnerContent"];
    },
  },
};
</script>

<style scoped>
.first-section {
  padding: 4rem 0;
  text-align: center;
}

.first-section h2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #4e68b2;
  margin-bottom: 1.5rem;
}

.first-section h4 {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #262626;
  margin-bottom: 2.5rem;
}

.first-section p {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #525252;
  margin-bottom: 2.5rem;
}

.first-section .el-button {
  background: linear-gradient(
      269.19deg,
      rgba(143, 0, 255, 0.4) 0%,
      rgba(143, 0, 255, 0) 100%
    ),
    #7690da;
  border-radius: 100px;
  padding: 16px 40px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.4px;
  color: #ffffff;
}
</style>