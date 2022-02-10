<template>
  <div class="left-section">
    <div class="slider">
      <h3>價錢</h3>
      <el-slider v-model="value" range show-stops :max="10"> </el-slider>
      <div class="range">
        <el-row>
          <el-col :span="10">
            <el-input readonly v-model="value[0]"></el-input>
          </el-col>
          <el-col :span="4">
            <span></span>
          </el-col>
          <el-col :span="10">
            <el-input readonly v-model="value[1]"></el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="area">
      <h3>區域</h3>
      <div class="single-area">
        <p>香港區</p>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="中西區" />
          <el-checkbox label="東區" />
          <el-checkbox label="南區" />
          <el-checkbox label="灣仔區" />
        </el-checkbox-group>
      </div>
      <div class="single-area">
        <p>九龍區</p>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="九龍城區" />
          <el-checkbox label="觀塘區" />
          <el-checkbox label="深水埗區" />
          <el-checkbox label="黃大仙區" />
          <el-checkbox label="油尖旺區" />
        </el-checkbox-group>
      </div>
      <div class="single-area">
        <p>新界區</p>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="離島區" />
          <el-checkbox label="葵青區" />
          <el-checkbox label="北區" />
          <el-checkbox label="西貢區" />
          <el-checkbox label="沙田區" />
          <el-checkbox label="大埔區" />
          <el-checkbox label="荃灣區" />
          <el-checkbox label="屯門區" />
          <el-checkbox label="元朗區" />
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [4, 8],
      checkList: [],
    };
  },
};
</script>

<style>
.product-search-content .left-section .slider {
  margin-bottom: 1.5rem;
}

.product-search-content .left-section .slider .range span::after {
  content: "";
  position: absolute;
  border: 1px dashed #c6c6c6;
  width: 120px;
  top: 50%;
  transform: translateY(-50%);
}

.product-search-content .left-section .slider .range .el-row {
  align-items: center;
}

.product-search-content .left-section .slider .range .el-input {
  position: relative;
}

.product-search-content .left-section .slider .range .el-input::before {
  content: "HKD";
  position: absolute;
  left: 10px;
  font-size: 12px;
  color: #8d8d8d;
}

.product-search-content
  .left-section
  .slider
  .range
  .el-input
  .el-input__inner {
  text-align: end;
}

.product-search-content .left-section .slider .range {
  position: relative;
}

.product-search-content .left-section .slider {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.product-search-content .left-section .area {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.product-search-content .left-section .area h3 {
  margin-bottom: 1rem;
}

.product-search-content .left-section .area .single-area p {
  color: #8d8d8d;
  margin-bottom: 0;
}

.product-search-content .left-section .area .single-area .el-checkbox-group {
  display: flex;
  flex-direction: column;
}

.product-search-content
  .left-section
  .area
  .single-area
  .el-checkbox-group
  .el-checkbox.is-checked
  .el-checkbox__inner {
  background-color: #7690da;
  border-color: #7690da;
}

.product-search-content
  .left-section
  .area
  .single-area
  .el-checkbox-group
  .el-checkbox.is-checked
  .el-checkbox__label {
  color: #7690da;
}
</style>