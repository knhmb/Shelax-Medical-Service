<template>
  <section v-if="!editForm" class="view-review">
    <el-row>
      <el-col>
        <el-rate
          :void-color="'#c6c6c6'"
          :colors="colors"
          :model-value="rating"
          disabled
          size="large"
        ></el-rate>
      </el-col>
      <!-- <el-col>
        <h4>科信弟帽明第果干對科信弟帽明第果干對kkk</h4>
      </el-col> -->
      <el-col>
        <p>
          {{ comments }}
        </p>
        <!-- <p>
          具祖唱士語住手向，員几英師「都學」司歡神到他校止千雪直！會喝木裏哥心瓜科去玩給室言才，道冒自竹羽杯荷三寸久掃燈到幫？游爬村連少夏村了條爸旁兌多乞，目誰弓民您誰木布走村嗎浪九？嗎弟流目兌葉。
        </p> -->
      </el-col>
    </el-row>
  </section>
  <edit-review
    @closeEditReview="$emit('closeEditReview')"
    :edit-form="editForm"
    :comments-id="commentsId"
    :rating="rating"
    :comments="comments"
  ></edit-review>
</template>

<script>
import EditReview from "./EditReview.vue";

export default {
  components: {
    EditReview,
  },
  props: ["rating", "comments", "editForm", "commentsId"],
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 3,
    };
  },
  created() {
    console.log(this.rating);
    console.log(this.xomments);
  },
};
</script>

<style>
.past-comment .el-rate {
  margin-bottom: 2.5rem;
}

.past-comment .el-rate .el-icon {
  font-size: 30px;
  margin-top: 1rem;
}

.past-comment h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.past-comment p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-top: 1.5rem;
}
</style>