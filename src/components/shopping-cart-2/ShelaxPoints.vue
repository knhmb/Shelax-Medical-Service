<template>
  <section v-if="memberPoints <= 100" class="apply-shelax-points">
    <h3>{{ $t("use_shelax_points") }} Shelax Points</h3>
    <div class="shelax-points-section">
      <div class="content">
        <span>you have</span>
        <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
        <p class="value">{{ memberPoints }} Shelax Points</p>
      </div>
      <div>
        <el-checkbox
          @change="applyMemberPoints"
          v-model="isChecked"
          :label="$t('use_shelax_points') + ' Shelax Points'"
        ></el-checkbox>
        <p v-if="isChecked" class="remaining-points">
          {{
            $t("member_points_used", {
              memberPointsUsed: memberPointsDetails.memberPointsUsed,
            })
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    memberPoints() {
      return this.$store.getters["order/memberPoints"];
    },
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    couponDetails() {
      return this.$store.getters["order/couponDetails"];
    },
    memberPointsDetails() {
      return this.$store.getters["order/memberPointsDetails"];
    },
  },
  methods: {
    applyMemberPoints() {
      if (this.isChecked) {
        const data = {
          totalPrice: this.orderItem.totalPrice,
          currentTotalDiscount: this.couponDetails.newTotalDiscount,
        };
        console.log(data);
        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("order/applyMemberPoints", data);
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("order/applyMemberPoints", data);
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
      } else {
        const data = {
          totalPrice: this.orderItem.totalPrice,
          currentTotalDiscount: this.couponDetails.newTotalDiscount,
          memberPointsToPriceAmount:
            this.memberPointsDetails.memberPointsToPriceAmount,
        };
        console.log(data);
        console.log(this.memberPointsDetails);

        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("order/cancelMemberPoints", data);
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("order/cancelMemberPoints", data);
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
      }
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("order/getMemberPoints");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("order/getMemberPoints");
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
    console.log(this.orderItem);
    console.log(this.memberPointsDetails);
  },
};
</script>

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
.apply-shelax-points p.remaining-points {
  color: #111;
  font-size: 14px;
}

.apply-shelax-points span {
  color: #111;
  font-size: 14px;
  display: inline-block;
}

.apply-shelax-points img {
  width: 1.3rem;
  vertical-align: middle;
  margin: 0 0.5rem;
}

.apply-shelax-points .shelax-points-section {
  display: flex;
  align-items: baseline;
}

.apply-shelax-points .shelax-points-section .content {
  margin: 0;
  margin-right: 2rem;
}
</style>