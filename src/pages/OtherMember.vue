<template>
  <section class="other-member">
    <base-member-card>
      <h3>{{ $t("regular_members") }}</h3>
      <div class="box">
        <el-avatar :size="50" />
        <el-icon @click="addMember" style="cursor: pointer"><plus /></el-icon>
        <span class="text">{{ $t("add_regular_member") }}</span>
      </div>

      <!-- ====================================================== Edit Member ====================================================== -->
      <template v-if="ruleForm.users.length > 0">
        <div
          v-for="(item, index) in ruleForm.users"
          class="box-2"
          :key="item.id"
        >
          <el-row>
            <el-col :xs="24" :sm="12">
              <el-avatar :src="item.avatar" :size="50" />
              <span>{{ item.givenName }}</span>
            </el-col>
            <el-col :xs="24" :sm="12">
              <div @click="showContent(item)" class="edit">
                <el-icon><edit /></el-icon>
                <span class="action">{{ $t("edit") }}</span>
              </div>
              <div @click="checkAccessTokenDelete(item.id)" class="delete">
                <el-icon><delete /></el-icon>
                <span class="action">{{ $t("delete") }}</span>
              </div>
            </el-col>
          </el-row>
          <transition name="animate" mode="out-in">
            <div v-if="item.memberEdit" class="box-content">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-position="top"
              >
                <el-row :gutter="20">
                  <el-col :sm="12" :md="3">
                    <el-upload
                      class="avatar-uploader"
                      action="http://localhost:8080/api/upload/avatar"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                    >
                      <label for="member-image">
                        <el-icon class="form-icon" style="cursor: pointer"
                          ><camera
                        /></el-icon>
                      </label>
                      <el-avatar
                        :src="imgSrc ? imgSrc : item.avatar"
                        icon
                        :size="50"
                        shape="circle"
                      >
                        <img class="image-avatar" :src="item.avatar" alt="" />
                        <!-- <img
                        v-if="item.imgSrc"
                        class="image-avatar"
                        :src="item.imgSrc"
                        alt=""
                      /> -->
                      </el-avatar>
                    </el-upload>
                    <!-- <el-avatar :size="50">
                      <el-icon class="form-icon"><camera /></el-icon>
                    </el-avatar> -->
                    <!-- <el-avatar
                      :src="item.imgSrc"
                      icon
                      :size="50"
                      shape="circle"
                    >
                      <img class="image-avatar" :src="item.avatar" alt="" /> -->
                    <!-- <img
                        v-if="item.imgSrc"
                        class="image-avatar"
                        :src="item.imgSrc"
                        alt=""
                      /> -->
                    <!-- <label for="member-image">
                        <el-icon class="form-icon" style="cursor: pointer"
                          ><camera
                        /></el-icon>
                      </label>
                    </el-avatar> -->
                    <!-- <input
                      id="member-image"
                      @change="onFileChange($event, item)"
                      type="file"
                    /> -->
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      :label="$t('title')"
                      :prop="'users.' + index + '.salutation'"
                      :rules="{
                        required: true,
                        message: $t('salutation'),
                        trigger: 'change',
                      }"
                    >
                      <el-select v-model="item.salutation" placeholder="先生">
                        <el-option :label="$t('Mr')" :value="$t('Mr')">{{
                          $t("Mr")
                        }}</el-option>
                        <el-option :label="$t('Mrs')" :value="$t('Mrs')">{{
                          $t("Mrs")
                        }}</el-option>
                        <el-option :label="$t('Miss')" :value="$t('Miss')">{{
                          $t("Miss")
                        }}</el-option>
                        <el-option :label="$t('Ms')" :value="$t('Ms')">{{
                          $t("Ms")
                        }}</el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      :label="$t('last_name')"
                      :prop="'users.' + index + '.lastName'"
                      :rules="{
                        required: true,
                        message: $t('last_name'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('last_name')"
                        v-model="item.lastName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      :label="$t('first_name')"
                      :prop="'users.' + index + '.givenName'"
                      :rules="{
                        required: true,
                        message: $t('first_name'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('first_name')"
                        v-model="item.givenName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      :label="$t('country_code')"
                      :prop="'users.' + index + '.phoneCode'"
                      :rules="{
                        required: true,
                        message: $t('country_code'),
                        trigger: 'blur',
                      }"
                    >
                      <el-select
                        :placeholder="$t('country_code')"
                        v-model="item.phoneCode"
                      >
                        <el-option
                          v-for="code in countryCodes"
                          :key="code.id"
                          :label="code.name + '(+' + code.isd + ')'"
                          :value="code.alphaThree"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      :label="$t('phone_number')"
                      :prop="'users.' + index + '.phoneNo'"
                      :rules="{
                        required: true,
                        message: $t('phone_number'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('phone_number')"
                        v-model="item.phoneNo"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      :label="$t('email_address')"
                      :prop="'users.' + index + '.email'"
                      :rules="{
                        required: true,
                        message: $t('email_address'),
                        trigger: 'blur',
                        type: 'email',
                      }"
                    >
                      <el-input
                        :placeholder="$t('email_address')"
                        v-model="item.email"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="12">
                    <el-form-item
                      :label="$t('city_of_residence')"
                      :prop="'users.' + index + '.placeOfResidence'"
                      :rules="{
                        required: true,
                        message: $t('city_of_residence'),
                        trigger: 'blur',
                      }"
                    >
                      <el-select
                        :placeholder="$t('city_of_residence')"
                        v-model="item.placeOfResidence"
                      >
                        <el-option
                          v-for="code in countryCodes"
                          :key="code.id"
                          :label="code.name + '(+' + code.isd + ')'"
                          :value="code.alphaThree"
                        ></el-option
                      ></el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="buttons">
                    <el-button @click="item.memberEdit = false">{{
                      $t("cancel_button")
                    }}</el-button>
                    <el-button @click="edit(item)">{{
                      $t("save_button")
                    }}</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </transition>
        </div>
      </template>

      <!-- ====================================================== New Member ====================================================== -->

      <div
        class="dynamic"
        v-for="(item, index) in ruleForm.dynamicContent"
        :key="index"
      >
        <div :class="{ 'content-visible': isContentVisible }" class="box-2">
          <!-- <el-row>
            <el-col :xs="24" :sm="12">
              <el-avatar :size="50" />
              <span>Jane Cooper</span>
            </el-col>
            <el-col :xs="24" :sm="12">
              <div @click="showContent(item)" class="edit">
                <el-icon><edit /></el-icon>
                <span class="action">修改</span>
              </div>
              <div class="delete">
                <el-icon><delete /></el-icon>
                <span class="action">刪除</span>
              </div>
            </el-col>
          </el-row> -->
          <transition name="animate" mode="out-in">
            <div v-if="item.contentVisible" class="box-content">
              <el-form
                ref="ruleFormRefAdd"
                :model="ruleForm"
                :rules="rules"
                label-position="top"
              >
                <el-row :gutter="20">
                  <el-col :sm="12" :md="3">
                    <!-- <el-avatar :size="50">
                      <el-icon class="form-icon"><camera /></el-icon>
                    </el-avatar> -->
                    <el-avatar
                      :src="item.imgSrc"
                      icon
                      :size="50"
                      shape="circle"
                    >
                      <img
                        v-if="item.imgSrc"
                        class="image-avatar"
                        :src="item.avatar"
                        alt=""
                      />
                      <label for="member-image">
                        <el-icon class="form-icon" style="cursor: pointer"
                          ><camera
                        /></el-icon>
                      </label>
                    </el-avatar>
                    <input
                      id="member-image"
                      @change="onFileChange($event, item)"
                      type="file"
                    />
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      :label="$t('title')"
                      :prop="'dynamicContent.' + index + '.salutation'"
                      :rules="{
                        required: true,
                        message: $t('salutation'),
                        trigger: 'change',
                      }"
                    >
                      <el-select
                        v-model="item.salutation"
                        :placeholder="$t('Mr')"
                      >
                        <el-option :label="$t('Mr')" :value="$t('Mr')">{{
                          $t("Mr")
                        }}</el-option>
                        <el-option :label="$t('Mrs')" :value="$t('Mrs')">{{
                          $t("Mrs")
                        }}</el-option>
                        <el-option :label="$t('Miss')" :value="$t('Miss')">{{
                          $t("Miss")
                        }}</el-option>
                        <el-option :label="$t('Ms')" :value="$t('Ms')">{{
                          $t("Ms")
                        }}</el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      :label="$t('last_name')"
                      :prop="'dynamicContent.' + index + '.lastName'"
                      :rules="{
                        required: true,
                        message: $t('last_name'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('last_name')"
                        v-model="item.lastName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      :label="$t('first_name')"
                      :prop="'dynamicContent.' + index + '.givenName'"
                      :rules="{
                        required: true,
                        message: $t('first_name'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('first_name')"
                        v-model="item.givenName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      :label="$t('country_code')"
                      :prop="'dynamicContent.' + index + '.phoneCode'"
                      :rules="{
                        required: true,
                        message: $t('country_code'),
                        trigger: 'blur',
                      }"
                    >
                      <el-select
                        :placeholder="$t('country_code')"
                        v-model="item.phoneCode"
                      >
                        <el-option
                          v-for="code in countryCodes"
                          :key="code.id"
                          :label="code.name + '(+' + code.isd + ')'"
                          :value="code.alphaThree"
                        ></el-option
                      ></el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      :label="$t('phone_number')"
                      :prop="'dynamicContent.' + index + '.phoneNo'"
                      :rules="{
                        required: true,
                        message: $t('phone_number'),
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        :placeholder="$t('phone_number')"
                        v-model="item.phoneNo"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      :label="$t('email_address')"
                      :prop="'dynamicContent.' + index + '.email'"
                      :rules="{
                        required: true,
                        message: $t('email_address'),
                        trigger: 'blur',
                        type: 'email',
                      }"
                    >
                      <el-input
                        :placeholder="$t('email_address')"
                        v-model="item.email"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="12">
                    <el-form-item
                      :label="$t('city_of_residence')"
                      :prop="'dynamicContent.' + index + '.placeOfResidence'"
                      :rules="{
                        required: true,
                        message: $t('city_of_residence'),
                        trigger: 'blur',
                      }"
                    >
                      <el-select
                        :placeholder="$t('city_of_residence')"
                        v-model="item.placeOfResidence"
                      >
                        <el-option
                          v-for="code in countryCodes"
                          :key="code.id"
                          :label="code.name + '(+' + code.isd + ')'"
                          :value="code.alphaThree"
                        ></el-option
                      ></el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="buttons">
                    <el-button @click="item.contentVisible = false">{{
                      $t("cancel_button")
                    }}</el-button>
                    <el-button @click="submit(item)">{{
                      $t("save_button")
                    }}</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </transition>
        </div>
      </div>
    </base-member-card>
  </section>
</template>

<script>
import { Plus, Camera, Edit, Delete } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

export default {
  components: {
    plus: Plus,
    edit: Edit,
    delete: Delete,
    camera: Camera,
  },
  data() {
    return {
      isContentVisible: false,
      imgSrc: null,
      ruleForm: {
        members: [],
        users: [],
        // title: "",
        // lastName: "",
        // firstName: "",
        // phoneAreaCode: "",
        // phoneNumber: "",
        // email: "",
        // country: "",
        dynamicContent: [
          // {
          //   title: "",
          //   lastName: "",
          //   firstName: "",
          //   phoneAreaCode: "",
          //   phoneNumber: "",
          //   email: "",
          //   country: "",
          //   contentVisible: false,
          // },
        ],
      },
      rules: {
        salutation: [
          {
            required: true,
            message: "This Field is required",
            trigger: "change",
          },
        ],
        lastName: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        givenName: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        phoneCode: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        phoneNo: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "This Field is required",
            type: "email",
            trigger: "blur",
          },
        ],
        placeOfResidence: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    serviceUsers: {
      deep: true,
      handler() {
        this.ruleForm.users = this.serviceUsers;
      },
    },
  },
  computed: {
    serviceUsers() {
      return this.$store.getters["profile/serviceUsers"];
    },
    countryCodes() {
      return this.$store.getters["profile/countryCodes"];
    },
  },
  methods: {
    showContent(item) {
      // this.isContentVisible = true;
      // item.contentVisible = true;
      item.memberEdit = true;
    },
    checkAccessTokenMember(data) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/addServiceMember", data).then(() => {
            ElNotification({
              title: "Success",
              message: this.$t("member_added"),
              type: "success",
            });
            this.$store.dispatch("profile/getServiceUsers");
          });
        })
        .catch(() => {
          this.checkRefreshTokenMember(data);
        });
    },
    checkRefreshTokenMember(data) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.$store.dispatch("profile/addServiceMember", data).then(() => {
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
          // this.$router.replace("/");
          this.$store.dispatch("auth/logout");
        });
    },
    handleAvatarSuccess(response) {
      console.log(response);
      this.imgSrc = response.item;
      // this.sendAvatar(this.imgSrc);
    },
    submit(item) {
      this.$refs.ruleFormRefAdd[0].validate((valid) => {
        if (valid) {
          item.contentVisible = false;
          console.log(item);
          const data = {
            salutation: item.salutation,
            lastName: item.lastName,
            givenName: item.givenName,
            phoneCode: item.phoneCode,
            phoneNo: item.phoneNo,
            email: item.email,
            placeOfResidence: item.placeOfResidence,
            avatar: item.imgSrc,
          };
          this.checkAccessTokenMember(data);
          // this.ruleForm.members.push({ ...item, memberEdit: false });
        } else {
          ElMessage({
            message: this.$t("fill_fields"),
            type: "error",
          });
        }
      });
    },
    checkAccessTokenEdit(data) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/editServiceUser", data).then(() => {
            ElNotification({
              title: "Success",
              message: this.$t("member_updated"),
              type: "success",
            });
            this.imgSrc = null;
            this.$store.dispatch("profile/getServiceUsers");
          });
        })
        .catch(() => {
          this.checkRefreshTokenEdit(data);
        });
    },
    checkRefreshTokenEdit(data) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.$store.dispatch("profile/editServiceUser", data).then(() => {
            ElNotification({
              title: "Success",
              message: this.$t("member_updated"),
              type: "success",
            });
            this.imgSrc = null;
            this.$store.dispatch("profile/getServiceUsers");
          });
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
    edit(item) {
      this.$refs.ruleFormRef[0].validate((valid) => {
        if (valid) {
          const data = {
            id: item.id,
            salutation: item.salutation,
            lastName: item.lastName,
            givenName: item.givenName,
            phoneCode: item.phoneCode,
            phoneNo: item.phoneNo,
            email: item.email,
            placeOfResidence: item.placeOfResidence,
            avatar: this.imgSrc,
            // avatar: item.imgSrc,
          };
          console.log(item);
          console.log(data);
          this.checkAccessTokenEdit(data);

          item.memberEdit = false;
        } else {
          ElMessage({
            message: this.$t("fill_fields"),
            type: "error",
          });
        }
      });
    },
    addMember() {
      this.ruleForm.dynamicContent.push({
        salutation: "",
        lastName: "",
        givenName: "",
        phoneCode: "",
        phoneNo: "",
        email: "",
        placeOfResidence: "",
        contentVisible: true,
        imgSrc: null,
      });
      console.log("added");
    },
    onFileChange(event, item) {
      const file = event.target.files[0];

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        ElMessage({
          message: this.$t("image_format"),
          type: "error",
        });
      } else {
        item.imgSrc = URL.createObjectURL(file);
      }
    },
    checkAccessToken() {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/getServiceUsers").then(() => {
            this.ruleForm.users = this.serviceUsers;
            console.log(this.ruleForm.users);
          });
        })
        .catch((err) => {
          console.log(err);
          this.checkRefreshToken();
        });
    },
    checkRefreshToken() {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.$store.dispatch("profile/getServiceUsers").then(() => {
            this.ruleForm.users = this.serviceUsers;
            console.log(this.ruleForm.users);
          });
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
    checkAccessTokenDelete(id) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.deleteMember(id);
        })
        .catch(() => {
          this.checkRefreshTokenDelete(id);
        });
    },
    checkRefreshTokenDelete(id) {
      this.$store
        .dispatch("auth/checkRefreshToken")
        .then(() => {
          this.deleteMember(id);
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
    deleteMember(id) {
      ElMessageBox.confirm(this.$t("member_will_be_deleted"), "Warning", {
        confirmButtonText: this.$t("ok_button"),
        cancelButtonText: this.$t("cancel_button"),
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("profile/deleteServiceUser", id).then(() => {
            ElMessage({
              type: "success",
              message: this.$t("member_deleted"),
            });
            this.$store.dispatch("profile/getServiceUsers");
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: this.$t("delete_canceled"),
          });
        });
    },
  },
  created() {
    this.checkAccessToken();
    // this.
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
</style>

<style>
.other-member h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2rem;
}

.other-member .box-2:empty {
  display: none;
}

.other-member .box,
.other-member .box-2 {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.other-member .box-2 {
  display: block;
}

.other-member .box-2 .el-row {
  align-items: center;
}

.other-member .box-2 .el-row .el-col,
.other-member .box-2 .el-row .el-col .edit,
.other-member .box-2 .el-row .el-col .delete {
  display: flex;
  align-items: center;
}

.other-member .box-2 .el-row .el-col .edit {
  margin-right: 1.5rem;
  cursor: pointer;
}

.other-member .box-2 .el-row .el-col .delete {
  cursor: pointer;
}

.other-member .box-2 .el-row .el-col .edit .el-icon,
.other-member .box-2 .el-row .el-col .delete .el-icon {
  transition: 0.2s;
}

.other-member .box-2 .el-row .el-col .edit:hover .el-icon {
  color: orange;
}

.other-member .box-2 .el-row .el-col .delete:hover .el-icon {
  color: red;
}

.other-member .box-2 .el-row .el-col:last-of-type {
  justify-content: flex-end;
}

.other-member .box-2 span {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.other-member .box-2 span.action {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin-right: 1.5rem;
}

.other-member .box-2 span.action:last-of-type {
  margin: 0;
}

.other-member .box-2 .el-icon {
  margin-right: 0.5rem;
  font-size: 20px;
}

.other-member .el-avatar {
  margin-right: 1rem;
}

.other-member span.text {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-left: 1rem;
}

.other-member .box-content {
  margin-top: 2rem;
}

.other-member .box-2 .box-content .el-col {
  display: block;
}

.other-member .box-2 .box-content .el-avatar {
  position: relative;
  overflow: visible;
}

.other-member .box-2 .box-content .el-icon.form-icon {
  position: absolute;
  top: 60%;
  right: -0.5rem;
  color: #525252;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  padding: 10px;
  font-size: 13px;
  z-index: 1;
}

.other-member .box-2 .box-content .el-icon svg {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}

.other-member .box-2 .box-content .el-form .el-form-item__label {
  padding-bottom: 0.5rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.other-member .box-2 .box-content .el-form .buttons {
  text-align: end;
  margin-top: 2rem;
}

.other-member .box-2 .box-content .el-form .buttons .el-button {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.4px;
  /* color: #525252; */
}

.other-member .box-2 .box-content .el-form .buttons .el-button:first-of-type {
  background: #fff;
  border: #fff;
}

.other-member .box-2 .box-content .el-form .buttons .el-button:last-of-type {
  background: #2d99a0;
  border-radius: 4px;
}

.other-member
  .box-2
  .box-content
  .el-form
  .buttons
  .el-button:last-of-type
  span {
  color: #fff;
}

.other-member .box-2 {
  position: relative;
}

.other-member .content-visible.box-2::before {
  content: "";
  position: absolute;
  background: #e0e0e0;
  width: 100%;
  height: 1px;
  top: 5rem;
  left: 0;
}
.other-member .content-visible.box-2::after {
  content: "";
  position: absolute;
  background: #e0e0e0;
  width: 100%;
  height: 1px;
  bottom: 5rem;
  left: 0;
}

.other-member .el-avatar > img {
  width: 100%;
  border-radius: 100%;
}

.other-member .avatar-uploader {
  position: relative;
}

.animate-enter-active {
  transition: all 0.3s ease-out;
}

.animate-leave-active {
  transition: all 0.5s ease-in;
}

.animate-enter-from,
.animate-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media screen and (max-width: 767px) {
  .other-member .content-visible.box-2::before {
    top: 6rem;
  }
}
/* .other-member .el-collapse-item__header {
  display: block;
  border: none;
}

.other-member .el-collapse-item__header .el-collapse-item__arrow {
  display: none;
}

.other-member .el-collapse .el-collapse-item__wrap {
  position: relative;
}

.other-member .el-collapse .el-collapse-item__wrap::after {
  content: "khaled";
  position: absolute;
  top: 1rem;
} */
</style>