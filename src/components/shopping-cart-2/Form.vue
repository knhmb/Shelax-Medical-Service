<template>
  <div
    class="shopping-cart-form"
    v-for="item in orderItem.orderingItems"
    :key="item.itemId"
  >
    <div class="form-header">
      <!-- {{
        isService.find((i) => {
          return i.reservedItemId === item.itemId;
        })
      }} -->
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img :src="item.thumbnail" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>{{ item.itemName }}</h3>
          <p>地址: {{ item.providerName }} - {{ item.providerAddress }}</p>
          <p>
            預約日期及時間: {{ item.bookingDateDisplay }} -
            {{ item.bookingTime }}
          </p>
          <p>人數: {{ item.quantity }}人</p>
        </el-col>
      </el-row>
    </div>
    <div class="form-body">
      <form-content
        @dataChanged="setNewData"
        @specialRequestChanged="specialRequestChanged"
        :quantity="item.quantity"
        :id="item.itemId"
      ></form-content>
    </div>
  </div>
  <!-- <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/Rectangle-77-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
          <p>人數: 1人</p>
        </el-col>
      </el-row>
    </div>
    <div class="form-body">
      <form-content></form-content>
    </div>
  </div> -->
  <!-- <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/product-search-image.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>數量: 2件</p>
        </el-col>
      </el-row>
    </div> -->
  <!-- <div class="form-body">
      <form-content></form-content>
    </div> -->
  <!-- </div> -->
  <!-- <div class="shopping-cart-form">
    <div class="form-header">
      <el-row :gutter="12">
        <el-col :sm="24" :md="3">
          <img src="../../assets/product-search-image-2.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="21">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>數量: 1件</p>
        </el-col>
      </el-row>
    </div> -->
  <!-- <div class="form-body">
      <form-content></form-content>
    </div> -->
  <!-- </div> -->
</template>

<script>
import FormContent from "./FormContent.vue";

export default {
  components: {
    FormContent,
  },
  computed: {
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    shoppingCartItems() {
      return this.$store.getters["shoppingCart/shoppingCartItems"];
    },
    allData() {
      let data = [];
      this.shoppingCartItems.validServiceItems.find((item) => {
        data.push(item);
      });
      this.shoppingCartItems.validProductItems.find((item) => {
        data.push(item);
      });
      return data;
    },
    isService() {
      return this.allData.filter((o) => {
        return o.reservedItemId;
      });
      // let data = "";
      // data = this.allData.find((item) => {
      //   return item.isProduct;
      // });
      // return data;
    },
    order() {
      return this.orderItem.orderingItems.filter((item) => {
        return item;
      });
      // let data = "1";
      // data = this.orderItem.orderingItems.find((item) => {
      //   return item;
      // });
      // return data;
    },
  },
  methods: {
    setNewData(item) {
      this.$emit("newData", item);
    },
    specialRequestChanged(specialRequest) {
      this.$emit("specialRequestData", specialRequest);
    },
  },
  created() {
    console.log(this.orderItem);
  },
};
</script>

<style scoped>
.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 1.5rem;
}

.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form img {
  width: 100%;
  border-radius: 4px;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header
  h3 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header
  p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
  margin-bottom: 0.2rem;
}

/* .shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-header {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
} */

.shopping-cart-step-2 .left-section-cart .body .shopping-cart-form .form-body {
  margin-top: 1rem;
  border-top: 0.8px solid #e0e0e0;
  padding-top: 1rem;
}
</style>