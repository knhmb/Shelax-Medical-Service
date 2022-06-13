<template>
  <section class="member-profile">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="6">
          <div class="member-card-avatar">
            <el-avatar icon :size="100" shape="circle">
              <img v-if="imgSrc" class="image-avatar" :src="imgSrc" alt="" />
              <label for="file-upload">
                <el-icon style="cursor: pointer"><camera /></el-icon>
              </label>
            </el-avatar>
            <input id="file-upload" @change="onFileChange" type="file" />
            <p>{{ userDetails.givenName }}</p>
          </div>
          <div class="member-card-options">
            <ul>
              <router-link
                :to="{ name: 'personal-information' }"
                v-slot="{ navigate }"
              >
                <li
                  :style="{
                    color:
                      $route.path === '/member-profile/personal-information'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('info')"
                  @mouseover="hover('info')"
                  @click="navigate"
                >
                  <img :src="infoImg" alt="" />
                  {{ $t("member_profile") }}
                </li>
              </router-link>
              <router-link :to="{ name: 'other-member' }" v-slot="{ navigate }">
                <li
                  :style="{
                    color:
                      $route.path === '/member-profile/other-member'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('other-member')"
                  @mouseover="hover('other-member')"
                  @click="navigate"
                >
                  <img :src="otherMemberImg" alt="" />
                  {{ $t("regular_members") }}
                </li>
              </router-link>
              <router-link :to="{ name: 'comment' }" v-slot="{ navigate }">
                <li
                  :style="{
                    color:
                      $route.path === '/member-profile/comment'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('comment')"
                  @mouseover="hover('comment')"
                  @click="navigate"
                >
                  <img :src="commentImg" alt="" />
                  {{ $t("reviews_management") }}
                </li>
              </router-link>
              <router-link :to="{ name: 'booking' }" v-slot="{ navigate }">
                <li
                  :style="{
                    color:
                      $route.path === '/member-profile/booking'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('booking')"
                  @mouseover="hover('booking')"
                  @click="navigate"
                >
                  <img :src="bookingImg" alt="" />
                  {{ $t("booking_records") }}
                </li>
              </router-link>
              <router-link :to="{ name: 'wishlist' }" v-slot="{ navigate }">
                <li
                  :style="{
                    color:
                      $route.path === '/member-profile/wishlist'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('wishlist')"
                  @mouseover="hover('wishlist')"
                  @click="navigate"
                >
                  <img :src="wishlistImg" alt="" />
                  {{ $t("my_wishlist") }}
                </li>
              </router-link>
              <router-link
                :to="{ name: 'shelax-points' }"
                v-slot="{ navigate }"
              >
                <li
                  class="points"
                  :style="{
                    color:
                      $route.path === '/member-profile/member-points'
                        ? '#7690da'
                        : '',
                  }"
                  @mouseleave="unhover('shelax-points')"
                  @mouseover="hover('shelax-points')"
                  @click="navigate"
                >
                  <p>
                    <img :src="pointsImg" alt="" />{{ $t("member_points") }}
                  </p>
                  <span>999</span>
                </li>
              </router-link>

              <!-- <li class="points">Shelax Points <span>999</span></li> -->
            </ul>
          </div>
        </el-col>
        <el-col :sm="24" :lg="18">
          <router-view> </router-view>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import { Camera } from "@element-plus/icons-vue";
import { ElMessage, ElNotification } from "element-plus";

export default {
  components: {
    Camera,
  },
  data() {
    return {
      imgSrc: null,
      infoImg: require("../assets/icon-infomation-default@2x.png"),
      otherMemberImg: require("../assets/icon-member-default@2x.png"),
      commentImg: require("../assets/icon-comment-default@2x.png"),
      bookingImg: require("../assets/icon-booking-default@2x.png"),
      wishlistImg: require("../assets/icon-bookmark-default@2x.png"),
      pointsImg: require("../assets/icon-reward-default@2x.png"),
    };
  },
  watch: {
    "$route.path": {
      deep: true,
      immediate: true,
      handler() {
        if (this.$route.path === "/member-profile/personal-information") {
          this.infoImg = require("../assets/icon-infomation-pressed@2x.png");
          this.otherMemberImg = require("../assets/icon-member-default@2x.png");
          this.commentImg = require("../assets/icon-comment-default@2x.png");
          this.bookingImg = require("../assets/icon-booking-default@2x.png");
          this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
          this.pointsImg = require("../assets/icon-reward-default@2x.png");
        } else if (this.$route.path === "/member-profile/other-member") {
          this.otherMemberImg = require("../assets/icon-member-pressed@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
          this.commentImg = require("../assets/icon-comment-default@2x.png");
          this.bookingImg = require("../assets/icon-booking-default@2x.png");
          this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
          this.pointsImg = require("../assets/icon-reward-default@2x.png");
        } else if (this.$route.path === "/member-profile/comment") {
          this.commentImg = require("../assets/icon-comment-pressed@2x.png");
          this.otherMemberImg = require("../assets/icon-member-default@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
          this.bookingImg = require("../assets/icon-booking-default@2x.png");
          this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
          this.pointsImg = require("../assets/icon-reward-default@2x.png");
        } else if (this.$route.path === "/member-profile/booking") {
          this.bookingImg = require("../assets/icon-booking-pressed@2x.png");
          this.commentImg = require("../assets/icon-comment-default@2x.png");
          this.otherMemberImg = require("../assets/icon-member-default@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
          this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
          this.pointsImg = require("../assets/icon-reward-default@2x.png");
        } else if (this.$route.path === "/member-profile/wishlist") {
          this.wishlistImg = require("../assets/icon-bookmark-pressed@2x.png");
          this.bookingImg = require("../assets/icon-booking-default@2x.png");
          this.commentImg = require("../assets/icon-comment-default@2x.png");
          this.otherMemberImg = require("../assets/icon-member-default@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
          this.pointsImg = require("../assets/icon-reward-default@2x.png");
        } else if (this.$route.path === "/member-profile/member-points") {
          this.pointsImg = require("../assets/icon-reward-pressed@2x.png");
          this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
          this.bookingImg = require("../assets/icon-booking-default@2x.png");
          this.commentImg = require("../assets/icon-comment-default@2x.png");
          this.otherMemberImg = require("../assets/icon-member-default@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
        }
      },
    },
  },
  computed: {
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
  },
  methods: {
    onFileChange(event) {
      console.log(event);
      console.log(event.target.files[0]);
      const file = event.target.files[0];

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        ElMessage({
          message: "Image must be in jpeg or png format",
          type: "error",
        });
      } else {
        this.imgSrc = URL.createObjectURL(file);
      }
    },
    hover(option) {
      if (option === "info") {
        this.infoImg = require("../assets/icon-infomation-pressed@2x.png");
      } else if (option === "other-member") {
        this.otherMemberImg = require("../assets/icon-member-pressed@2x.png");
      } else if (option === "comment") {
        this.commentImg = require("../assets/icon-comment-pressed@2x.png");
      } else if (option === "booking") {
        this.bookingImg = require("../assets/icon-booking-pressed@2x.png");
      } else if (option === "wishlist") {
        this.wishlistImg = require("../assets/icon-bookmark-pressed@2x.png");
      } else if (option === "shelax-points") {
        this.pointsImg = require("../assets/icon-reward-pressed@2x.png");
      }
    },
    unhover(option) {
      if (
        option === "info" &&
        this.$route.path !== "/member-profile/personal-information"
      ) {
        this.infoImg = require("../assets/icon-infomation-default@2x.png");
      } else if (
        option === "other-member" &&
        this.$route.path !== "/member-profile/other-member"
      ) {
        this.otherMemberImg = require("../assets/icon-member-default@2x.png");
      } else if (
        option === "comment" &&
        this.$route.path !== "/member-profile/comment"
      ) {
        this.commentImg = require("../assets/icon-comment-default@2x.png");
      } else if (
        option === "booking" &&
        this.$route.path !== "/member-profile/booking"
      ) {
        this.bookingImg = require("../assets/icon-booking-default@2x.png");
      } else if (
        option === "wishlist" &&
        this.$route.path !== "/member-profile/wishlist"
      ) {
        this.wishlistImg = require("../assets/icon-bookmark-default@2x.png");
      } else if (
        option === "shelax-points" &&
        this.$route.path !== "/member-profile/member-points"
      ) {
        this.pointsImg = require("../assets/icon-reward-default@2x.png");
      }
    },
    checkAccessToken() {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/getAccount");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.statusCode === 401) {
            this.checkRefreshToken();
          }
        });
    },
    checkRefreshToken() {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.$store.dispatch("profile/getAccount");
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
          // this.$router.replace("/");
          this.$store.dispatch("auth/logout");
        });
    },
  },
  created() {
    this.checkAccessToken();
    this.$store.dispatch("profile/getCountryCode");
  },
};
</script>

<style scoped>
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
.image-avatar {
  width: 100%;
  border-radius: 100%;
  height: 100%;
  object-fit: cover;
}

input[type="file"] {
  display: none;
}
.member-profile {
  padding: 2rem 0;
}

.member-profile .member-card-avatar {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
}

.member-profile .member-card-avatar .el-avatar {
  position: relative;
  overflow: visible;
}

.member-profile .member-card-avatar .el-icon {
  position: absolute;
  top: 60%;
  right: -0.3rem;
  color: #525252;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  padding: 13px;
}

.member-profile .member-card-avatar .el-icon svg {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}

.member-profile .member-card-avatar p {
  margin-top: 0.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
}

.member-profile .member-card-options {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 16px;
  margin-top: 1rem;
}

.member-profile .member-card-options ul {
  list-style-type: none;
}

.member-profile .member-card-options ul li {
  margin-bottom: 1rem;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #525252;
  display: flex;
  align-items: center;
}

.member-profile .member-card-options ul li:hover {
  color: #7690da;
}

.member-profile .member-card-options ul li.points p {
  display: flex;
  align-items: center;
}

.member-profile .member-card-options ul li.points {
  justify-content: space-between;
}

.member-profile .member-card-options ul li span {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #feb431;
}

.member-profile .member-card-options ul a {
  text-decoration: none;
}

.member-profile .member-card-options img {
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
}

@media screen and (max-width: 1199px) {
  .member-profile .member-card-options {
    margin-bottom: 1rem;
  }
}
</style>
