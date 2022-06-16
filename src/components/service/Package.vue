<template>
  <el-row class="wishlist-header">
    <el-col :sm="24" :md="12" :lg="12">
      <h3>{{ singleItemDetail.basicInfo.itemName }}</h3>
    </el-col>
    <el-col class="wishlist" :sm="24" :md="12" :lg="12">
      <img
        @mouseleave="imgLeave"
        @mouseover="imgHover"
        @click="imgSelected"
        :src="wishIcon"
        alt=""
      />
      <span>{{
        !singleItemDetail.bookmarked ? $t("add_to_wishlist") : $t("bookmarked")
      }}</span>
    </el-col>
  </el-row>
  <el-row class="wishlist-text">
    <el-col class="border">
      <img src="../../assets/icon-shop@2x.png" alt="" />
      <span>{{ singleItemDetail.basicInfo.providerName }}</span>
    </el-col>
    <el-col class="border">
      <img src="../../assets/icon-location@2x.png" alt="" />
      <span>{{ singleItemDetail.basicInfo.providerAddress }}</span>
    </el-col>
    <el-col :span="24">
      <el-row>
        <el-col class="border" :sm="24" :md="8" :lg="8">
          <img src="../../assets/icon-time@2x.png" alt="" />
          <span>{{
            $t("singleItemDetail.basicInfo.validPeriod", {
              validPeriod: singleItemDetail.basicInfo.validPeriod,
            })
          }}</span>
        </el-col>
        <el-col class="border" :sm="24" :md="7" :lg="7">
          <img src="../../assets/icon-refund@2x.png" alt="" />
          <span>{{
            singleItemDetail.basicInfo.isFreeCancel ? $t("free_cancel") : ""
          }}</span>
        </el-col>
        <el-col class="border" :sm="24" :md="9" :lg="9">
          <img src="../../assets/icon-qrcode@2x.png" alt="" />
          <span>{{
            singleItemDetail.basicInfo.isQRCodeRedemption
              ? $t("qr_code_redemption")
              : ""
          }}</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row class="wishlist-p">
    <el-col>
      <p>
        {{ singleItemDetail.basicInfo.providerInformation }}
      </p>
    </el-col>
  </el-row>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      wishIcon: require("../../assets/icon-wish-off@2x.png"),
    };
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
  },
  methods: {
    imgHover() {
      if (this.wishIcon === require("../../assets/icon-wish-on@2x.png")) {
        return;
      } else {
        this.wishIcon = require("../../assets/icon-wish-hover@2x.png");
      }
    },
    imgLeave() {
      if (this.wishIcon === require("../../assets/icon-wish-on@2x.png")) {
        return;
      } else {
        this.wishIcon = require("../../assets/icon-wish-off@2x.png");
      }
    },
    imgSelected() {
      if (this.wishIcon === require("../../assets/icon-wish-on@2x.png")) {
        this.wishIcon = require("../../assets/icon-wish-off@2x.png");
        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("profile/removeWishlist", {
              itemId: this.singleItemDetail.basicInfo.id,
            });
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("profile/removeWishlist", {
                  itemId: this.singleItemDetail.basicInfo.id,
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
      } else if (
        this.wishIcon === require("../../assets/icon-wish-off@2x.png") ||
        this.wishIcon === require("../../assets/icon-wish-hover@2x.png")
      ) {
        this.wishIcon = require("../../assets/icon-wish-on@2x.png");
        this.$store
          .dispatch("auth/checkAccessToken")
          .then(() => {
            this.$store.dispatch("profile/addWishlist", {
              itemId: this.singleItemDetail.basicInfo.id,
            });
          })
          .catch(() => {
            this.$store
              .dispatch("auth/checkRefreshToken")
              .then(() => {
                this.$store.dispatch("profile/addWishlist", {
                  itemId: this.singleItemDetail.basicInfo.id,
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
      }
    },
  },
  created() {
    console.log(this.singleItemDetail);
    if (this.singleItemDetail.bookmarked) {
      this.wishIcon = require("../../assets/icon-wish-on@2x.png");
    } else {
      this.wishIcon = require("../../assets/icon-wish-off@2x.png");
    }
  },
};
</script>

<style scoped>
.service .checkup-package .wishlist-header {
  align-items: baseline;
  margin-bottom: 2rem;
}

.service .checkup-package h3 {
  margin: 0;
  color: #262626;
}

.service .checkup-package .wishlist {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.service .checkup-package .wishlist img {
  width: 24px;
  margin-right: 0.3rem;
  cursor: pointer;
}

.service .checkup-package .wishlist-text {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.service .checkup-package .wishlist-text .border {
  /* display: flex;
  align-items: center; */
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
}

.service .checkup-package .wishlist-text img {
  width: 20px;
  margin-right: 0.5rem;
}

.service .checkup-package .wishlist-p .el-col {
  margin-bottom: 1rem;
}

.service .checkup-package .wishlist-text span,
.service .checkup-package .wishlist-p .el-col p,
.service .checkup-package .wishlist-p .el-col ul li {
  color: #525252;
  font-size: 14px;
}

.service .checkup-package .wishlist-p .el-col p,
.service .checkup-package .wishlist-p .el-col ul li {
  line-height: 20px;
  letter-spacing: 0.1px;
}

.service .checkup-package .wishlist-p .el-col ul {
  padding: 0;
  padding-left: 1.5rem;
}

@media screen and (max-width: 1024px) {
  .service .checkup-package .wishlist-text .el-col-24 .border {
    border-bottom: 1px solid #e0e0e0;
  }

  .service .checkup-package .wishlist-text .el-col-24:last-child {
    /* border-bottom: none; */
  }
}

@media screen and (max-width: 414px) {
  .service .checkup-package .wishlist {
    justify-content: flex-start;
    margin-top: 0.5rem;
  }

  .service .checkup-package h3 {
    /* font-size: 12px; */
    /* text-align: center; */
  }

  .service .checkup-package .wishlist-text .el-col-24:last-child {
    border-bottom: none;
  }

  .service .checkup-package .wishlist-text .el-col-24 .border {
    border-bottom: 1px solid #e0e0e0;
  }

  .service .checkup-package .wishlist-p .el-col p,
  .service .checkup-package .wishlist-p .el-col ul li {
    font-size: 10px;
  }
}
</style>