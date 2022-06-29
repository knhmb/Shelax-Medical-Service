<template>
  <section class="wishlist-bookmark">
    <base-member-card :invisible="true">
      <h3>{{ $t("my_wishlist") }}</h3>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane :label="$t('services')" name="first">
          <first-tab></first-tab>
        </el-tab-pane>
        <el-tab-pane :label="$t('products')" name="second">
          <second-tab></second-tab>
        </el-tab-pane>
      </el-tabs>
    </base-member-card>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import FirstTab from "../components/wishlist/FirstTab.vue";
import SecondTab from "../components/wishlist/SecondTab.vue";

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
        this.$store.dispatch("profile/getWishlist");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getWishlist");
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
.member-profile .wishlist-bookmark h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.member-profile .wishlist-bookmark .el-tabs__item {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 20px; */
  letter-spacing: 0.1px;
  color: #8d8d8d;
}

.member-profile .wishlist-bookmark .el-tabs__active-bar {
  background-color: #7690da;
}

.member-profile .wishlist-bookmark .el-tabs__item.is-active {
  color: #7690da;
}
</style>
