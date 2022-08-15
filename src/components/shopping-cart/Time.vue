<template>
  <div class="update-time">
    <div class="update-time" v-if="singleItemDetail.itemType === 'service'">
      <p>選擇時間</p>
      <div class="am">
        <p class="divider">
          <span>{{ $t("am") }}</span>
        </p>
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
                  time.sessionStart.slice(
                    0,
                    time.sessionStart.lastIndexOf(':')
                  ),
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
        <p class="divider">
          <span>{{ $t("pm") }}</span>
        </p>
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
                  time.sessionStart.slice(
                    0,
                    time.sessionStart.lastIndexOf(':')
                  ),
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
      <p class="from">
        {{ $t("from")
        }}<span class="price">HKD {{ singleItemDetail.discountedPrice }}</span>
        <span class="discount">HK$ {{ singleItemDetail.originalPrice }}</span>
      </p>
      <div class="btns">
        <el-button class="cancel" @click="closeDialog">{{
          $t("cancel_button")
        }}</el-button>
        <el-button
          @click="saveChanges"
          :disabled="disableButton"
          class="save"
          >{{ $t("save_button") }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  props: ["item", "disableButton", "date"],
  data() {
    return {
      isActive: "",
      isFirstLoad: true,
      timeslotId: null,
    };
  },
  watch: {
    singleItemDetail: {
      deep: true,
      handler() {
        if (this.isFirstLoad)
          this.isActive = this.singleItemDetail.defaultBookingTime.slice(
            0,
            this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
          );
        this.timeslotId = this.singleItemDetail.selectedTimeslotId;

        this.isFirstLoad = false;
      },
    },
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
    setTime(time) {
      console.log(time);
      this.timeslotId = time.id;
      this.isActive = time.sessionStart.slice(
        0,
        time.sessionStart.lastIndexOf(":")
      );
      const data = {
        timeslotId: time.id,
        quantity: this.item.quantity,
      };
      console.log(data);
      this.$store.dispatch("search/getTime", data);
    },
    closeDialog() {
      this.$emit("closeDialog");
      this.isFirstLoad = true;
    },
    saveChanges() {
      const data = [
        {
          shoppingCartItemId: this.item.shoppingCartItemId,
          reservedItemId: this.item.reservedItemId,
          isService: this.item.isService,
          isProduct: this.item.isProduct,
          quantity: this.item.quantity,
          updatedReservedDate: moment(this.date).format("YYYYMMDD"),
          updatedReservedTime: this.isActive,
          updatedTimeslotId: this.timeslotId,
          // totalPrice: this.singleItemDetail.discountedPrice,
          selected: true,
        },
      ];
      console.log(data);
      this.checkAccessToken(data);
    },
    updateCart(data) {
      this.$store
        .dispatch("shoppingCart/updateCart", data)
        .then(() => {
          this.closeDialog();
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
    checkAccessToken(data) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.updateCart(data);
        })
        .catch(() => {
          this.checkRefreshToken(data);
        });
    },
    checkRefreshToken(data) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.updateCart(data);
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
  },

  created() {
    if (this.singleItemDetail.itemType === "service") {
      this.isActive = this.singleItemDetail.defaultBookingTime.slice(
        0,
        this.singleItemDetail.defaultBookingTime.lastIndexOf(":")
      );
    }
  },
};
</script>

<style scoped>
.update-time p {
  color: #525252;
  font-size: 16px;
}

.update-time button {
  padding: 0.5rem 1rem;
}

.update-time .divider {
  width: 100%;
  /* text-align: center; */
  border-bottom: 1px solid #c6c6c6;
  line-height: 0.1em;
  /* margin: 15px 0 20px; */
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.update-time .divider span {
  background: #fff;
  /* padding: 0 10px; */
  padding-right: 5px;
  color: #c6c6c6;
  margin-top: 1rem;
}

.update-time p.from {
  text-align: end;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #c6c6c6;
  margin-top: 1rem;
}

.update-time p.from span.price {
  font-size: 20px;
  color: #262626;
  margin: 0 0.3rem;
}

.update-time p.from span.discount {
  text-decoration: line-through;
}

.update-time .btns {
  text-align: end;
}

.update-time .el-button {
  padding: 12px 42px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.update-time .el-button.cancel {
  background-color: #2d99a0;
  border-color: #2d99a0;
}

.update-time .el-button.save {
  background-color: #7690da;
  border-color: #7690da;
}

.update-time {
  /* border-bottom: 0.8px solid #c6c6c6; */
}

.update-time .pm {
  border-bottom: 0.8px solid #c6c6c6;

  padding-bottom: 1rem;
}
</style>