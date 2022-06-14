<template>
  <div class="form-content">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <template v-for="(item, index) in ruleForm.dynamicItem" :key="index">
        <div
          class="dynamic-form"
          v-if="singleItemDetail.itemType === 'service'"
        >
          <p>{{ $t("information_of_service_user", { index: index + 1 }) }}</p>
          <el-row :gutter="10">
            <el-col>
              <el-form-item :label="$t('select_members')">
                <el-select
                  v-model="item.givenName"
                  class="avatar"
                  :placeholder="$t('select_a_member')"
                  size="large"
                  @change="changeUser({ item: item, index: index })"
                >
                  <el-option
                    v-for="user in serviceUsers"
                    :key="user"
                    :label="user.givenName"
                    :value="user.givenName"
                  ></el-option>
                </el-select>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                />
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="6">
              <el-form-item
                :label="$t('salutation')"
                :prop="'dynamicItem.' + index + '.salutation'"
                :rules="{
                  required: true,
                  message: $t('salutation'),
                  trigger: 'change',
                }"
              >
                <el-select
                  @change="changed(item)"
                  v-model="item.salutation"
                  :placeholder="$t('Mr')"
                >
                  <el-option label="先生" value="先生">先生</el-option>
                  <el-option label="太太" value="太太">太太</el-option>
                  <el-option label="小姐" value="小姐">小姐</el-option>
                  <el-option label="女士" value="女士">女士</el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :sm="24" :md="9">
              <el-form-item
                :label="$t('last_name')"
                :prop="'dynamicItem.' + index + '.lastName'"
                :rules="{
                  required: true,
                  message: $t('last_name'),
                  trigger: 'blur',
                }"
              >
                <el-input
                  @input="changed(item)"
                  v-model="item.lastName"
                  :placeholder="$t('last_name')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item
                :label="$t('first_name')"
                :prop="'dynamicItem.' + index + '.givenName'"
                :rules="{
                  required: true,
                  message: $t('first_name'),
                  trigger: 'blur',
                }"
              >
                <el-input
                  @input="changed(item)"
                  v-model="item.givenName"
                  :placeholder="$t('first_name')"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="24" :md="6">
              <el-form-item
                :label="$t('country_code')"
                :prop="'dynamicItem.' + index + '.phoneCode'"
                :rules="{
                  required: false,
                  message: $t('country_code'),
                  trigger: 'blur',
                }"
              >
                <el-select
                  @change="changed(item)"
                  v-model="item.phoneCode"
                  :placeholder="$t('country_code')"
                >
                  <el-option
                    v-for="code in countryCodes"
                    :key="code.id"
                    :label="code.name + '(+' + code.isd + ')'"
                    :value="code.alphaThree"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item
                :label="$t('phone_number')"
                :prop="'dynamicItem.' + index + '.phoneNo'"
                :rules="{
                  required: false,
                  message: $t('phone_number'),
                  trigger: 'blur',
                }"
              >
                <el-input
                  @input="changed(item)"
                  v-model="item.phoneNo"
                  :placeholder="$t('phone_number')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="9">
              <el-form-item
                :label="$t('email_address')"
                :prop="'dynamicItem.' + index + '.email'"
                :rules="{
                  required: false,
                  message: $t('email_address'),
                  trigger: 'blur',
                  type: 'email',
                }"
              >
                <el-input
                  @input="changed(item)"
                  v-model="item.email"
                  :placeholder="$t('email_address')"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <el-form-item
                :label="$t('city_of_residence')"
                :prop="'dynamicItem.' + index + '.placeOfResidence'"
                :rules="{
                  required: false,
                  message: $t('city_of_residence'),
                  trigger: 'blur',
                }"
              >
                <!-- <el-input
                  v-model="item.cityOfResidence"
                  class="email-input"
                  :placeholder="$t('city_of_residence')"
                ></el-input> -->
                <el-select
                  @change="changed(item)"
                  v-model="item.placeOfResidence"
                  :placeholder="$t('city_of_residence')"
                >
                  <el-option
                    v-for="code in countryCodes"
                    :key="code.id"
                    :label="code.name + '(+' + code.isd + ')'"
                    :value="code.alphaThree"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <div class="form-btn">
                <el-form-item>
                  <el-button @click="addItem(item)" :icon="Plus">{{
                    $t("add_service_user")
                  }}</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="other-information">
          <p>{{ $t("other_information") }}</p>
          <el-row>
            <el-col>
              <el-form-item
                :label="$t('any_requests')"
                :prop="'dynamicItem.' + index + '.specialRequest'"
                :rules="{
                  required: false,
                  message: 'Special request is required',
                  trigger: 'blur',
                }"
              >
                <el-input
                  @input="changed(item)"
                  v-model="item.specialRequest"
                  rows="3"
                  :placeholder="$t('enter_a request')"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </template>
    </el-form>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
export default {
  props: ["quantity"],
  data() {
    return {
      Plus,
      arr: [],
      otherInformation: "請輸入",
      ruleForm: {
        avatarSelect: "",
        salutation: "",
        lastName: "",
        givenName: "",
        phoneCode: "",
        phoneNo: "",
        email: "",
        placeOfResidence: "",
        specialRequest: "",
        dynamicItem: [
          // {
          //   avatarSelect: "Chan Tai Man",
          //   title: "Mr.",
          //   lastName: "Tai Man",
          //   firstName: "Chan",
          //   areaCode: "香港(+852)",
          //   phoneNumber: "6123 4567",
          //   emailAddress: "chantaiman@email.com",
          //   cityOfResidence: "香港",
          // },
        ],
      },
      rules: {
        salutation: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur",
          },
        ],
        givenName: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur",
          },
        ],
        phoneCode: [
          {
            required: false,
            message: "Area code is required",
            trigger: "change",
          },
        ],
        phoneNo: [
          {
            required: false,
            message: "Phone number is required",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: false,
            type: "email",
            message: "Email is required",
            trigger: "blur",
          },
        ],
        placeOfResidence: [
          {
            required: false,
            message: "City is required",
            trigger: "blur",
          },
        ],
        specialRequest: [
          {
            required: false,
            message: "Special request is required",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    singleItemDetail() {
      return this.$store.getters["search/singleItemDetail"];
    },
    orderItem() {
      return this.$store.getters["order/orderItem"];
    },
    serviceUsers() {
      return this.$store.getters["profile/serviceUsers"];
    },
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
  },
  methods: {
    addItem(item) {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            salutation: item.salutation,
            lastName: item.lastName,
            givenName: item.givenName,
            phoneCode: item.phoneCode,
            phoneNo: item.phoneNo,
            email: item.email,
            placeOfResidence: item.placeOfResidence,
          };
          console.log(data);
          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.$store
                .dispatch("profile/addServiceMember", data)
                .then(() => {
                  ElNotification({
                    title: "Success",
                    message: this.$t("member_added"),
                    type: "success",
                  });
                  this.$store.dispatch("profile/getServiceUsers");
                });
            })
            .catch(() => {
              this.$store
                .dispatch("auth/checkRefreshToken")
                .then(() => {
                  this.$store
                    .dispatch("profile/addServiceMember", data)
                    .then(() => {
                      ElNotification({
                        title: "Success",
                        message: this.$t("member_added"),
                        type: "success",
                      });
                      this.$store.dispatch("profile/getServiceUsers");
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
      });
      // this.ruleForm.dynamicItem.push({
      //   avatarSelect: "",
      //   title: "",
      //   lastName: "",
      //   firstName: "",
      //   areaCode: "",
      //   phoneNumber: "",
      //   emailAddress: "",
      //   cityOfResidence: "",
      // });
    },
    changeUser({ item, index }) {
      const currentUser = this.serviceUsers.find(
        (user) => user.givenName === item.givenName
      );
      console.log(currentUser);

      this.ruleForm.dynamicItem[index].salutation = currentUser.salutation;
      this.ruleForm.dynamicItem[index].lastName = currentUser.lastName;
      this.ruleForm.dynamicItem[index].givenName = currentUser.givenName;
      this.ruleForm.dynamicItem[index].phoneCode = currentUser.phoneCode;
      this.ruleForm.dynamicItem[index].phoneNo = currentUser.phoneNo;
      this.ruleForm.dynamicItem[index].placeOfResidence =
        currentUser.placeOfResidence;
      this.ruleForm.dynamicItem[index].email = currentUser.email;
    },
    changed(item) {
      this.arr = this.arr.filter((a) => a.id !== item.id);
      this.arr.push(item);
      console.log(this.arr);
      this.$emit("dataChanged", this.arr);
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getServiceUsers").then(() => {
          this.serviceUsers.forEach((item) => {
            console.log(item);
            console.log(this.ruleForm.dynamicItem);
            // this.ruleForm.dynamicItem
            this.ruleForm.dynamicItem.push({
              ...item,
              specialRequest: "",
            });
            this.arr = this.arr.filter((a) => a.id !== item.id);
            this.arr.push({ ...item, specialRequest: "" });
            console.log(this.arr);
            this.$emit("dataChanged", this.arr);
            // this.$emit("dataChanged", { ...item, specialRequest: "" });
          });

          for (let i = 1; i < this.quantity; i++) {
            this.ruleForm.dynamicItem.push({
              avatarSelect: "",
              salutation: "",
              lastName: "",
              givenName: "",
              phoneCode: "",
              phoneNo: "",
              email: "",
              placeOfResidence: "",
              specialRequest: "",
            });
          }
          console.log(this.ruleForm.dynamicItem);
          console.log(this.serviceUsers);
        });
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getServiceUsers").then(() => {
              this.serviceUsers.forEach((item) => {
                this.ruleForm.dynamicItem.push(item);
              });
              for (let i = 1; i < this.quantity; i++) {
                this.ruleForm.dynamicItem.push({
                  avatarSelect: "",
                  salutation: "",
                  lastName: "",
                  givenName: "",
                  phoneCode: "",
                  phoneNo: "",
                  email: "",
                  placeOfResidence: "",
                  specialRequest: "",
                });
              }
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
    this.$store.dispatch("profile/getCountryCode");
  },
};
</script>

<style>
.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .el-input
  .el-input__inner::placeholder {
  color: #c0c4cc;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  p {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #4e68b2;
  margin-bottom: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select.avatar
  .el-input__inner {
  background-color: #f4f4f4;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 24px 48px;
  position: relative;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select.avatar {
  width: 50%;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select
  .el-input__inner::placeholder {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart-step-2 .left-section-cart .shopping-cart-form .form-content img {
  position: absolute;
  width: 35px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  margin-left: 0.5rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-form
  .el-form-item__label {
  padding-bottom: 0.5rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .form-btn {
  text-align: right;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-button {
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #2d99a0;
  border-color: #2d99a0;
  margin-top: 1.8rem;
  padding: 0 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select
  .el-input__inner {
  background: #fff;
  padding: 0 15px;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-select {
  width: 100%;
}

.shopping-cart-step-2
  .left-section-cart
  .shopping-cart-form
  .form-content
  .el-form
  .dynamic-form {
  border-bottom: 0.8px solid #e0e0e0;
  margin-top: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .other-information {
  margin-top: 1rem;
}

.shopping-cart-step-2
  .left-section-cart
  .body
  .shopping-cart-form
  .form-content
  .other-information
  p {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 2rem;
}

@media screen and (max-width: 650px) {
  .shopping-cart-step-2
    .left-section-cart
    .shopping-cart-form
    .form-content
    .el-select.avatar {
    width: 100%;
  }
}
</style>