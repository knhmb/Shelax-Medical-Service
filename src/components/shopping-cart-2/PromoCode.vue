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
        <el-button @click="applyCoupon" :disabled="!couponCode"
          >添加優惠碼</el-button
        >
      </el-col>
    </el-row>
    <shelax-points></shelax-points>
    <el-row>
      <el-col :sm="24" :md="16">
        <p>點擊按鈕後，你的訂單將會自動提交。請在下一頁選擇付款方式</p>
      </el-col>
      <el-col :sm="24" :md="8">
        <el-button @click="payment" type="primary">付款</el-button>
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
  props: ["orderData", "singleOrderInformation"],
  data() {
    return {
      couponCode: "",
    };
  },
  computed: {
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    serviceUsers() {
      return this.$store.getters["profile/serviceUsers"];
    },
  },
  methods: {
    applyCoupon() {
      const items = [];
      this.orderItem.orderingItems.filter((order) => {
        items.push({
          id: order.itemId,
          price: order.price * order.quantity,
        });
      });
      const data = {
        couponCode: this.couponCode,
        totalPrice: this.orderItem.totalPrice,
        currentCouponDiscount: 0,
        currentTotalDiscount: 0,
        items: items,
      };
      console.log(data);
      console.log(this.orderItem);
      this.$store
        .dispatch("order/applyCoupon", data)
        .then(() => {})
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
    payment() {
      // console.log(this.orderData);
      // console.log(this.orderItem);
      // console.log(this.serviceUsers);
      console.log(this.singleOrderInformation);
      const orderItems = [];
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
          specialRequest: this.singleOrderInformation.find(
            (order) => order.id === user.id
          ).specialRequest,
        });
      });
      this.orderItem.orderingItems.forEach((item) => {
        orderItems.push({
          orderItemId: item.orderItemId,
          orderItemPartcp: orderItemPartcp,
        });
      });
      console.log(orderItems);
      // const customerInfo = {
      //   salutation: this.orderData.title,
      //   lastName: this.orderData.lastName,
      //   givenName: this.orderData.firstName,
      //   phoneCode: this.orderData.areaCode,
      //   phoneNo: this.orderData.phoneNumber,
      //   placeOfResidence: this.orderData.cityOfResidence,
      //   region: this.orderData.region,
      //   district: this.orderData.district,
      //   address: this.orderData.address,
      //   isUpdatedProfile: this.orderData.updateProfile,
      // };
      // const data = {
      //   orderId: this.orderItem.orderId,
      //   customerInfo: customerInfo,
      //   orderItems:
      // };
      // console.log(data);
    },
  },
  created() {
    console.log(this.orderItem);
    console.log(this.orderData);
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