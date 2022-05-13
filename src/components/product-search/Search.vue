<template>
  <div class="product-search-section">
    <base-content-container>
      <el-form label-position="top">
        <el-row :gutter="10">
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <el-input
                placeholder="身體檢查"
                class="service"
                v-model.trim="service"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <el-input
                type="date"
                class="appointment-date"
                v-model="date"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <el-form-item>
              <el-input
                type="time"
                class="appointment-time"
                v-model="time"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :lg="6">
            <button>
              <img
                src="../../assets/icon-search@2x.png"
                class="icon-search"
                alt=""
              />
              搜尋
            </button>
          </el-col>
        </el-row>
      </el-form>
    </base-content-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: "",
      date: null,
      time: null,
    };
  },
};
</script>

<style>
.product-search-section {
  background-color: #4e68b2;
  /* min-width: 387px; */
}

.product-search-section .el-form {
  padding-top: 1rem;
}

.product-search-section .el-form .el-form-item {
  margin-bottom: 0.5rem;
}

.product-search-section .el-input {
  position: relative;
  /* padding: 16px 26px 16px 24px; */
}

.product-search-section .el-form-item__content > .service::before {
  content: "搜尋服務或產品";
}

.product-search-section .el-form-item__content > .appointment-date::before {
  content: "預約日期";
}

.product-search-section .el-form-item__content > .appointment-time::before {
  content: "預約時間";
}

.product-search-section .el-form-item__content > .el-input::before {
  /* content: "選擇服務"; */
  position: absolute;
  top: 0;
  left: 1rem;
  color: #8d8d8d;
  /* padding-left: 24px; */
}

.product-search-section .el-input__inner {
  padding: 40px 26px 16px 16px;
  border-radius: 8px;
  font-size: 16px;
}

.product-search-section .el-form-item__label {
  padding: 0;
  color: #fff;
}

.product-search-section button {
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  background-color: #7690da;
  border: 1px solid #7690da;
  color: white;
  /* margin-bottom: 22px; */
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.product-search-section .icon-search {
  width: 18px;
  margin-right: 0.2rem;
}
</style>

