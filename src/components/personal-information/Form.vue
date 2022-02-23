<template>
  <div class="personal-information-form">
    <el-form label-position="top">
      <el-row :gutter="20">
        <el-col :sm="24" :md="6">
          <el-form-item label="稱謂">
            <el-select></el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="姓氏">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="名字">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="6">
          <el-form-item label="電話區號">
            <el-select></el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電話號碼">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="9">
          <el-form-item label="電郵地址">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="居住國家 / 城市">
            <el-select></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button-wrapper">
        <el-button>儲存</el-button>
      </div>
    </el-form>
  </div>
</template>

<style>
.member-profile
  .personal-information
  .personal-information-form
  .el-form-item__label {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  padding-bottom: 0.5rem;
}

.member-profile .personal-information .personal-information-form .el-select {
  width: 100%;
}

.member-profile .personal-information .personal-information-form .el-row {
  border-bottom: 0.8px solid #e0e0e0;
}

.member-profile .personal-information .personal-information-form .el-button {
  background: #c6c6c6;
  border-radius: 4px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: 1rem;
}

.member-profile
  .personal-information
  .personal-information-form
  .button-wrapper {
  text-align: end;
}
</style>
