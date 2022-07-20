<template>
  <div id="customer-reviews">
    <div class="customer-reviews-content">
      <h4>{{ $t("customers_review") }}</h4>
      <el-row :gutter="10">
        <el-col :sm="24" :md="2" :lg="2">
          <div class="rating">
            <span class="rate">{{
              singleItemDetail.averageRating
                ? singleItemDetail.averageRating.slice(0, 3)
                : "0"
            }}</span>
          </div>
        </el-col>
        <el-col class="input-rate" :sm="24" :md="6" :lg="6">
          <el-rate
            :colors="colors"
            :model-value="singleItemDetail.averageRating"
            disabled
            text-color="#ff9900"
          >
          </el-rate>
          <p class="rate-text">
            {{
              $t("comments_count", {
                commentsCount: singleItemDetail.commentsCount,
              })
            }}
          </p>
        </el-col>
        <el-col :sm="24" :md="16" :lg="16">
          <div class="select-input">
            <el-select class="m-2" :placeholder="$t('highest_to_lowest_score')">
              <el-option>{{ $t("highest_to_lowest_score") }}</el-option>
              <el-option>{{ $t("lowest_to_highest_score") }}</el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom-section">
      <el-row v-for="comment in singleItemDetail.comments" :key="comment.id">
        <el-col :sm="24" :md="2" :lg="2">
          <el-avatar :size="50" :src="comment.avatar"></el-avatar>
        </el-col>
        <el-col class="avatar" :sm="24" :md="22" :lg="22">
          <p class="avatar-name">
            {{ comment.lastName }} {{ comment.givenName }}
          </p>
          <!-- <el-rate
            :colors="colors"
            :model-value="comment.rating"
            disabled
            text-color="#8d8d8d"
            show-score
            :score-template="comment.comments"
          >
          </el-rate> -->
          <el-rate
            :colors="colors"
            :model-value="comment.rating"
            disabled
            text-color="#8d8d8d"
          >
          </el-rate>
          <Comment
            :comment="comment.comments"
            :updated-at="comment.updatedAt"
          />
        </el-col>
      </el-row>
      <div class="submit-review-btn">
        <el-button @click="showMore()">{{ $t("show_more") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  components: {
    Comment,
  },
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
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
    showMore() {
      const data = {
        itemId: this.singleItemDetail.basicInfo.id,
        size: this.singleItemDetail.comments.length + 10,
      };
      console.log(data);
      this.$store.dispatch("search/loadComments", data);
    },
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

#customer-reviews .submit-review-btn {
  text-align: center;
  margin-top: 1.5rem;
}

#customer-reviews .el-button {
  /* width: 100%; */
  padding: 0 8rem;
  border-radius: 8px;
  border-color: #525252;
  margin-bottom: 2rem;
}

@media screen and (max-width: 991px) {
  #customer-reviews .input-rate,
  #customer-reviews .select-input {
    text-align: center;
    margin-top: 1rem;
  }

  #customer-reviews .bottom-section {
    text-align: center;
  }
}

@media screen and (max-width: 414px) {
  #customer-reviews .el-button {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}
</style>