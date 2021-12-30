<template>
  <section class="search">
    <base-content-container>
      <div class="search-content">
        <el-row justify="space-between">
          <el-col :span="5">
            <p class="title">選擇服務</p>
            <p>身體檢查</p>
          </el-col>
          <el-col :span="5">
            <p class="title">預約日期</p>
            <p>2021/12/20</p>
          </el-col>
          <el-col :span="5">
            <p class="title">預約時間</p>
            <p>上午 10:00</p>
          </el-col>
          <el-col :span="5">
            <button>
              <img
                src="../assets/icon-search@2x.png"
                class="search-icon"
                alt=""
              />
              搜尋
            </button>
          </el-col>
        </el-row>
      </div>
    </base-content-container>
  </section>
  <meds-slider></meds-slider>
  <latest-offers-section></latest-offers-section>
</template>

<script>
import MedsSlider from "./MedsSlider.vue";
import LatestOffersSection from "./LatestOffersSection.vue";

export default {
  components: {
    MedsSlider,
    LatestOffersSection,
  },
};
</script>

<style>
.search {
  background-color: #e5e5e5;
  padding: 2rem 0;
}

.search p {
  margin: 0;
}

.search .title {
  color: grey;
  font-size: 14px;
  line-height: 20px;
}

.search .el-col {
  /* padding: 8px; */
}

.search .el-row {
  align-items: center;
}

.search .search-content {
  background-color: #fff;
  border-radius: 128px;
  padding: 8px 8px 8px 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  margin-top: -70px;
  position: relative;
  z-index: 1;
}

.search .el-button.el-button--primary {
  background-color: #7690da;
  border-color: #7690da;
  padding: 16px;
  width: 100%;
  border-radius: 100px;
}

.search .search-icon {
  width: 18px;
  margin-right: 0.5rem;
  /* margin-right: 0.3rem; */
  /* margin-top: 0.6rem; */
}

.search button {
  background-color: #7690da;
  border: 1px solid #7690da;
  padding: 16px;
  width: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  /* font-size: 18px; */
  font-weight: 700;
  line-height: 28px;
}
</style>