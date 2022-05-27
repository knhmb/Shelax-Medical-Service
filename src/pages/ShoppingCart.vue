<template>
  <section class="shopping-cart">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="18">
          <h2>服務類型</h2>
          <div class="selection">
            <el-checkbox @change="applyAll" v-model="checkboxVal"></el-checkbox>
            <span>全選</span>
            <span @click="unSelect" style="cursor: pointer">刪除已選活動</span>
            <span>刪除已失效活動</span>
          </div>
          <personal-health-package
            :personal-health-checkbox1="personalHealthCheckbox1"
            :personal-health-checkbox2="personalHealthCheckbox2"
            @val1Changed="toggleCheckbox"
          ></personal-health-package>
        </el-col>
        <el-col :sm="24" :lg="6">
          <total-activities></total-activities>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import PersonalHealthPackage from "../components/shopping-cart/PersonalHealthPackage.vue";
import TotalActivities from "../components/shopping-cart/TotalActivities.vue";

export default {
  components: {
    PersonalHealthPackage,
    TotalActivities,
  },
  data() {
    return {
      personalHealthCheckbox1: false,
      personalHealthCheckbox2: false,
      checkboxVal: false,
    };
  },
  watch: {
    personalHealthCheckbox1() {
      !this.personalHealthCheckbox1 ? (this.checkboxVal = false) : "";
      console.log("changed");
    },
    personalHealthCheckbox2() {
      !this.personalHealthCheckbox2 ? (this.checkboxVal = false) : "";
    },
  },
  methods: {
    applyAll() {
      if (this.checkboxVal) {
        this.personalHealthCheckbox1 = true;
        this.personalHealthCheckbox2 = true;
      } else {
        this.personalHealthCheckbox1 = false;
        this.personalHealthCheckbox2 = false;
      }
    },
    toggleCheckbox({ value, option }) {
      if (!value) {
        this.checkboxVal = false;
      }
      if (option === 1) {
        this.personalHealthCheckbox1 = value;
      } else {
        this.personalHealthCheckbox2 = value;
      }
    },
    unSelect() {
      this.personalHealthCheckbox1 = false;
      this.personalHealthCheckbox2 = false;
      this.checkboxVal = false;
    },
  },
  created() {
    this.$store.dispatch("toggleSteps", true);
    this.$store.dispatch("setStep", 0);
  },
  beforeUnmount() {
    this.$store.dispatch("toggleSteps", false);
  },
};
</script>

<style scoped>
.shopping-cart {
  padding-top: 2rem;
  background: #e6eaf0;
}

.shopping-cart h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #26408a;
  margin-bottom: 1rem;
}

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
</style>