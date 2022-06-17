<template>
  <section class="member-points">
    <base-member-card :invisible="true">
      <h3>Shelax Points</h3>
      <p>
        {{ $t("current_valid_points") }}:
        <img src="../assets/Group-110.png" alt="" />
        <span>{{ memberPoints }}</span>
      </p>
    </base-member-card>
    <how-to-use></how-to-use>
    <Table />
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import HowToUse from "../components/member-points/HowToUse.vue";
import Table from "../components/member-points/Table.vue";

export default {
  components: {
    HowToUse,
    Table,
  },
  computed: {
    memberPoints() {
      return this.$store.getters["profile/memberPoints"];
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getMemberPoints");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getMemberPoints");
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

    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getMemberPointsHistory");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getMemberPointsHistory");
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

<style scoped>
.member-points h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #7690da;
  margin-bottom: 1rem;
}

.member-points p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  display: flex;
  align-items: center;
}

.member-points img {
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
}

.member-points span {
  color: #feb431;
}
</style>