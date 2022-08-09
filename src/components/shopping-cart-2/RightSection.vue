<template>
  <div class="right-section">
    <h2 v-if="isService">
      {{ $t("service_type") }}
    </h2>
    <template v-for="item in orderItem.orderingItems" :key="item.itemId">
      <!-- {{ filterData(item.itemId) }} -->
      <div
        v-if="filterData(item.itemId).searchItemType === 'service'"
        class="card"
      >
        <div class="header">
          <h3>{{ item.itemName }}</h3>
          <p>{{ item.providerName }}</p>
          <p>{{ item.providerAddress }}</p>
        </div>
        <div class="body">
          <el-row>
            <el-col :span="12">
              <p class="key">{{ $t("date") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">{{ item.bookingDateDisplay }}</p>
            </el-col>
            <el-col :span="12">
              <p class="key">{{ $t("time") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">{{ item.bookingTime }}</p>
            </el-col>
            <el-col :span="12">
              <p class="key">{{ $t("no_of_participants") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">{{ item.quantity }}人</p>
            </el-col>
            <el-col :span="12">
              <p class="key">{{ $t("unit_price") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">HKD{{ item.unitPrice }}</p>
            </el-col>
          </el-row>
        </div>
        <div class="footer">
          <el-row>
            <el-col :span="12">
              <p class="key">{{ $t("price_total") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">HKD{{ item.price }}</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </template>

    <!-- <div class="card">
      <div class="header">
        <h3>綜合個人健康體檢套餐</h3>
        <p>ＸＸＸＸ健康中心</p>
        <p>香港九龍城區九龍仔聯福道17號</p>
      </div>
      <div class="body">
        <el-row>
          <el-col :span="12">
            <p class="key">日期</p>
          </el-col>
          <el-col :span="12">
            <p class="value">2022年1月21日</p>
          </el-col>
          <el-col :span="12">
            <p class="key">時間</p>
          </el-col>
          <el-col :span="12">
            <p class="value">14:30</p>
          </el-col>
          <el-col :span="12">
            <p class="key">人數</p>
          </el-col>
          <el-col :span="12">
            <p class="value">1人</p>
          </el-col>
          <el-col :span="12">
            <p class="key">單價</p>
          </el-col>
          <el-col :span="12">
            <p class="value">HKD570</p>
          </el-col>
        </el-row>
      </div>
      <div class="footer">
        <el-row>
          <el-col :span="12">
            <p class="key">價格</p>
          </el-col>
          <el-col :span="12">
            <p class="value">HKD570</p>
          </el-col>
        </el-row>
      </div>
    </div> -->

    <h2 v-if="!isService">
      {{ $t("product_type") }}
    </h2>
    <template v-for="item in orderItem.orderingItems" :key="item.itemId">
      <div
        v-if="filterData(item.itemId).searchItemType === 'product'"
        class="card"
      >
        <div class="header">
          <h3>{{ item.itemName }}</h3>
          <p>{{ item.providerName }}</p>
          <p>{{ item.providerAddress }}</p>
        </div>
        <div class="body">
          <el-row>
            <el-col :span="12">
              <p class="key">{{ $t("quantity") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">{{ item.quantity }}件</p>
            </el-col>
            <el-col :span="12">
              <p class="key">{{ $t("unit_price") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">HKD{{ item.unitPrice }}</p>
            </el-col>
          </el-row>
        </div>
        <div class="footer">
          <el-row>
            <el-col :span="12">
              <p class="key">{{ $t("price_total") }}</p>
            </el-col>
            <el-col :span="12">
              <p class="value">HKD{{ item.price }}</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </template>

    <!-- <div class="card">
      <div class="header">
        <h3>綜合個人健康體檢套餐</h3>
        <p>ＸＸＸＸ健康中心</p>
        <p>香港九龍城區九龍仔聯福道17號</p>
      </div>
      <div class="body">
        <el-row>
          <el-col :span="12">
            <p class="key">數量</p>
          </el-col>
          <el-col :span="12">
            <p class="value">1件</p>
          </el-col>
          <el-col :span="12">
            <p class="key">單價</p>
          </el-col>
          <el-col :span="12">
            <p class="value">HKD120</p>
          </el-col>
        </el-row>
      </div>
      <div class="footer">
        <el-row>
          <el-col :span="12">
            <p class="key">價格</p>
          </el-col>
          <el-col :span="12">
            <p class="value">HKD120</p>
          </el-col>
        </el-row>
      </div>
    </div> -->

    <div class="card price">
      <div class="body">
        <el-row>
          <el-col :span="12">
            <p class="key">{{ $t("total_price") }}</p>
          </el-col>
          <el-col :span="12">
            <p class="value">HKD{{ orderItem.totalPrice }}</p>
          </el-col>
          <el-col :span="12">
            <p class="key">{{ $t("discount") }}</p>
          </el-col>
          <el-col :span="12">
            <p class="value discount">
              -HKD{{ isPromoApplied ? couponDetails.newTotalDiscount : 0 }}
            </p>
          </el-col>
          <el-col :span="12">
            <p class="key">{{ $t("amount_to_be_paid") }}</p>
          </el-col>
          <el-col :span="12">
            <p v-if="!isPromoApplied" class="value payment-amount">
              HKD{{ orderItem.totalPrice }}
            </p>
            <p v-else class="value payment-amount">
              HKD{{ couponDetails.amountToBePaid }}
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="footer">
        <el-row>
          <el-col :span="10">
            <p class="key">{{ $t("you_can_earn") }}</p>
          </el-col>
          <el-col :span="14">
            <img src="../../assets/icon-bonuspoint@2x.png" alt="" />
            <p class="value">
              {{ orderItem.totalPointsRewarded }} Shelax Points
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isService: false,
    };
  },
  computed: {
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
    couponDetails() {
      return this.$store.getters["order/couponDetails"];
    },
    isPromoApplied() {
      return this.$store.getters["order/isPromoApplied"];
    },
    searchItems() {
      return this.$store.getters["search/searchItems"];
    },
    // filterData() {
    //   return this.searchItems.find((itemId) => this.id === itemId.itemId);
    // },
  },
  methods: {
    filterData(id) {
      const data = this.searchItems.find((itemId) => id === itemId.itemId);
      console.log(data);
      if (data.searchItemType === "service") {
        this.isService = true;
      } else {
        this.isService = false;
      }
      return data;
    },
  },
  created() {
    console.log(this.orderItem);
  },
};
</script>

<style scoped>
.right-section h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

.shopping-cart-step-2 .right-section .card {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 1rem;
}

.shopping-cart-step-2 .right-section .card h3 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
  margin-bottom: 1rem;
}

.shopping-cart-step-2 .right-section .card .el-col {
  margin-bottom: 0.5rem;
}

.shopping-cart-step-2 .right-section .card .header,
.shopping-cart-step-2 .right-section .card .body {
  box-shadow: none;
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.shopping-cart-step-2 .right-section .card .body,
.shopping-cart-step-2 .right-section .card .footer {
  margin-top: 1rem;
}

.shopping-cart-step-2 .right-section .card .header p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
}

.shopping-cart-step-2 .right-section .card .body .key,
.shopping-cart-step-2 .right-section .card .footer .key {
  color: #8d8d8d;
}

.shopping-cart-step-2 .right-section .card .body .value,
.shopping-cart-step-2 .right-section .card .footer .value {
  color: #262626;
  text-align: end;
}

.shopping-cart-step-2 .right-section .card .body .value,
.shopping-cart-step-2 .right-section .card .body .key {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.shopping-cart-step-2 .right-section .card.price .body .discount {
  font-weight: bold;
  color: #2d99a0;
}

.shopping-cart-step-2 .right-section .card.price .body .payment-amount {
  font-weight: bold;
  line-height: 20px;
  color: #4e68b2;
  font-size: 20px;
}

.shopping-cart-step-2 .right-section .card.price .footer .key {
  color: #525252;
  font-size: 14px;
}

.shopping-cart-step-2 .right-section .card.price .footer .value {
  color: #feb431;
  font-size: 14px;
}

.shopping-cart-step-2 .right-section .card.price .footer .el-col:last-of-type {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.shopping-cart-step-2 .right-section .card.price .footer img {
  width: 9.5px;
}
</style>