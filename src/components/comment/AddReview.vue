<template>
  <section class="add-review">
    <p>{{ $t("rate_experience") }}</p>
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
            <el-input v-model="title" placeholder="請輸入評論標題"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item :label="$t('tell_us_what_you_think')">
            <el-input
              v-model="description"
              :placeholder="$t('your_experience')"
              type="textarea"
              rows="5"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="btn-actions">
        <el-button @click="cancel">{{ $t("cancel_button") }}</el-button>
        <el-button @click="submit">{{ $t("submit_button") }}</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["itemId", "orderId", "orderItemId"],
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 3,
      title: "",
      description: "",
    };
  },
  methods: {
    submit() {
      const data = {
        rating: this.value,
        comments: this.title,
        itemId: this.itemId,
        orderId: this.orderId,
        orderItemId: this.orderItemId,
      };
      console.log(data);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/postComment", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Comment has been added",
              type: "success",
            });
            this.$store.dispatch("profile/getComments");
            this.$emit("closeAddReview");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/postComment", data).then(() => {
                ElNotification({
                  title: "Success",
                  message: "Comment has been added",
                  type: "success",
                });
                this.$store.dispatch("profile/getComments");
                this.$emit("closeAddReview");
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
      this.value = 3;
      this.description = "";
      this.$emit("closeAddReview");
    },
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