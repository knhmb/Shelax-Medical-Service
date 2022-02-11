<template>
  <section class="footer" v-if="$route.path !== '/vendor-registration'">
    <div class="upper-footer">
      <base-content-container>
        <el-row justify="space-between">
          <el-col :sm="24" :md="5">
            <img
              src="../assets/brand-logo@2x.png"
              style="width: 108px"
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
          <el-col :sm="24" :md="5">
            <p>認識Shelax</p>
            <ul>
              <li>關於Shelax</li>
              <li>聯絡我們</li>
              <li>常見問題</li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="5">
            <p>加入我們</p>
            <ul>
              <li>商戶合作</li>
              <li>商戶註冊</li>
              <li>商戶登入</li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="5">
            <p>網站條款</p>
            <ul>
              <li>使用條款</li>
              <li>私隱條例</li>
            </ul>
          </el-col>
          <el-col :sm="24" :md="4">
            <p class="payment-title">支付方式</p>
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
    <p class="copyright">© 2021 Shelax. All Rights Reserved.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      facebookImg: require("../assets/socialmedia-facebook-default@2x.png"),
      wechatImg: require("../assets/socialmedia-wechat-default@2x.png"),
      twitterImg: require("../assets/socialmedia-twitter-default@2x.png"),
      instagramImg: require("../assets/socialmedia-ig-default@2x.png"),
    };
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

@media screen and (max-width: 991px) {
  .el-col:not(:first-of-type) {
    align-items: center;
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