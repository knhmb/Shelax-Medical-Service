<template>
  <div class="promo-code">
    <h3>{{ $t("coupon_code") }}</h3>
    <el-row :gutter="10">
      <el-col :sm="24" :md="7">
        <el-input
          v-model="couponCode"
          :placeholder="$t('enter_coupon_code')"
        ></el-input>
      </el-col>
      <el-col :sm="24" :md="5">
        <el-button @click="applyCoupon" :disabled="!couponCode">{{
          $t("add_promo_code")
        }}</el-button>
      </el-col>
    </el-row>
    <shelax-points @memberPointsApplied="memberPointsApplied"></shelax-points>
    <el-row>
      <el-col :sm="24" :md="16">
        <p>{{ $t("note_shoppingcart") }}</p>
      </el-col>
      <el-col :sm="24" :md="8">
        <el-button @click="checkOut" type="primary">{{
          $t("payment")
        }}</el-button>
        <!-- <el-button @click="payment" type="primary">{{
          $t("payment")
        }}</el-button> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import ShelaxPoints from "../shopping-cart-2/ShelaxPoints.vue";

export default {
  components: {
    ShelaxPoints,
  },
  props: ["orderData", "singleOrderInformation", "specialRequest"],
  data() {
    return {
      couponCode: "",
      isCouponApplied: false,
      isMemberPointsApplied: false,
    };
  },
  computed: {
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    serviceUsers() {
      return this.$store.getters["profile/serviceUsers"];
    },
    couponDetails() {
      return this.$store.getters["order/couponDetails"];
    },
    memberPointsDetails() {
      return this.$store.getters["order/memberPointsDetails"];
    },
    shoppingCartItems() {
      return this.$store.getters["shoppingCart/shoppingCartItems"];
    },
  },
  methods: {
    // applyCoupon() {
    //   const items = [];
    //   this.orderItem.orderingItems.filter((order) => {
    //     items.push({
    //       id: order.itemId,
    //       price: order.price * order.quantity,
    //     });
    //   });
    //   const data = {
    //     couponCode: this.couponCode,
    //     totalPrice: this.orderItem.totalPrice,
    //     currentCouponDiscount: 0,
    //     currentTotalDiscount: 0,
    //     items: items,
    //   };
    //   console.log(data);
    //   console.log(this.orderItem);
    //   this.$store
    //     .dispatch("order/applyCoupon", data)
    //     .then(() => {
    //       this.isCouponApplied = true;
    //     })
    //     .catch((err) => {
    //       ElNotification({
    //         title: "Error",
    //         message: this.$t(err.response.data.message),
    //         type: "error",
    //       });
    //     });
    // },
    applyCoupon() {
      const data = {
        orderId: this.orderItem.orderId,
        couponCode: this.couponCode,
        applyMemberPoints: false,
      };
      console.log(data);
      this.$store
        .dispatch("order/applyCoupon", data)
        .then(() => {
          this.isCouponApplied = true;
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
    memberPointsApplied(value) {
      this.isMemberPointsApplied = value;
    },
    payment() {
      console.log(this.shoppingCartItems);
      let orderItems = [];
      const orderItemPartcp = [];
      this.serviceUsers.filter((user) => {
        orderItemPartcp.push({
          serviceUserId: user.id,
          salutation: user.salutation,
          lastName: user.lastName,
          givenName: user.givenName,
          phoneCode: user.phoneCode,
          phoneNo: user.phoneNo,
          email: user.email,
          placeOfResidence: user.placeOfResidence,
          // specialRequest: this.singleOrderInformation.find(
          //   (order) => order.id === user.id
          // ).specialRequest,
        });
      });
      console.log(this.orderData);
      this.orderItem.orderingItems.forEach((item) => {
        console.log(item);
        // orderItems.filter((order) => order.orderItemId !== item.orderItemId);
        if (item.shoppingCartItemId) {
          orderItems.push({
            orderItemId: item.orderItemId,
            orderItemPartcp: orderItemPartcp,
            specialRequest: this.specialRequest,
            // shoppingCartItemId: item.shoppingCartItemId,
          });
        } else {
          orderItems.push({
            orderItemId: item.orderItemId,
            orderItemPartcp: orderItemPartcp,
            specialRequest: this.specialRequest,
          });
        }
      });
      console.log(orderItems);
      const customerInfo = {
        salutation: this.orderData.title,
        lastName: this.orderData.lastName,
        givenName: this.orderData.firstName,
        phoneCode: this.orderData.areaCode,
        phoneNo: this.orderData.phoneNumber,
        placeOfResidence: this.orderData.cityOfResidence,
        region: this.orderData.region,
        district: this.orderData.district,
        address: this.orderData.address,
        isUpdatedProfile: this.orderData.updateProfile,
      };
      // const finalPrice = this.isMemberPointsApplied
      //   ? this.couponDetails.amountToBePaid
      //   : this.isCouponApplied
      //   ? this.couponDetails.amountToBePaid
      //   : this.orderItem.totalPrice;
      const data = {
        orderId: this.orderItem.orderId,
        customerInfo: customerInfo,
        orderItems: orderItems,
        // couponId: this.isCouponApplied ? this.couponDetails.couponId : null,
        // totalPrice: this.orderItem.totalPrice,
        // totalPrice: this.shoppingCartItems.totalPrice,
        // discount: this.isMemberPointsApplied
        //   ? this.couponDetails.newTotalDiscount
        //   : this.isCouponApplied
        //   ? this.couponDetails.newTotalDiscount
        //   : 0,
        // finalPrice: finalPrice === null ? 0 : finalPrice,
        // memberPointsRewarded: this.orderItem.totalPointsRewarded,
        memberPointsUsed: this.isMemberPointsApplied
          ? this.memberPointsDetails.memberPointsUsed
          : null,
        memberPointsToPriceAmount: this.isMemberPointsApplied
          ? this.memberPointsDetails.memberPointsToPriceAmount
          : null,
        transactionRefNo: this.$route.query.session,
        paymentMethod: "pymtmethod-card",
        // paymentMethod: [
        //   {
        //     transactionRefNo: this.$route.query.session,
        //     paymentMethod: "pymtmethod-card",
        //     // paymentMethod: "pymtmethod-visa",
        //     amount: finalPrice === null ? 0 : finalPrice,
        //   },
        // ],
      };
      console.log("before data", data);
      Object.keys(data).forEach((key) => {
        if (data[key] === null) {
          delete data[key];
        }
      });

      console.log("after data", data);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("order/confirmOrder", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Order Confirmed",
              type: "success",
            });
            this.$store.commit("order/DISABLE_PROMO", false);
            this.$router.replace("/");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("order/confirmOrder", data).then(() => {
                ElNotification({
                  title: "Success",
                  message: "Order Confirmed",
                  type: "success",
                });
                this.$store.commit("order/DISABLE_PROMO", false);

                this.$router.replace("/");
              });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
              this.$store.dispatch("auth/logout");
            });
        });
    },
    checkOut() {
      // const finalPrice = this.isMemberPointsApplied
      //   ? this.couponDetails.amountToBePaid
      //   : this.isCouponApplied
      //   ? this.couponDetails.amountToBePaid
      //   : this.orderItem.totalPrice;

      // const data = {
      //   orderId: this.orderItem.orderId,
      //   orderNo: this.orderItem.orderNo,
      //   finalPrice: finalPrice,
      // };
      const arr = [];
      this.orderItem.orderingItems.forEach((item) => {
        arr.push({ orderItemId: item.orderItemId });
      });
      const data = {
        orderId: this.orderItem.orderId,
        orderNo: this.orderItem.orderNo,
        orderItems: arr,
      };
      console.log(data);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("order/checkOut", data);
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("order/checkOut", data);
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
              this.$store.dispatch("auth/logout");
            });
        });
    },
  },
  mounted() {
    if (this.$route.query.success === "true") {
      this.payment();
    }
  },
  created() {
    console.log(this.orderItem);
    console.log(this.orderData);
    this.$route.params;
    console.log(this.$route);
    console.log(this.$route.query);
  },
};
</script>

<style scoped>
.promo-code {
  margin-top: 2rem;
}

.promo-code h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;
}

.promo-code h3::before {
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

.promo-code .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #2d99a0;
  border-color: #2d99a0;
  padding: 0;
  width: 100%;
}

.promo-code .el-row:last-of-type {
  margin-top: 3.5rem;
  align-items: center;
}

.promo-code p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #000000;
}

.promo-code .el-button--primary {
  background: #7690da;
  border-radius: 4px;
  border-color: #7690da;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .promo-code .el-button {
    margin-top: 1rem;
  }
}
</style>