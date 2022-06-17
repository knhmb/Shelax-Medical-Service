<template>
  <section class="booking">
    <base-member-card :invisible="true">
      <h3>預約記錄</h3>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane :label="$t('service_type')" name="first">
          <first-tab></first-tab>
        </el-tab-pane>
        <el-tab-pane :label="$t('product_type')" name="second">
          <second-tab></second-tab>
        </el-tab-pane>
      </el-tabs>
    </base-member-card>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import FirstTab from "../components/booking/FirstTab.vue";
import SecondTab from "../components/booking/SecondTab.vue";

export default {
  components: {
    FirstTab,
    SecondTab,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getOrderHistory");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getOrderHistory");
          })
          .catch((err) => {
            ElNotification({
              title: "Error",
              message: this.$t(err.response.data.message),
              type: "error",
            });
            this.$store.dispatch("auth/logout");
          });
      });
  },
};
</script>

<style>
.member-profile .booking h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.member-profile .booking .el-tabs__item {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 20px; */
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.member-profile .booking .el-tabs__active-bar {
  background-color: #7690da;
}

.member-profile .booking .el-tabs__item.is-active {
  color: #7690da;
}
</style>