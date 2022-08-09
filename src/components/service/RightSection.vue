<template>
  <section class="service-right-section">
    <div class="card">
      <div class="top-section">
        <el-row>
          <el-col>
            <span class="from">{{ $t("from") }}</span>
            <span class="price" v-if="singleItemDetail.itemType === 'service'"
              >HKD{{ singleItemDetail.discountedPrice }}</span
            >
            <span
              :class="{
                price: singleItemDetail.itemType === 'product',
                discount: singleItemDetail.itemType === 'service',
              }"
              >HK$ {{ singleItemDetail.originalPrice }}</span
            >
          </el-col>
          <el-col>
            <span class="rate">{{
              singleItemDetail.averageRating
                ? singleItemDetail.averageRating.slice(0, 3)
                : "0"
            }}</span>
            <el-rate
              :model-value="singleItemDetail.averageRating"
              disabled
              show-score
              :colors="colors"
              text-color="#8D8D8D"
              :score-template="`(${singleItemDetail.commentsCount})`"
            />
          </el-col>
          <el-col>
            <el-button @click="bookNow">{{ $t("book_button") }}</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="bottom-section">
        <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
        <!-- <span>可累積 Shelax Points</span> -->
        <span>{{
          singleItemDetail.basicInfo.pointsRewarded
            ? $t("shelax_points_rewarded")
            : ""
        }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
    };
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
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
          bookingDate: moment(this.singleItemDetail.defaultBookingDate).format(
            "YYYYMMDD"
          ),
          bookingTime: this.singleItemDetail.defaultBookingTime.substr(
            0,
            this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
          ),
          timeslotId: this.singleItemDetail.selectedTimeslotId,
          quantity: 1,
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
          quantity: 1,
          price: this.singleItemDetail.discountedPrice + ".00",
        };
      }
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store
            .dispatch("order/createOrder", {
              orderingItems: [data],
              totalPrice: this.singleItemDetail.discountedPrice + ".00",
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
                  totalPrice: this.singleItemDetail.discountedPrice + ".00",
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
  created() {
    console.log(this.singleItemDetail);
  },
};
</script>

<style>
.service-right-section .card {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.service-right-section .card .top-section {
  position: relative;
}

.service-right-section .card .top-section .el-row .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.service-right-section .card .top-section {
  padding: 1rem;
}

.service-right-section .card .top-section span.from {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #6f6f6f;
}

.service-right-section .card .top-section span.price {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
  margin: 0 0.5rem;
}

.service-right-section .card .top-section span.discount {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration-line: line-through;
  color: #8d8d8d;
}

.service-right-section .card .top-section .el-rate {
  display: inline;
}

.service-right-section
  .card
  .top-section
  .el-rate
  .el-rate__item
  .el-rate__icon {
  margin: 0;
}

.service-right-section .card .top-section span.rate {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #7690da;
  margin-right: 0.3rem;
}

.service-right-section .card .top-section .el-button {
  background: #7690da;
  border-radius: 4px;
  width: 100%;

  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: 1rem;
}

.service-right-section .card .top-section::after {
  content: "";
  background: #e0e0e0;
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: 0.5rem;
}

.service-right-section .card .bottom-section {
  padding: 0 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.service-right-section .card .bottom-section img {
  width: 15px;
  margin-right: 0.3rem;
}

.service-right-section .card .bottom-section span {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
}
</style>