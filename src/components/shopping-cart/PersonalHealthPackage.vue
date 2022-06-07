<template>
  <!-- =================================== SERVICE ITEMS SECTION =================================== -->
  <div class="selection">
    <el-checkbox
      @change="handleCheckAllChangeService({ type: 'service' })"
      v-model="checkAllService"
    ></el-checkbox>
    <span
      >{{ $t("select_all") }} ({{
        shoppingCartItems.validServiceItems.length
      }})</span
    >
    <span style="cursor: pointer">刪除已選活動</span>
    <span>刪除已失效活動</span>
  </div>
  <div
    class="packages"
    v-for="item in shoppingCartItems.validServiceItems"
    :key="item"
  >
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox
          @change="changedSelection(item)"
          v-model="item.selected"
        ></el-checkbox>
        <!-- <el-checkbox
          @change="checkboxChanged(1)"
          v-model="item.selected"
        ></el-checkbox> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img :src="item.thumbnail" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>{{ item.itemName }}</h3>
          <p>地址: {{ item.providerName }} - {{ item.address }}</p>
          <p>
            預約日期及時間: {{ item.reservedDateDisplay }} -
            {{ item.reservedTime }}
          </p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number
          @change="quantityChanged(item)"
          :min="1"
          v-model="item.quantity"
          size="small"
        />
      </el-col>
    </el-row>
    <!-- <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox @change="checkboxChanged(1)" v-model="val1"></el-checkbox>
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img src="../../assets/Rectangle-77.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>綜合個人健康體檢套餐</h3>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number v-model="num" size="small" />
      </el-col>
    </el-row> -->

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD {{ item.price }}</p>
      </el-col>
    </el-row>
  </div>

  <!-- =================================== PRODUCT ITEMS SECTION =================================== -->

  <div class="title">
    <h2>{{ $t("product_items") }}</h2>
  </div>

  <div class="selection">
    <el-checkbox
      v-model="checkAllProduct"
      @change="handleCheckAllChangeProduct({ type: 'product' })"
    ></el-checkbox>
    <span
      >{{ $t("select_all") }} ({{
        shoppingCartItems.validProductItems.length
      }})</span
    >
    <span @click="unSelectAll" style="cursor: pointer">刪除已選產品</span>
  </div>
  <div
    class="packages"
    v-for="item in shoppingCartItems.validProductItems"
    :key="item"
  >
    <el-row class="top">
      <el-col :xs="24" :sm="1" :md="1">
        <el-checkbox
          @change="changedSelection(item)"
          v-model="item.selected"
        ></el-checkbox>
        <!-- <img src="../../assets/Rectangle-77.png" alt="" /> -->
      </el-col>
      <el-col :xs="24" :sm="3" :md="3">
        <img :src="item.thumbnail" alt="" />
      </el-col>
      <el-col :xs="24" :sm="15" :md="15">
        <div class="text">
          <h3>{{ item.itemName }}</h3>
          <p>地址: {{ item.providerName }} - {{ item.address }}</p>
        </div>
      </el-col>
      <el-col class="input-range" :xs="24" :sm="5" :md="5">
        <p>人數</p>
        <el-input-number
          @change="quantityChanged(item)"
          :min="1"
          v-model="item.quantity"
          size="small"
        />
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :xs="24" :sm="14">
        <span>更改</span>
        <span>刪除</span>
      </el-col>
      <el-col :xs="24" :sm="10">
        <p>HKD {{ item.price }}</p>
      </el-col>
    </el-row>
  </div>

  <div class="expired-section">
    <h2>{{ $t("invalid_items") }}</h2>
    <div class="title">
      <h2>{{ $t("service_items") }}</h2>
    </div>
    <div
      class="packages"
      v-for="item in shoppingCartItems.invalidServiceItems"
      :key="item"
    >
      <el-row class="top">
        <el-col :xs="24" :sm="1" :md="1">
          <el-checkbox v-model="item.selected" disabled></el-checkbox>
        </el-col>
        <el-col :xs="24" :sm="2" :md="2">
          <img :src="item.thumbnail" alt="" />
        </el-col>
        <el-col :xs="24" :sm="16" :md="16">
          <div class="text">
            <h3>{{ item.itemName }}</h3>
            <p>地址: {{ item.providerName }} - {{ item.address }}</p>
            <p>
              預約日期及時間: {{ item.reservedDateDisplay }} -
              {{ item.reservedTime }}
            </p>
          </div>
        </el-col>
        <el-col class="input-range" :xs="24" :sm="5" :md="5">
          <p>人數</p>
          <el-input-number disabled v-model="item.quantity" size="small" />
        </el-col>
      </el-row>

      <el-row class="bottom">
        <el-col :xs="24" :sm="12">
          <span>更改</span>
          <span>刪除</span>
        </el-col>
        <el-col :xs="24" :sm="12">
          <p>{{ $t("item_invalid_text") }}</p>
        </el-col>
      </el-row>
    </div>

    <div v-if="shoppingCartItems.invalidProductItems.length > 0" class="title">
      <h2>{{ $t("product_items") }}</h2>
    </div>
    <div
      class="packages"
      v-for="item in shoppingCartItems.invalidProductItems"
      :key="item"
    >
      <el-row class="top">
        <el-col :xs="24" :sm="1" :md="1">
          <el-checkbox v-model="item.selected" disabled></el-checkbox>
        </el-col>
        <el-col :xs="24" :sm="2" :md="2">
          <img :src="item.thumbnail" alt="" />
        </el-col>
        <el-col :xs="24" :sm="16" :md="16">
          <div class="text">
            <h3>{{ item.itemName }}</h3>
            <p>地址: {{ item.providerName }} - {{ item.address }}</p>
          </div>
        </el-col>
        <el-col class="input-range" :xs="24" :sm="5" :md="5">
          <p>人數</p>
          <el-input-number disabled v-model="item.quantity" size="small" />
        </el-col>
      </el-row>

      <el-row class="bottom">
        <el-col :xs="24" :sm="12">
          <span>更改</span>
          <span>刪除</span>
        </el-col>
        <el-col :xs="24" :sm="12">
          <p>{{ $t("item_invalid_text") }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["personalHealthCheckbox1", "personalHealthCheckbox2"],
  data() {
    return {
      num: 1,
      val1: this.personalHealthCheckbox1,
      val2: this.personalHealthCheckbox2,
      firstProductCheckbox: false,
      secondProductCheckbox: false,
      selectAllProduct: false,
      checkAllService: false,
      checkAllProduct: false,
      productArr: [],
      serviceArr: [],
    };
  },
  watch: {
    personalHealthCheckbox1() {
      this.val1 = this.personalHealthCheckbox1;
    },
    personalHealthCheckbox2() {
      this.val2 = this.personalHealthCheckbox2;
    },
  },
  computed: {
    shoppingCartItems() {
      return this.$store.getters["shoppingCart/shoppingCartItems"];
    },
  },
  methods: {
    checkboxChanged(val) {
      if (val === 1) {
        this.$emit("val1Changed", { value: this.val1, option: val });
      } else {
        this.$emit("val1Changed", { value: this.val2, option: val });
      }
    },
    toggleSelectAll() {
      if (this.selectAllProduct) {
        this.firstProductCheckbox = true;
        this.secondProductCheckbox = true;
      } else {
        this.firstProductCheckbox = false;
        this.secondProductCheckbox = false;
      }
    },
    valChanged() {
      if (!this.firstProductCheckbox || !this.secondProductCheckbox) {
        this.selectAllProduct = false;
      }
    },
    unSelectAll() {
      this.firstProductCheckbox = false;
      this.secondProductCheckbox = false;
      this.selectAllProduct = false;
    },
    changedSelection(item) {
      if (item.isService) {
        const data = [
          {
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            timeslotId: item.timeslotId,
            quantity: item.quantity,
            selected: item.selected,
          },
        ];
        console.log(data);
        this.checkAccessToken({ type: "service", data: data });
      } else if (item.isProduct) {
        const data = [
          {
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            quantity: item.quantity,
            selected: item.selected,
          },
        ];
        console.log(data);
        this.checkAccessToken({ type: "service", data: data });
      }
    },
    handleCheckAllChangeProduct({ type }) {
      if (this.checkAllProduct === true) {
        this.$store.commit("shoppingCart/TOGGLE_CHECKBOX", {
          value: true,
          type: type,
        });
        this.shoppingCartItems.validProductItems.filter((item) => {
          if (item.selected) {
            this.productArr.push({
              shoppingCartItemId: item.shoppingCartItemId,
              reservedItemId: item.reservedItemId,
              isService: item.isService,
              isProduct: item.isProduct,
              quantity: item.quantity,
              selected: item.selected,
            });
          }
        });
        console.log(this.productArr);
        console.log(this.shoppingCartItems);
        this.checkAccessToken({ type: type, data: this.productArr });
      } else {
        this.productArr = [];

        this.$store.commit("shoppingCart/TOGGLE_CHECKBOX", {
          value: false,
          type: type,
        });
        this.shoppingCartItems.validProductItems.filter((item) => {
          this.productArr.push({
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            quantity: item.quantity,
            selected: item.selected,
          });
        });
        console.log(this.productArr);
        console.log(this.shoppingCartItems);
        this.checkAccessToken({ type: type, data: this.productArr });
      }
    },
    handleCheckAllChangeService({ type }) {
      if (this.checkAllService === true) {
        this.$store.commit("shoppingCart/TOGGLE_CHECKBOX", {
          value: true,
          type: type,
        });
        this.shoppingCartItems.validServiceItems.filter((item) => {
          if (item.selected) {
            this.serviceArr.push({
              shoppingCartItemId: item.shoppingCartItemId,
              reservedItemId: item.reservedItemId,
              isService: item.isService,
              isProduct: item.isProduct,
              timeslotId: item.timeslotId,
              quantity: item.quantity,
              selected: item.selected,
            });
          }
        });
        console.log(this.serviceArr);
        console.log(this.shoppingCartItems);
        this.checkAccessToken({ type: type, data: this.serviceArr });
      } else {
        this.serviceArr = [];

        this.$store.commit("shoppingCart/TOGGLE_CHECKBOX", {
          value: false,
          type: type,
        });
        this.shoppingCartItems.validServiceItems.filter((item) => {
          this.serviceArr.push({
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            timeslotId: item.timeslotId,
            quantity: item.quantity,
            selected: item.selected,
          });
        });
        console.log(this.serviceArr);
        console.log(this.shoppingCartItems);
        this.checkAccessToken({ type: type, data: this.serviceArr });
      }
    },
    quantityChanged(item) {
      console.log(item);
      if (item.isService === true) {
        const data = [
          {
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            timeslotId: item.timeslotId,
            quantity: item.quantity,
            selected: item.selected,
          },
        ];
        console.log(data);
        this.checkAccessToken({ type: "service", data: data });
      } else if (item.isProduct === true) {
        const data = [
          {
            shoppingCartItemId: item.shoppingCartItemId,
            reservedItemId: item.reservedItemId,
            isService: item.isService,
            isProduct: item.isProduct,
            quantity: item.quantity,
            selected: item.selected,
          },
        ];
        console.log(data);
        this.checkAccessToken({ type: "service", data: data });
      }
    },
    checkAccessToken({ type, data }) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          if (type === "service") {
            this.$store.dispatch("shoppingCart/updateCart", data);
          } else {
            this.$store.dispatch("shoppingCart/updateCart", data);
          }
        })
        .catch(() => {
          this.checkRefreshToken({ type: type, data: data });
        });
    },
    checkRefreshToken({ type, data }) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          if (type === "service") {
            this.$store.dispatch("shoppingCart/updateCart", data);
          } else {
            this.$store.dispatch("shoppingCart/updateCart", data);
          }
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
          this.$router.replace("/");
        });
    },
  },
  created() {
    console.log(this.shoppingCartItems);
  },
};
</script>

<style>
.shopping-cart .selection {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.shopping-cart .title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

.shopping-cart .selection span {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-left: 1rem;
}

.shopping-cart .selection span:not(:last-of-type) {
  border-right: 1px solid #c6c6c6;
  padding-right: 1rem;
}

.shopping-cart .packages {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 1rem;
  position: relative;
}

.shopping-cart .packages::after {
  content: "";
  position: absolute;
  background: #e0e0e0;
  width: 100%;
  height: 1px;
  bottom: 3.5rem;
  left: 0;
}

.shopping-cart .packages .el-row.top {
  margin-bottom: 1rem;
}

.shopping-cart .packages img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* margin-left: -1rem; */
}

.shopping-cart .packages .text h3 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.shopping-cart .packages .text p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
  text-align: start;
}

.shopping-cart .packages .text h3,
.shopping-cart .packages .text p {
  margin-left: 2rem;
}

.shopping-cart .packages .input-range {
  text-align: center;
}

.shopping-cart .packages .input-range p {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.shopping-cart .packages .el-input-number.el-input-number--small .el-icon {
  color: #262626;
  font-size: 10px;
  height: 14px;
}

.shopping-cart .packages .bottom {
  padding: 1rem 1.8rem;
  align-items: center;
}

.shopping-cart .packages .bottom span {
  padding-right: 2rem;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart .packages .bottom span:last-of-type {
  border-left: 1px solid #c6c6c6;
  padding-left: 2rem;
  padding-right: 0;
}

.shopping-cart .packages .bottom p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #4e68b2;
  text-align: end;
}

.shopping-cart .expired-section h2 {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin: 2rem 0;
}

.shopping-cart .title h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

.shopping-cart .expired-section .packages .bottom p {
  color: #fa5757;
  font-weight: normal;
}

@media screen and (min-width: 768px) and (max-width: 1230px) {
  .shopping-cart .packages img {
    margin-left: 0;
  }

  .shopping-cart .packages .text {
    margin-left: 2.5rem;
  }
}

@media screen and (max-width: 767px) {
  .shopping-cart .packages img {
    margin-left: 0;
  }

  .shopping-cart .packages .text {
    margin-left: 0;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .shopping-cart .packages .text p,
  .shopping-cart .packages {
    text-align: center;
  }

  .shopping-cart .packages::after {
    bottom: 6rem;
  }

  .shopping-cart .packages .bottom p {
    text-align: center;
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 417px) {
  .shopping-cart .expired-section .packages::after {
    bottom: 7rem;
  }
}
</style>