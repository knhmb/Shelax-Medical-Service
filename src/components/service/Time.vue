<template>
  <div class="time-section" v-if="singleItemDetail.itemType === 'service'">
    <p>選擇時間</p>
    <div class="am">
      <p class="divider"><span>上午</span></p>
      <el-row :gutter="10">
        <!-- <template> -->
        <el-col
          v-for="time in singleItemDetail.defaultDateTimeslots.slice(0, 6)"
          :key="time.id"
          :sm="24"
          :md="6"
          :lg="6"
        >
          <base-button
            :class="{
              'is-active':
                isActive ===
                time.sessionStart.slice(0, time.sessionStart.lastIndexOf(':')),
            }"
            @click="setTime(time)"
            >{{
              `${time.sessionStart.slice(
                0,
                time.sessionStart.lastIndexOf(":")
              )}`
            }}</base-button
          >
        </el-col>
      </el-row>
    </div>

    <div class="pm">
      <p class="divider"><span>下午</span></p>
      <el-row :gutter="10">
        <el-col
          v-for="time in singleItemDetail.defaultDateTimeslots.slice(6)"
          :key="time.id"
          :sm="24"
          :md="6"
          :lg="6"
        >
          <base-button
            :class="{
              'is-active':
                isActive ===
                time.sessionStart.slice(0, time.sessionStart.lastIndexOf(':')),
            }"
            @click="setTime(time)"
            >{{
              `${time.sessionStart.slice(
                0,
                time.sessionStart.lastIndexOf(":")
              )}`
            }}</base-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="time-footer" v-if="singleItemDetail.itemType === 'product'">
    <el-row>
      <el-col>
        <p class="quantity">數量</p>
      </el-col>
      <el-col>
        <div class="quantity-range">
          <el-row>
            <el-col :span="12">
              <p>{{ singleItemDetail.basicInfo.itemName }}</p>
            </el-col>
            <el-col class="quantity-input" :span="12">
              <el-input-number
                size="small"
                @change="updatePrice"
                v-model="num"
                :min="1"
              />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="btns">
        <el-button type="primary" @click="addToShoppingCart">{{
          $t("add_to_shopping_cart")
        }}</el-button>
        <el-button @click="bookNow" type="success">{{
          $t("book_button")
        }}</el-button>
      </el-col>
    </el-row>
  </div>
  <div class="time-footer" v-if="singleItemDetail.itemType === 'service'">
    <el-row>
      <el-col>
        <p class="quantity">{{ $t("quantity") }}</p>
      </el-col>
      <el-col>
        <div class="quantity-range">
          <el-row>
            <el-col :span="12">
              <p>{{ $t("number_of_people") }}</p>
            </el-col>
            <el-col class="quantity-input" :span="12">
              <el-input-number
                size="small"
                @change="updateIndividuals"
                v-model="noOfPeople"
                :min="1"
              />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="btns">
        <el-button
          @click="addToShoppingCart"
          type="primary"
          :disabled="isDisabled"
          >{{ $t("add_to_shopping_cart") }}</el-button
        >
        <el-button @click="bookNow" type="success" :disabled="isDisabled">{{
          $t("book_button")
        }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["dateData", "selectedDate"],
  data() {
    return {
      num: 1,
      isActive: "",
      noOfPeople: 1,
      isDisabled: false,
      timeslotId: null,
    };
  },
  watch: {
    noOfPeople() {
      this.$emit("noOfPeople", this.noOfPeople);
    },
    singleItemDetail: {
      deep: true,
      handler() {
        if (this.singleItemDetail.itemType === "service") {
          this.isActive = this.singleItemDetail.defaultBookingTime.slice(
            0,
            this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
          );
        }
      },
    },
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
    updatePrice() {
      const data = {
        itemId: this.singleItemDetail.basicInfo.id,
        quantity: this.num,
      };

      this.$store.dispatch("search/updatePrice", data);
      console.log(this.num);
      console.log(this.singleItemDetail.basicInfo.id);
    },
    setTime(time) {
      console.log(time);
      this.timeslotId = time.id;
      this.isActive = time.sessionStart.slice(
        0,
        time.sessionStart.lastIndexOf(":")
      );
      const data = {
        timeslotId: time.id,
        quantity: this.noOfPeople,
      };
      console.log(data);
      this.$store.dispatch("search/getTime", data);
    },
    updateIndividuals() {
      const data = {
        itemId: this.singleItemDetail.basicInfo.id,
        dateFrom: this.dateData.dateFrom,
        dateTo: this.dateData.dateTo,
        quantity: this.noOfPeople,
      };

      console.log(data);
      this.$store
        .dispatch("search/getDates", data)
        .then(() => {
          this.isDisabled = false;
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
          this.isDisabled = true;
        });
    },
    addToShoppingCart() {
      if (this.singleItemDetail.itemType === "service") {
        const data = {
          itemId: this.singleItemDetail.basicInfo.id,
          reservedDate: this.selectedDate,
          reservedTime: this.isActive.replace(":", ""),
          timeslotId: this.timeslotId,
          quantity: this.noOfPeople,
          totalPrice: this.singleItemDetail.discountedPrice + ".00",
        };
        console.log(data);
        this.checkAccessToken(data);
      } else {
        const data = {
          itemId: this.singleItemDetail.basicInfo.id,
          quantity: this.num,
          totalPrice: this.singleItemDetail.originalPrice + ".00",
        };
        console.log(data);
        this.checkAccessToken(data);
      }
    },
    bookNow() {
      let data = {};
      if (this.singleItemDetail.itemType === "service") {
        data = {
          itemId: this.singleItemDetail.basicInfo.id,
          itemName: this.singleItemDetail.basicInfo.itemName,
          isService:
            this.singleItemDetail.itemType === "service" ? true : false,
          isProduct:
            this.singleItemDetail.itemType === "product" ? true : false,
          bookingDate: this.selectedDate,
          bookingTime: this.isActive,
          timeslotId: this.timeslotId,
          quantity: this.noOfPeople,
          price: this.singleItemDetail.discountedPrice + ".00",
        };
        console.log(data);
      } else if (this.singleItemDetail.itemType === "product") {
        data = {
          itemId: this.singleItemDetail.basicInfo.id,
          itemName: this.singleItemDetail.basicInfo.itemName,
          isService:
            this.singleItemDetail.itemType === "service" ? true : false,
          isProduct:
            this.singleItemDetail.itemType === "product" ? true : false,
          quantity: this.noOfPeople,
          price: this.singleItemDetail.discountedPrice + ".00",
        };
      }
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store
            .dispatch("order/createOrder", {
              orderingItems: [data],
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
                  orderingItems: [data],
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
    checkAccessToken(data) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.sendShoppingCartData(data);
        })
        .catch(() => {
          this.checkRefreshToken(data);
        });
    },
    checkRefreshToken(data) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.sendShoppingCartData(data);
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
    },
    sendShoppingCartData(data) {
      this.$store.dispatch("shoppingCart/addToShoppingCart", data).then(() => {
        ElNotification({
          title: "Success",
          message: this.$t("added_to_shopping_cart"),
          type: "success",
        });
      });
    },
  },
  created() {
    console.log(this.singleItemDetail);
    if (this.singleItemDetail.itemType === "service") {
      this.isActive = this.singleItemDetail.defaultBookingTime.slice(
        0,
        this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
      );
    }
    this.$emit("noOfPeople", this.noOfPeople);
    this.timeslotId = this.singleItemDetail.selectedTimeslotId;
  },
};
</script>

<style>
.time-section p {
  color: #525252;
}

.time-section .divider {
  width: 100%;
  /* text-align: center; */
  border-bottom: 1px solid #c6c6c6;
  line-height: 0.1em;
  /* margin: 15px 0 20px; */
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.time-section .divider span {
  background: #fff;
  /* padding: 0 10px; */
  padding-right: 5px;
  color: #c6c6c6;
  margin-top: 1rem;
}

.time-section {
  border-bottom: 0.8px solid #c6c6c6;
}

.time-section .pm {
  padding-bottom: 1.5rem;
}

.time-footer .el-row .btns {
  text-align: end;
}

.time-footer .el-row .el-button {
  padding: 12px 42px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.time-footer .el-row .el-button--primary {
  background-color: #2d99a0;
  border-color: #2d99a0;
}

.time-footer .el-row .el-button--success {
  background-color: #7690da;
  border-color: #7690da;
}

.time-footer p.quantity {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
  margin: 1rem 0;
}

.time-footer .quantity-range {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
}

.time-footer .quantity-range p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
}

.time-footer .quantity-range .el-row {
  align-items: center;
}

.time-footer .quantity-range .quantity-input {
  text-align: end;
}

.time-footer .quantity-input .el-input-number {
  width: 100%;
}

.time-footer .quantity-input .el-input-number__decrease,
.time-footer .quantity-input .el-input-number__increase,
.time-footer .quantity-input .el-input__inner {
  border: none;
}

.time-footer .quantity-input .el-input-number__decrease,
.time-footer .quantity-input .el-input-number__increase {
  background: #f4f4f4;
}

.time-footer .quantity-input .el-input__inner {
  font-weight: bold;
  font-size: 16px;
}

@media screen and (max-width: 414px) {
  .time-sectfooter .el-row .btns {
    text-align: center;
  }

  .time-footer .el-row .el-button {
    padding: 12px 20px;
    /* margin-bottom: 0.5rem; */
  }
}
</style>