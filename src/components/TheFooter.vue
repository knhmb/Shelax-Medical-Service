<template>
  <section
    class="footer"
    v-if="
      !isVendorRegistrationPath && !isVendorForgotPassPath && !isVendorLogin
    "
  >
    <div class="upper-footer">
      <base-content-container>
        <el-row justify="space-between">
          <el-col :sm="24" :md="5">
            <img
              src="../assets/brand-logo@2x.png"
              style="width: 108px; cursor: pointer"
              @click="$router.push('/')"
              alt=""
            />
            <span class="fade-effect"></span>
            <span>
              <img
                :src="facebookImg"
                @mouseover="changeImg('facebook')"
                @mouseleave="setDefaultImg('facebook')"
                class="social-media-icon"
                alt=""
              />
            </span>
            <span>
              <img
                @mouseover="changeImg('wechat')"
                @mouseleave="setDefaultImg('wechat')"
                :src="wechatImg"
                class="social-media-icon"
                alt=""
              />
            </span>
            <span>
              <img
                @mouseover="changeImg('twitter')"
                @mouseleave="setDefaultImg('twitter')"
                :src="twitterImg"
                class="social-media-icon"
                alt=""
              />
            </span>
            <span>
              <img
                @mouseover="changeImg('instagram')"
                @mouseleave="setDefaultImg('instagram')"
                :src="instagramImg"
                class="social-media-icon"
                alt=""
              />
            </span>
          </el-col>
          <el-col class="first" :sm="24" :md="5">
            <p>{{ $t("about_shelax") }}</p>
            <ul>
              <li @click="navigate('/about-us')">{{ $t("about_us") }}</li>
              <li @click="navigate('/shelax-points')">
                {{ $t("shelax_points") }}
              </li>
              <li @click="navigate('/contact-us')">{{ $t("contact_us") }}</li>
              <li @click="navigate('/questions-and-answers')">
                {{ $t("q_and_a") }}
              </li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="5">
            <p>{{ $t("join_us") }}</p>
            <ul>
              <li @click="navigate('/become-a-partner')">
                {{ $t("to_be_a_partner") }}
              </li>
              <li @click="navigate('/vendor-registration')">
                {{ $t("shop_vendor_signup") }}
              </li>
              <li @click="navigate('/vendor-login')">
                {{ $t("shop_vendor_login") }}
              </li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="5">
            <p>{{ $t("terms_of_use") }}</p>
            <ul>
              <li @click="navigate('/terms-and-conditions')">
                {{ $t("terms_and_conditions") }}
              </li>
              <li @click="navigate('/privacy-and-policy')">
                {{ $t("privacy_policy") }}
              </li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="4">
            <p class="payment-title">{{ $t("payment_method") }}</p>
            <el-row>
              <el-col :sm="24" :md="12">
                <img
                  src="../assets/payment-visa@2x.png"
                  class="payment"
                  alt=""
                />
              </el-col>
              <el-col :sm="24" :md="12">
                <img
                  src="../assets/payment-master@2x.png"
                  class="payment american-express"
                  alt=""
                />
              </el-col>
              <el-col :sm="24" :md="12">
                <img
                  src="../assets/payment-american@2x.png"
                  class="payment"
                  alt=""
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </base-content-container>
    </div>
    <el-backtop :visibility-height="1500" :bottom="45">
      <div>
        <el-icon><arrow-up-bold /></el-icon>
      </div>
    </el-backtop>
    <p class="copyright">© 2021 Shelax. All Rights Reserved.</p>
  </section>
</template>

<script>
import { ArrowUpBold } from "@element-plus/icons-vue";

export default {
  components: {
    ArrowUpBold,
  },
  data() {
    return {
      facebookImg: require("../assets/socialmedia-facebook-default@2x.png"),
      wechatImg: require("../assets/socialmedia-wechat-default@2x.png"),
      twitterImg: require("../assets/socialmedia-twitter-default@2x.png"),
      instagramImg: require("../assets/socialmedia-ig-default@2x.png"),
    };
  },
  computed: {
    isVendorRegistrationPath() {
      return this.$route.path === "/vendor-registration";
    },
    isVendorForgotPassPath() {
      return this.$route.path === "/vendor-forgot-password";
    },
    isVendorLogin() {
      return this.$route.path === "/vendor-login";
    },
  },
  methods: {
    changeImg(data) {
      if (data === "facebook") {
        this.facebookImg = require("../assets/socialmedia-facebook-hover@2x.png");
      } else if (data === "wechat") {
        this.wechatImg = require("../assets/socialmedia-wechat-hover@2x.png");
      } else if (data === "twitter") {
        this.twitterImg = require("../assets/socialmedia-twitter-hover@2x.png");
      } else if (data === "instagram") {
        this.instagramImg = require("../assets/socialmedia-ig-hover@2x.png");
      }
    },
    setDefaultImg(data) {
      if (data === "facebook") {
        this.facebookImg = require("../assets/socialmedia-facebook-default@2x.png");
      } else if (data === "wechat") {
        this.wechatImg = require("../assets/socialmedia-wechat-default@2x.png");
      } else if (data === "twitter") {
        this.twitterImg = require("../assets/socialmedia-twitter-default@2x.png");
      } else if (data === "instagram") {
        this.instagramImg = require("../assets/socialmedia-ig-default@2x.png");
      }
    },
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #5d6478;
  padding: 2rem 0 1rem 0;
  /* min-width: 320px; */
}

.el-col:not(:first-of-type) {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.footer .upper-footer ul li {
  cursor: pointer;
  transition: 0.2s ease-out;
  width: fit-content;
}

.footer .upper-footer ul li:hover {
  padding-left: 0.5rem;
  color: #fff;
}

.el-backtop div {
  background: #26408a;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: #fff;
  position: relative;
}

.el-backtop div i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

/* .el-backtop div::after {
  content: "kh";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  border-bottom: 5px solid red;
  border-left: 5px solid red;
  border-right: 5px solid red;
} */

@media screen and (max-width: 991px) {
  .el-col:not(:first-of-type) {
    align-items: center;
  }

  .footer .upper-footer .el-col.first p {
    margin-left: 0.7rem;
  }

  .footer .upper-footer .el-col.first ul {
    margin-left: 3.7rem;
  }
}

.el-col:last-of-type {
  /* align-items: flex-start; */
}

.fade-effect {
  display: block;
  border: none;
  color: white;
  height: 1px;
  width: 155px;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  margin-top: 1rem;
  /* background: -webkit-gradient(
    radial,
    1% 1%,
    0,
    -99% 50%,
    350,
    from(#fff),
    to(#5d6478)
  ); */
}

@media screen and (max-width: 991px) {
  .fade-effect {
    margin: 0 auto;
    margin-top: 1rem;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
}

li {
  color: #c6c6c6;
}

ul,
li,
p {
  font-size: 14px;
}

p {
  margin: 0;
  color: #fff;
}

@media screen and (max-width: 991px) {
  p {
    margin-top: 1rem;
  }
}

.payment {
  width: 60px;
}

.payment-title {
  margin-bottom: 1rem;
}

.american-express {
  /* margin-left: -15px; */
  /* align-items: center; */
}
@media screen and (min-width: 1126px) {
  .american-express {
    margin-left: -15px;
  }
}
/* @media screen and (min-width: 992px) and (max-width: 1125px) {
  .american-express {
    margin-left: 1rem;
  }
} */

@media screen and (max-width: 1280px) {
  .american-express {
    margin-left: 0.1rem;
  }
}

@media screen and (min-width: 991px) and (max-width: 1124px) {
  .american-express {
    margin-left: 1rem;
  }
}

@media screen and (max-width: 991px) {
  .american-express {
    margin-left: 0;
    margin-bottom: 0.3rem;
  }
}

.social-media-icon {
  width: 24px;
  margin-top: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.upper-footer {
  border-bottom: 0.5px solid #999999;
  padding-bottom: 3rem;
  /* text-align: center; */
}

@media screen and (max-width: 991px) {
  .upper-footer {
    text-align: center;
  }
}

.copyright {
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 1.5rem;
}
</style>