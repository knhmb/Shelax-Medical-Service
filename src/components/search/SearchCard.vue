<template>
  <el-row>
    <el-col
      :sm="24"
      :lg="6"
      class="card-img"
      :style="{ 'background-image': 'url(' + image + ')' }"
    >
      <!-- <img src="../../assets/Rectangle-77.png" class="card-img" alt="" /> -->
    </el-col>
    <el-col :sm="24" :lg="12">
      <div class="card-content">
        <h4>{{ name }}</h4>
        <p>{{ earliestAppointment }} - {{ description }}</p>
        <el-rate
          :colors="colors"
          :model-value="rate"
          show-score
          :score-template="rateNo"
          :disabled-void-color="voidColor"
          disabled
          text-color="#8D8D8D"
        />
        <p class="earliest-appointment">{{ $t("earliest_booking") }}</p>
        <div class="appointment-time-date">
          <span>{{ date }}</span>
          <span>{{ time }}</span>
        </div>
      </div>
    </el-col>
    <el-col class="pricing" :sm="24" :lg="6">
      <div>
        <p>HKD{{ price }}</p>
        <h6>HKD{{ discountPrice }}</h6>
      </div>
      <el-button @click.stop="bookNow">{{ $t("book_button") }}</el-button>
      <!-- <el-button @click.stop="getItemDetail">{{ $t("book_button") }}</el-button> -->
    </el-col>
  </el-row>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  props: [
    "name",
    "description",
    "rate",
    "rateNo",
    "earliestAppointment",
    "time",
    "date",
    "discountPrice",
    "price",
    "image",
    "id",
    "searchDate",
    "searchTime",
    "dummy",
    "timeslotId",
    "itemType",
  ],
  data() {
    return {
      colors: ["#7690da", "#7690da", "#7690da"],
      voidColor: "#C6C6C6",
      finalRate: this.rate,
    };
  },
  computed: {
    dateSearchValue() {
      return this.$store.getters.date;
    },
    timeSearchValue() {
      return this.$store.getters.time;
    },
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
    // getItemDetail() {
    //   const data = {
    //     itemId: this.id,
    //     bookingDate: this.dateSearchValue
    //       ? moment(this.dateSearchValue).format("YYYYMMDD")
    //       : moment(new Date()).format("YYYYMMDD"),
    //     bookingTime: this.timeSearchValue
    //       ? this.timeSearchValue.replace(":", "")
    //       : "-",
    //   };
    //   console.log(data);
    //   this.$store.dispatch("search/getItemDetail", data).then(() => {
    //     this.$router.push("/service");
    //   });
    // },
    bookNow() {
      let data = {};
      if (this.itemType === "service") {
        data = {
          itemId: this.id,
          itemName: this.name,
          isService: this.itemType === "service" ? true : false,
          isProduct: this.itemType === "product" ? true : false,
          bookingDate: moment(this.date).format("YYYYMMDD"),
          bookingTime: this.time.substr(0, this.time.lastIndexOf(":")),
          timeslotId: this.timeslotId,
          quantity: 1,
          price: this.discountPrice + ".00",
        };
        console.log(data);
      } else if (this.itemType === "product") {
        data = {
          itemId: this.id,
          itemName: this.name,
          isService: this.itemType === "service" ? true : false,
          isProduct: this.itemType === "product" ? true : false,
          quantity: 1,
          price: this.discountPrice + ".00",
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
  },
};
</script>

<style>
.right-section .box-card .el-card__body {
  padding: 0 !important;
}

.right-section .box-card .card-img {
  /* width: 190px; */
  /* width: 100%;
  height: 100%;
  object-fit: contain; */
  /* background-image: url("../../assets/Rectangle-77.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: contain; */
  /* width: 180px; */
  /* height: 200px; */
}

.right-section .box-card .card-content {
  margin-left: 1rem;
  position: relative;
  /* border-right: 0.8px solid #e0e0e0;
  height: 138.22px; */
}

/* .right-section .box-card .card-content::after {
  content: "";
  position: absolute;
  width: 29.3rem;
  height: 1px;
  background-color: #e0e0e0;
  transform: rotate(90deg);
  right: -233px;
} */

.right-section .box-card .card-content h4 {
  margin: 0;
  margin-top: 1rem;
}

.right-section .box-card .card-content p {
  font-size: 12px;
}

.right-section .box-card .card-content .earliest-appointment {
  margin-top: 2rem;
  font-size: 14px;
}

.right-section .box-card .card-content .appointment-time-date {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  /* max-width: 150px; */
  width: 55%;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.right-section .box-card .card-content .appointment-time-date span {
  /* margin-right: 0.5rem; */
}

.right-section .box-card .pricing {
  align-self: flex-end;
  padding: 8px 12px;
}

.right-section .box-card .pricing p {
  color: #8d8d8d;
  font-size: 14px;
  letter-spacing: 0.1px;
  text-decoration: line-through;
  text-align: end;
  margin: 0;
}

.right-section .box-card .pricing h6 {
  margin: 0;
  font-size: 24px;
  text-align: end;
  margin-bottom: 1rem;
}

.right-section .box-card .pricing .el-button {
  width: 100%;
  background-color: #7690da;
  border-color: #7690da;
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .right-section .box-card .card-img {
    height: 500px;
  }
}

@media screen and (max-width: 414px) {
  .right-section .box-card .card-img {
    height: 250px;
  }
}

/* @media screen and (max-width: 1024px) {
  .right-section .box-card .card-content::after {
    display: none;
  }
} */
</style>