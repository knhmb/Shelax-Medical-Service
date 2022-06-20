<template>
  <section class="first-tab">
    <template v-for="comment in comments" :key="comment">
      <div v-if="!comment.commented" class="card">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="4">
            <img :src="comment.thumbnail" alt="" />
          </el-col>
          <el-col :xs="24" :sm="20">
            <h4>{{ comment.itemName }}</h4>
            <p>
              地址: {{ comment.providerName }} - {{ comment.providerAddress }}
            </p>
            <p>
              預約日期及時間: {{ comment.reservedDate }} -
              {{ comment.reservedTime }}
            </p>
          </el-col>
        </el-row>
        <div v-if="!comment.isAddReview" class="btn-content">
          <el-button @click="comment.isAddReview = true">{{
            $t("leave_comment")
          }}</el-button>
        </div>
        <add-review
          :item-id="comment.itemId"
          :order-id="comment.orderId"
          :order-item-id="comment.orderItemId"
          @closeAddReview="comment.isAddReview = false"
          v-else
        ></add-review>
      </div>
    </template>

    <!-- <div class="card">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="4">
          <img src="../../assets/Rectangle-77-1.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="20">
          <h4>綜合個人健康體檢套餐</h4>
          <p>地址: ＸＸＸＸ健康中心 - 香港九龍城區九龍仔聯福道17號</p>
          <p>預約日期及時間: 2022年1月21日 - 14:30</p>
        </el-col>
      </el-row>
      <div class="btn-content">
        <el-button>留下評價</el-button>
      </div>
    </div> -->
  </section>
</template>

<script>
import AddReview from "./AddReview.vue";

export default {
  components: {
    AddReview,
  },
  data() {
    return {
      isAddReview: false,
    };
  },
  computed: {
    comments() {
      return this.$store.getters["profile/comments"];
    },
  },
};
</script>

<style scoped>
.first-tab .card {
  background: #ffffff;
  padding: 24px 24px 16px;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 1rem;
}

.first-tab .card .el-row {
  align-items: center;
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.first-tab .card img {
  width: 100%;
  border-radius: 4px;
}

.first-tab .card h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.first-tab .card p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.first-tab .card .btn-content {
  text-align: end;
  margin-top: 1rem;
}

.first-tab .card .btn-content .el-button {
  background: #2d99a0;
  border-radius: 4px;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
}
</style>