<template>
  <div id="customer-reviews">
    <div class="customer-reviews-content">
      <h4>顧客評價</h4>
      <el-row :gutter="10">
        <el-col :span="2">
          <div class="rating">
            <span class="rate">4.2</span>
          </div>
        </el-col>
        <el-col :span="6">
          <el-rate
            :colors="colors"
            v-model="value"
            disabled
            text-color="#ff9900"
          >
          </el-rate>
          <p class="rate-text">301 則顧客評價</p>
        </el-col>
        <el-col :span="16">
          <div class="select-input">
            <el-select class="m-2" placeholder="最高至最低分">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom-section">
      <el-row>
        <el-col :span="2">
          <el-avatar
            :size="50"
            src="https://www.w3schools.com/howto/img_avatar2.png"
          ></el-avatar>
        </el-col>
        <el-col :span="22">
          <p class="avatar-name">Flores Juanita</p>
          <el-rate
            :colors="colors"
            v-model="value"
            disabled
            text-color="#8d8d8d"
            show-score
            score-template="2021/12/20"
          >
          </el-rate>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
};
</script>

<style>
#customer-reviews .el-row {
  margin-top: 2rem;
}

#customer-reviews .rating {
  background: linear-gradient(
      269.19deg,
      rgba(143, 0, 255, 0.4) 0%,
      rgba(143, 0, 255, 0) 100%
    ),
    #7690da;
  border-radius: 6px;
  padding: 12px 0;
  text-align: center;
}

#customer-reviews .rate {
  color: #fff;
}

#customer-reviews .el-rate .el-icon.el-rate__icon {
  margin: 0;
  font-size: 24px;
}

#customer-reviews .rate-text {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
  margin: 0;
  margin-top: 0.3rem;
}

#customer-reviews .select-input {
  text-align: end;
}

#customer-reviews .customer-reviews-content {
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

#customer-reviews .bottom-section .avatar-name {
  margin: 0;
}
</style>