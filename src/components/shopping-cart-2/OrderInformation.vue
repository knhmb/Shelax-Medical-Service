<template>
  <div class="order-information">
    <h3>訂購人資料</h3>
    <p>如訂單有什何變動，我們會通知你</p>
    <el-form label-position="top">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="稱謂">
            <el-select placeholder="選擇稱謂"></el-select>
          </el-form-item>
        </el-col>

        <el-col :span="9">
          <el-form-item label="姓氏">
            <el-input placeholder="請輸入姓氏"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="名字">
            <el-input placeholder="請輸入名字"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="電話區號">
            <el-select placeholder="選擇電話區號"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="電話號碼">
            <el-input placeholder="請輸入電話號碼"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="電郵地址">
            <el-input placeholder="請輸入電郵地址"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="居住國家 / 城市">
            <el-select
              class="email-input"
              placeholder="請輸入電郵地址"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-checkbox label="同時更新會員資料"></el-checkbox>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style>
.shopping-cart-step-2 .left-section-cart .order-information h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #fff;
  position: relative;
  z-index: 1;
  margin: 1.5rem 0;
}

.shopping-cart-step-2 .left-section-cart .order-information h3::before {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, #7690da 0%, rgba(118, 144, 218, 0) 100%);
  height: 40px;
  z-index: -1;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
}

.shopping-cart-step-2 .left-section-cart .order-information .el-form {
  margin-top: 2rem;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-form
  .el-form-item__label {
  padding-bottom: 0.5rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-form
  .el-select.email-input {
  width: 100%;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-checkbox__label {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #393939;
}

.shopping-cart-step-2
  .left-section-cart
  .order-information
  .el-checkbox__input.is-checked
  .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}
</style>