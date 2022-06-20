<template>
  <section class="past-comment">
    <template v-for="comment in comments" :key="comment">
      <div v-if="comment.commented" class="card">
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
        <view-review
          :rating="comment.rating"
          :comments="comment.comments"
          :edit-form="comment.editForm"
          :comments-id="comment.commentsId"
          @closeEditReview="comment.editForm = false"
        ></view-review>
        <div v-if="!comment.editForm" class="btn-content">
          <el-button @click="deleteReview(comment.commentsId)">{{
            $t("delete")
          }}</el-button>
          <el-button @click="editReview(comment)">{{ $t("edit") }}</el-button>
        </div>
        <!-- <add-review></add-review> -->
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
      <view-review></view-review>
      <div class="btn-content">
        <el-button>刪除</el-button>
        <el-button>修改</el-button>
      </div>
    </div> -->
  </section>
</template>

<script>
import ViewReview from "./ViewReview.vue";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

export default {
  components: {
    ViewReview,
  },
  data() {
    return {
      editForm: false,
    };
  },
  computed: {
    comments() {
      return this.$store.getters["profile/comments"];
    },
  },
  methods: {
    editReview(comment) {
      comment.editForm = true;
    },
    deleteReview(commentId) {
      console.log(commentId);

      ElMessageBox.confirm(
        "This Comment Will Be Deleted, Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.$store
                .dispatch("profile/deleteComment", { commentsId: commentId })
                .then(() => {
                  ElMessage({
                    type: "success",
                    message: "Delete completed",
                  });
                  this.$store.dispatch("profile/getComments");
                });
            })
            .catch(() => {
              this.$store
                .dispatch("auth/checkRefreshToken")
                .then(() => {
                  this.$store
                    .dispatch("profile/deleteComment", {
                      commentsId: commentId,
                    })
                    .then(() => {
                      ElMessage({
                        type: "success",
                        message: "Delete completed",
                      });
                      this.$store.dispatch("profile/getComments");
                    });
                })
                .catch((err) => {
                  ElNotification({
                    title: "Error",
                    message: this.$t(err.response.data.message),
                    type: "error",
                  });
                });
            });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
};
</script>

<style scoped>
.past-comment .card {
  background: #ffffff;
  padding: 24px 24px 16px;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 1rem;
}

.past-comment .card .el-row {
  align-items: center;
  border-bottom: 0.8px solid #e0e0e0;
  padding-bottom: 1rem;
}

.past-comment .card img {
  width: 100%;
  border-radius: 4px;
}

.past-comment .card h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 0.5rem;
}

.past-comment .card p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.past-comment .card .btn-content {
  text-align: end;
  margin-top: 2rem;
}

.past-comment .card .btn-content .el-button {
  border-radius: 4px;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.past-comment .card .btn-content .el-button:last-of-type {
  background: #2d99a0;

  color: #ffffff;
}

.past-comment .card .btn-content .el-button:first-of-type {
  background: #ffffff;
  border-color: #fa5757;
  color: #fa5757;
}
</style>