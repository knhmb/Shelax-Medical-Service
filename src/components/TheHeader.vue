<template>
  <header class="header">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="12" :lg="12">
          <img
            src="../assets/brand-logo@2x.png"
            @click="$router.push('/')"
            class="logo"
            alt=""
          />
        </el-col>
        <el-col :sm="24" :md="12" :lg="12">
          <el-menu
            class="el-menu-demo top-header"
            mode="horizontal"
            :ellipsis="false"
          >
            <el-sub-menu popper-class="language" index="1">
              <template #title>{{ menuVal }}</template>
              <el-menu-item
                @click="setLanguage({ option: '繁體中文', lang: 'zh-HK' })"
                index="1-1"
                >繁體中文</el-menu-item
              >
              <el-menu-item
                @click="setLanguage({ option: '简体中文', lang: 'zh-CN' })"
                index="1-2"
                >简体中文</el-menu-item
              >
              <el-menu-item
                @click="setLanguage({ option: 'English', lang: 'en-US' })"
                index="1-3"
                >English</el-menu-item
              >
            </el-sub-menu>
            <el-menu-item
              @click="$router.push('/shopping-cart')"
              index="2"
              v-if="
                isLoggedIn &&
                $route.path !== '/vendor-registration' &&
                $route.path !== '/vendor-forgot-password'
              "
            >
              <img src="../assets/icon-cart@2x.png" class="cart-icon" alt="" />
              {{ $t("shopping_cart") }}
            </el-menu-item>
            <el-menu-item
              v-if="
                !isLoggedIn &&
                $route.path !== '/vendor-registration' &&
                $route.path !== '/vendor-forgot-password'
              "
              index="3"
              @click="openDialog('login')"
              >{{ $t("menu_login") }}</el-menu-item
            >
            <el-sub-menu
              v-if="
                isLoggedIn &&
                $route.path !== '/vendor-registration' &&
                $route.path !== '/vendor-forgot-password'
              "
              index="4"
            >
              <template #title>你 人, {{ currentUser }}</template>
              <el-menu-item
                @click="$router.push({ name: 'personal-information' })"
                index="4-1"
                >{{ $t("view_profile") }}</el-menu-item
              >
              <el-menu-item @click="logout" index="4-2">{{
                $t("menu_logout")
              }}</el-menu-item>
            </el-sub-menu>
            <li
              class="login-btn"
              v-if="
                $route.path !== '/vendor-registration' &&
                $route.path !== '/vendor-forgot-password'
              "
            >
              <!-- <el-button class="my-login-btn" type="primary">Login</el-button> -->
              <button
                v-if="!isLoggedIn"
                @click="openDialog('register')"
                class="my-login-btn"
              >
                {{ $t("menu_register") }}
              </button>
            </li>
          </el-menu>
        </el-col>
        <!-- <el-col class="login-btn" :span="7">
          <el-button type="primary">Login</el-button>
        </el-col> -->
      </el-row>
    </base-container>
    <hr />
    <!-- <base-container> -->
    <div
      class="bottom-container"
      v-if="
        $route.path !== '/vendor-registration' &&
        $route.path !== '/vendor-forgot-password'
      "
    >
      <!-- <el-radio-group
        class="hidden-md-and-up"
        v-model="isCollapse"
        style="margin-bottom: 20px"
      >
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->

      <!-- <div
        @click="isCollapse = !isCollapse"
        :class="{ open: openNav }"
        class="nav hidden-md-and-up"
      >
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>

      <el-menu
        v-if="!isSteps && isCollapse"
        class="el-menu-demo bottom-header hidden-md-and-up"
        :ellipsis="true"
      >
        <template v-for="item in menuItems" :key="item.id">
          <el-menu-item
            @click="navigateItem(item.slug)"
            :index="item.displayOrder"
            v-if="item.slug !== 'servcat-genetic-testing'"
            >{{ item.name }}</el-menu-item
          >
          <el-sub-menu
            v-if="item.slug === 'servcat-genetic-testing'"
            :index="item.displayOrder"
          >
            <template #title>{{ item.name }}</template>
            <el-menu-item
              @click="navigateItem(menuItem.slug)"
              v-for="menuItem in subMenuItems"
              :key="menuItem.id"
              :index="item.id + '-' + menuItem.id"
              >{{ menuItem.name }}</el-menu-item
            >
          </el-sub-menu>
        </template>
      </el-menu> -->

      <carousel :breakpoints="breakpoints" class="hidden-md-and-up">
        <slide v-for="item in menuItems" :key="item.id">
          <el-menu
            v-if="!isSteps"
            class="el-menu-demo bottom-header"
            :ellipsis="false"
            mode="horizontal"
          >
            <!-- <template v-for="item in menuItems" :key="item.id"> -->
            <el-menu-item
              @click="navigateItem(item.slug)"
              :index="item.displayOrder"
              v-if="item.slug !== 'servcat-genetic-testing'"
              >{{ item.name }}</el-menu-item
            >
            <el-sub-menu
              v-if="item.slug === 'servcat-genetic-testing'"
              :index="item.displayOrder"
            >
              <template #title>{{ item.name }}</template>
              <el-menu-item
                @click="navigateItem(menuItem.slug)"
                v-for="menuItem in subMenuItems"
                :key="menuItem.id"
                :index="item.id + '-' + menuItem.id"
                >{{ menuItem.name }}</el-menu-item
              >
              <!-- <el-menu-item :index="item.displayOrder + '-' + '1'"
              >DNA基因檢查</el-menu-item
            >
            <el-menu-item :index="item.displayOrder + '-' + '2'"
              >腫瘤基因檢查</el-menu-item
            > -->
            </el-sub-menu>
            <!-- </template> -->
          </el-menu>
        </slide>

        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>

      <el-menu
        v-if="!isSteps"
        class="el-menu-demo bottom-header hidden-sm-and-down"
        mode="horizontal"
        :ellipsis="false"
      >
        <template v-for="item in menuItems" :key="item.id">
          <el-menu-item
            @click="navigateItem(item.slug)"
            :index="item.displayOrder"
            v-if="item.slug !== 'servcat-genetic-testing'"
            >{{ item.name }}</el-menu-item
          >
          <el-sub-menu
            v-if="item.slug === 'servcat-genetic-testing'"
            :index="item.displayOrder"
          >
            <template #title>{{ item.name }}</template>
            <el-menu-item
              @click="navigateItem(menuItem.slug)"
              v-for="menuItem in subMenuItems"
              :key="menuItem.id"
              :index="item.id + '-' + menuItem.id"
              >{{ menuItem.name }}</el-menu-item
            >
          </el-sub-menu>
        </template>
      </el-menu>
      <div v-else class="steps">
        <el-steps :active="step" finish-status="success">
          <el-step title="選擇訂單"></el-step>
          <el-step title="填寫資料"></el-step>
          <el-step title="付款"></el-step>
        </el-steps>
      </div>
    </div>

    <!-- </base-container> -->
  </header>
  <Register
    @dialogClosed="closingDialog"
    @toggleAuth="changeAuth"
    :selectedOption="selectedOption"
    :dialogVisible="dialogVisible"
  />
</template>

<script>
import Register from "./register/Register.vue";
import { ElNotification } from "element-plus";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Register,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      dialogVisible: false,
      isCollapse: false,
      selectedOption: "login",
      menuVal: "繁體中文",
      // lang: null,
      trigger: 1,
      breakpoints: {
        300: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/reset-password") {
        this.selectedOption = "";
        this.dialogVisible = true;
      }
      console.log(this.$route);
      console.log(this.$route.path);
    },
  },
  computed: {
    isSteps() {
      return this.$store.getters.isSteps;
    },
    step() {
      return this.$store.getters.step;
    },
    menuItems() {
      console.log(this.trigger);
      return this.$store.getters["dashboard/menuItems"];
    },
    subMenuItems() {
      return this.$store.getters["dashboard/subMenuItems"];
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    openDialog(value) {
      this.selectedOption = value;
      this.dialogVisible = true;
      console.log(this.dialogVisible);
    },
    closingDialog(event) {
      this.dialogVisible = false;
      console.log(event);
    },
    changeAuth(event) {
      this.selectedOption = event;
    },
    getMenuItems() {
      this.$store.dispatch("dashboard/getMenuItems");
    },
    getSubMenuItems() {
      this.$store.dispatch("dashboard/getGenericTestingSubMenuItem");
    },
    setLanguage({ option, lang }) {
      this.menuVal = option;
      // this.lang = lang;
      this.$store.commit("SET_LANG", lang);
      localStorage.setItem("lang", lang);
      this.$i18n.locale = lang;
      this.getMenuItems();
      this.getSubMenuItems();
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
    navigateItem(slug) {
      this.$store
        .dispatch("search/searchMenuItem", slug)
        .then(() => {
          this.isCollapse = false;
          this.$router.push({
            name: "search",
            query: { q: `?filter=servicecat:${slug}` },
          });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
    },
  },
  created() {
    const language = localStorage.getItem("lang");
    if (language === "zh-HK") {
      this.menuVal = "繁體中文";
    } else if (language === "zh-CN") {
      this.menuVal = "简体中文";
    } else if (language === "en-US") {
      this.menuVal = "English";
    }
    this.getMenuItems();
    this.getSubMenuItems();
  },
};
</script>

<style>
.header {
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08),
    inset 0px -1px 0px rgba(0, 0, 0, 0.08);
  /* min-width: 320px; */
}

.header .nav div {
  height: 0.125rem;
  background: black;
  margin: 0.3125rem 0;
  border-radius: 1.5rem;
  position: absolute;
  transition: 0.5s ease-out;
}

.header .nav {
  display: block;
  /* margin-left: 2rem; */
  width: 2.8125rem;
  /* background: #111; */
  height: 2.8125rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  z-index: 2;
  transition: 0.5s ease-out;
}

.header .one {
  width: 50%;
  right: 0.75rem;
  transform: translateY(-0.5rem);
}

.header .two {
  width: 50%;
  right: 0.75rem;
}
.header .three {
  width: 50%;
  right: 0.75rem;
  transform: translateY(0.5rem);
}

/* .header .nav:hover div.two {
  width: 50%;
} */

.header .el-row {
  align-items: center;
}

.header .el-menu {
  border-bottom: none;
  background: transparent;
}

.el-menu > .el-menu-item {
  border: none !important;
}

.header .el-menu > .el-menu-item.is-active {
  color: #303133 !important;
  border: none !important;
}

/* .header .el-menu--horizontal .el-menu-item.is-active {
  color: #303133;
  border: none;
} */

.header .el-menu--horizontal .el-menu-item,
.header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
  padding: 0 1rem;
}

.header .el-menu--horizontal.top-header {
  justify-content: end;
}

.header .el-menu--horizontal.top-header .el-menu-item,
.header .el-menu--horizontal.top-header .el-sub-menu .el-sub-menu__title {
  font-size: 12px;
}

.header .el-menu--horizontal.bottom-header {
  /* margin-top: -0.5rem; */
}

.header .logo {
  width: 60px;
  cursor: pointer;
}

.header hr {
  border-top: 1px solid #eee;
  margin: 0;
  /* margin-top: -0.1rem; */
  /* position: relative;
  z-index: 1; */
}

.header .el-button--primary {
  padding: 8px 16px;
  border-radius: 100px;
  justify-content: end;
  font-size: 12px;
  background-color: #7690da;
}

.header .login-btn {
  /* text-align: end; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0;
  min-width: fit-content;
}

.header .bottom-container {
  padding: 0 2rem;
}

.header .bottom-container .steps {
  padding: 0 20rem;
  margin-top: 0.5rem;
}

.header .bottom-container .steps .el-step__head.is-process {
  color: #7690da;
  border-color: #7690da;
}

.header .bottom-container .steps .el-step__head.is-success {
  color: #7690da;
  border-color: #7690da;
}

.header
  .bottom-container
  .steps
  .el-step__head.is-success
  .el-step__icon.is-text {
  background-color: #7690da;
}

.header .bottom-container .steps .el-icon.el-step__icon-inner.is-status {
  color: #fff;
}

.header .bottom-container .steps .el-step__title.is-success,
.header .bottom-container .steps .el-step__title.is-process {
  color: #262626;
}

.header .my-login-btn {
  padding: 8px 16px;
  border-radius: 100px;
  justify-content: end;
  font-size: 12px;
  background-color: #7690da;
  color: #fff;
  border: 1px solid #7690da;
  outline-color: none;
  border-image: none;
  cursor: pointer;
}

.header .my-login-btn:hover {
  background-color: #7691dad4;
}

.header .cart-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.header .carousel__prev,
.header .carousel__next {
  display: none;
}

.el-menu--horizontal.language .el-menu-item {
  font-size: 12px;
}

@media screen and (max-width: 991px) {
  .header .logo {
    margin: 1rem auto;
    display: block;
  }
}

@media screen and (max-width: 865px) {
  .header .bottom-container .steps {
    padding: 0 7rem;
  }
}

@media screen and (max-width: 540px) {
  .header .el-menu--horizontal.top-header {
    justify-content: center;
  }

  .header .el-menu--horizontal.top-header .el-menu-item,
  .header .el-menu--horizontal.top-header .el-sub-menu .el-sub-menu__title {
    padding: 0 1rem 0 0;
  }
}

@media screen and (max-width: 490px) {
  .header .bottom-container .steps {
    padding: 0 2rem;
  }
}
</style>