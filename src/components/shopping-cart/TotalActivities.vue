<template>
  <div class="total-activities">
    <div class="top">
      <p>{{ $t("total") }}:</p>
      <p class="price">HKD {{ shoppingCartItems.totalPrice }}</p>
      <el-button @click="checkOut">{{ $t("check_out_button") }}</el-button>
    </div>
    <div class="bottom">
      <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
      <span>{{ $t("you_can_earn") }}</span>
      <span class="points"
        >{{ shoppingCartItems.totalPoints }} Shelax Points</span
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  computed: {
    shoppingCartItems() {
      return this.$store.getters["shoppingCart/shoppingCartItems"];
    },
  },
  methods: {
    checkOut() {
      const arr = [];
      console.log(this.shoppingCartItems);
      this.shoppingCartItems.validServiceItems.forEach((item) => {
        if (item.selected) {
          arr.push({
            shoppingCartItemId: item.shoppingCartItemId,
            itemId: item.reservedItemId,
            // itemName: item.itemName,
            // isService: item.isService,
            // isProduct: item.isProduct,
            quantity: item.quantity,
            // price: item.price,
            bookingDate: moment(item.reservedDate).format("YYYY-MM-DD"),
            bookingTime: item.reservedTime,
            timeslotId: item.timeslotId,
          });
        }
      });
      this.shoppingCartItems.validProductItems.forEach((item) => {
        if (item.selected) {
          arr.push({
            shoppingCartItemId: item.shoppingCartItemId,
            itemId: item.reservedItemId,
            // itemName: item.itemName,
            // isService: item.isService,
            // isProduct: item.isProduct,
            quantity: item.quantity,
            // price: item.price,
          });
        }
      });
      console.log(arr);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store
            .dispatch("order/createOrder", {
              orderingItems: arr,
              // totalPrice: this.shoppingCartItems.totalPrice,
            })
            .then(() => {
              this.$router.push("/shopping-cart-step-2");
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: this.$t(err.response.data.message),
                type: "error",
              });
            });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store
                .dispatch("order/createOrder", {
                  orderingItems: arr,
                  // totalPrice: this.shoppingCartItems.totalPrice,
                })
                .then(() => {
                  this.$router.push("/shopping-cart-step-2");
                })
                .catch((err) => {
                  ElNotification({
                    title: "Error",
                    message: this.$t(err.response.data.message),
                    type: "error",
                  });
                });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: this.$t(err.response.data.message),
                type: "error",
              });
              // this.$router.replace("/");
              this.$store.dispatch("auth/logout");
            });
        });
    },
  },
};
</script>

<style scoped>
.total-activities {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
}

.total-activities .top p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
}

.total-activities .top p.price {
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #4e68b2;
  margin: 1rem 0;
}

.total-activities .top .el-button {
  background: #7690da;
  border-radius: 4px;
  padding: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
  width: 100%;
}

.total-activities .top {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.total-activities .bottom {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

.total-activities .bottom img {
  width: 17px;
}

.total-activities .bottom span {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin-left: 0.7rem;
}

.total-activities .bottom span.points {
  color: #feb431;
  font-weight: bold;
}
</style>