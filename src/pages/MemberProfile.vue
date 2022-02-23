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
                <li @click="navigate">會員資料</li>
              </router-link>

              <li>常用成員</li>
              <li>評價管理</li>
              <li>預約記錄</li>
              <li>我的收藏</li>
              <li>Shelax Points <span>999</span></li>
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
}

.member-profile .member-card-options ul li:hover {
  color: #7690da;
}

.member-profile .member-card-options ul li:last-of-type {
  display: flex;
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

@media screen and (max-width: 1199px) {
  .member-profile .member-card-options {
    margin-bottom: 1rem;
  }
}
</style>