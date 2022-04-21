<template>
  <section class="member-profile">
    <base-content-container>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="6">
          <div class="member-card-avatar">
            <el-avatar icon :size="100" shape="circle">
              <el-icon><camera /></el-icon>
            </el-avatar>
            <p>Chan Tai Man</p>
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
                  會員資料
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
                  常用成員
                </li>
              </router-link>

              <li>評價管理</li>
              <li>預約記錄</li>
              <li>我的收藏</li>
              <li class="points">Shelax Points <span>999</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :sm="24" :lg="18">
          <router-view></router-view>
        </el-col>
      </el-row>
    </base-content-container>
  </section>
</template>

<script>
import { Camera } from "@element-plus/icons-vue";

export default {
  components: {
    Camera,
  },
  data() {
    return {
      infoImg: require("../assets/icon-infomation-default@2x.png"),
      otherMemberImg: require("../assets/icon-member-default@2x.png"),
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
        } else if (this.$route.path === "/member-profile/other-member") {
          this.otherMemberImg = require("../assets/icon-member-pressed@2x.png");
          this.infoImg = require("../assets/icon-infomation-default@2x.png");
        }
      },
    },
  },
  methods: {
    hover(option) {
      if (option === "info") {
        this.infoImg = require("../assets/icon-infomation-pressed@2x.png");
      } else if (option === "other-member") {
        this.otherMemberImg = require("../assets/icon-member-pressed@2x.png");
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
      }
    },
  },
};
</script>

<style scoped>
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