<template>
  <section class="add-review">
    <p>請為這次體驗評級(最高５顆星)</p>
    <el-rate
      :void-color="'#c6c6c6'"
      :colors="colors"
      v-model="value"
      size="large"
    />
    <el-form label-position="top">
      <el-row>
        <el-col>
          <el-form-item class="first-label" label="評論標題">
            <el-input placeholder="請輸入評論標題"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="告訴我們你的想法">
            <el-input
              placeholder="你覺得這次的體驗如何呢？請跟我們分享你的想法"
              type="textarea"
              rows="5"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="btn-actions">
        <el-button @click="$emit('closeAddReview')">取消</el-button>
        <el-button @click="$emit('closeAddReview')">送出</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 3,
    };
  },
};
</script>

<style>
.first-tab .card .add-review p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.first-tab .card .add-review .el-rate .el-icon {
  font-size: 30px;
}

.first-tab .card .add-review .el-row {
  margin-top: 2rem;
  border-bottom: 0.8px solid #e0e0e0;
}

.first-tab .card .add-review .el-form .el-form-item__label {
  padding-bottom: 0.5rem;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.first-tab .card .add-review .btn-actions {
  text-align: end;
}

.first-tab .card .add-review .btn-actions .el-button {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #525252;
  margin-top: 1rem;
  padding: 12px 1.5rem;
}

.first-tab .card .add-review .btn-actions .el-button:first-of-type {
  color: #525252;
  border: none;
}

.first-tab .card .add-review .btn-actions .el-button:last-of-type {
  color: #fff;
  background: #2d99a0;
  border-radius: 4px;
  border-color: #2d99a0;
}
</style>