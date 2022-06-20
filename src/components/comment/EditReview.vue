<template>
  <section v-if="editForm" class="edit-review">
    <p>{{ $t("rate_experience") }}</p>
    <el-rate
      :void-color="'#c6c6c6'"
      :colors="colors"
      v-model="value"
      size="large"
    />
    <el-form label-position="top">
      <el-row>
        <!-- <el-col>
          <el-form-item class="first-label" label="評論標題">
            <el-input v-model="title" placeholder="請輸入評論標題"></el-input>
          </el-form-item>
        </el-col> -->
        <el-col>
          <el-form-item label="告訴我們你的想法">
            <el-input
              v-model="description"
              placeholder="你覺得這次的體驗如何呢？請跟我們分享你的想法"
              type="textarea"
              rows="5"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="btn-actions">
        <el-button @click="cancel">{{ $t("cancel_button") }}</el-button>
        <el-button @click="edit">{{ $t("submit_button") }}</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["editForm", "commentsId", "rating", "comments"],
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 3,
      title: "",
      description: "",
    };
  },
  methods: {
    edit() {
      const data = {
        rating: this.value,
        comments: this.description,
        commentsId: this.commentsId,
      };
      console.log(data);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/editComment", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Comment has been editted",
              type: "success",
            });
            this.$store.dispatch("profile/getComments");
            this.$emit("closeEditReview");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/editComment", data).then(() => {
                ElNotification({
                  title: "Success",
                  message: "Comment has been editted",
                  type: "success",
                });
                this.$store.dispatch("profile/getComments");
                this.$emit("closeEditReview");
              });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: this.$t(err.response.data.message),
                type: "error",
              });
              this.$store.dispatch("auth/logout");
            });
        });
    },
    cancel() {
      this.$emit("closeEditReview");
    },
  },
  created() {
    this.value = this.rating;
    this.description = this.comments;
  },
};
</script>

<style scoped>
.edit-review p {
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

.edit-review .el-rate :deep(.el-icon) {
  font-size: 30px;
}

.edit-review .el-row {
  margin-top: 2rem;
  border-bottom: 0.8px solid #e0e0e0;
}

.edit-review .el-form :deep(.el-form-item__label) {
  padding-bottom: 0.5rem;
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.edit-review .btn-actions {
  text-align: end;
}

.edit-review .btn-actions .el-button {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #525252;
  margin-top: 1rem;
  padding: 12px 1.5rem;
}

.edit-review .btn-actions .el-button:first-of-type {
  color: #525252;
  border: none;
}

.edit-review .btn-actions .el-button:last-of-type {
  color: #fff;
  background: #2d99a0;
  border-radius: 4px;
  border-color: #2d99a0;
}
</style>