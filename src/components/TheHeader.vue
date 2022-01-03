<template>
  <header class="header">
    <base-container>
      <el-row>
        <el-col :span="12">
          <img
            src="../assets/brand-logo@2x.png"
            @click="$router.push('/')"
            class="logo"
            alt=""
          />
        </el-col>
        <el-col :span="12">
          <el-menu
            class="el-menu-demo top-header"
            mode="horizontal"
            :ellipsis="false"
          >
            <el-sub-menu index="1">
              <template #title>繁體中文</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">
              <img src="../assets/icon-cart@2x.png" class="cart-icon" alt="" />
              購物車
            </el-menu-item>
            <el-menu-item index="3">登入</el-menu-item>
            <li class="login-btn">
              <!-- <el-button class="my-login-btn" type="primary">Login</el-button> -->
              <button @click="openDialog" class="my-login-btn">註冊</button>
            </li>
          </el-menu>
        </el-col>
        <!-- <el-col class="login-btn" :span="7">
          <el-button type="primary">Login</el-button>
        </el-col> -->
      </el-row>
    </base-container>
    <hr />
    <!-- <base-container> -->
    <div class="bottom-container">
      <el-menu class="el-menu-demo bottom-header" mode="horizontal">
        <el-menu-item index="1">HPV疫苗</el-menu-item>
        <el-menu-item index="2">四痘混合疫苗</el-menu-item>
        <el-menu-item index="3">兒童疫苗</el-menu-item>
        <el-menu-item index="4">13價肺炎球菌疫苗</el-menu-item>
        <el-menu-item index="5">孕前檢查</el-menu-item>
        <el-menu-item index="6">人工受孕</el-menu-item>
        <el-menu-item index="7">凍卵</el-menu-item>
        <el-menu-item index="8">身體檢查</el-menu-item>
        <el-sub-menu index="9">
          <template #title>基因檢查</template>
          <el-menu-item index="9-1">item one</el-menu-item>
          <el-menu-item index="9-2">item two</el-menu-item>
          <el-menu-item index="9-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="10">兒科檢查</el-menu-item>
      </el-menu>
    </div>
    <!-- </base-container> -->
  </header>
  <Register @dialogClosed="closingDialog" :dialogVisible="dialogVisible" />
</template>

<script>
import Register from "./register/Register.vue";

export default {
  components: {
    Register,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  provide() {
    return {
      dialogVisible: this.dialogVisible,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
      console.log(this.dialogVisible);
    },
    closingDialog(event) {
      this.dialogVisible = false;
      console.log(event);
    },
  },
};
</script>

<style>
.header {
  background-color: #fff;
}

.header .el-row {
  align-items: center;
}

.header .el-menu--horizontal {
  border-bottom: none;
  background: transparent;
}

.header .el-menu--horizontal .el-menu-item,
.header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
  padding: 0 1rem;
}

.header .el-menu--horizontal.top-header {
  justify-content: end;
}

.header .el-menu--horizontal.top-header .el-menu-item,
.header .el-menu--horizontal.top-header .el-sub-menu .el-sub-menu__title {
  font-size: 12px;
}

.header .el-menu--horizontal.bottom-header {
  /* margin-top: -0.5rem; */
}

.header .logo {
  width: 60px;
  cursor: pointer;
}

.header hr {
  border-top: 1px solid #eee;
  margin: 0;
  /* margin-top: -0.1rem; */
  /* position: relative;
  z-index: 1; */
}

.header .el-button--primary {
  padding: 8px 16px;
  border-radius: 100px;
  justify-content: end;
  font-size: 12px;
  background-color: #7690da;
}

.header .login-btn {
  /* text-align: end; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0;
}

.header .bottom-container {
  padding: 0 2rem;
}

.header .my-login-btn {
  padding: 8px 16px;
  border-radius: 100px;
  justify-content: end;
  font-size: 12px;
  background-color: #7690da;
  color: #fff;
  border: 1px solid #7690da;
  outline-color: none;
  border-image: none;
  cursor: pointer;
}

.header .my-login-btn:hover {
  background-color: #7691dad4;
}

.header .cart-icon {
  width: 15px;
  margin-right: 0.2rem;
}
</style>