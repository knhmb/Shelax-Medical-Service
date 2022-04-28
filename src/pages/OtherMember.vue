<template>
  <section class="other-member">
    <base-member-card>
      <h3>常用成員</h3>
      <div class="box">
        <el-avatar :size="50" />
        <el-icon @click="addMember" style="cursor: pointer"><plus /></el-icon>
        <span class="text">新增常用成員</span>
      </div>

      <!-- ====================================================== Edit Member ====================================================== -->

      <template v-if="ruleForm.members.length > 0">
        <div
          v-for="(item, index) in ruleForm.members"
          class="box-2"
          :key="index"
        >
          <el-row>
            <el-col :xs="24" :sm="12">
              <el-avatar :src="item.imgSrc" :size="50" />
              <span>{{ item.firstName }}</span>
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
                    <!-- <el-avatar :size="50">
                      <el-icon class="form-icon"><camera /></el-icon>
                    </el-avatar> -->
                    <el-avatar icon :size="50" shape="circle">
                      <img
                        v-if="item.imgSrc"
                        class="image-avatar"
                        :src="item.imgSrc"
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
                      label="稱謂"
                      :prop="'members.' + index + '.title'"
                      :rules="{
                        required: true,
                        message: 'This Field is required',
                        trigger: 'change',
                      }"
                    >
                      <el-select v-model="item.title" placeholder="先生">
                        <el-option label="先生" value="先生">先生</el-option>
                        <el-option label="太太" value="太太">太太</el-option>
                        <el-option label="小姐" value="小姐">小姐</el-option>
                        <el-option label="女士" value="女士">女士</el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      label="姓氏"
                      :prop="'members.' + index + '.lastName'"
                      :rules="{
                        required: true,
                        message: '請輸入姓氏',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入姓氏"
                        v-model="item.lastName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      label="名字"
                      :prop="'members.' + index + '.firstName'"
                      :rules="{
                        required: true,
                        message: '請輸入名字',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入名字"
                        v-model="item.firstName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      label="電話區號"
                      :prop="'members.' + index + '.phoneAreaCode'"
                      :rules="{
                        required: true,
                        message: '請輸入電話區號',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電話區號"
                        v-model="item.phoneAreaCode"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      label="電話號碼"
                      :prop="'members.' + index + '.phoneNumber'"
                      :rules="{
                        required: true,
                        message: '請輸入電話號碼',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電話號碼"
                        v-model="item.phoneNumber"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      label="電郵地址"
                      :prop="'members.' + index + '.email'"
                      :rules="{
                        required: true,
                        message: '請輸入電郵地址',
                        trigger: 'blur',
                        type: 'email',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電郵地址"
                        v-model="item.email"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="12">
                    <el-form-item
                      label="居住國家 / 城市"
                      :prop="'members.' + index + '.country'"
                      :rules="{
                        required: true,
                        message: '請輸入居住國家/城市',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入居住國家/城市"
                        v-model="item.country"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col class="buttons">
                    <el-button @click="item.memberEdit = false">取消</el-button>
                    <el-button @click="edit(item)">儲存</el-button>
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
                    <el-avatar icon :size="50" shape="circle">
                      <img
                        v-if="item.imgSrc"
                        class="image-avatar"
                        :src="item.imgSrc"
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
                      label="稱謂"
                      :prop="'dynamicContent.' + index + '.title'"
                      :rules="{
                        required: true,
                        message: 'This Field is required',
                        trigger: 'change',
                      }"
                    >
                      <el-select v-model="item.title" placeholder="先生">
                        <el-option label="先生" value="先生">先生</el-option>
                        <el-option label="太太" value="太太">太太</el-option>
                        <el-option label="小姐" value="小姐">小姐</el-option>
                        <el-option label="女士" value="女士">女士</el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      label="姓氏"
                      :prop="'dynamicContent.' + index + '.lastName'"
                      :rules="{
                        required: true,
                        message: '請輸入姓氏',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入姓氏"
                        v-model="item.lastName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="8">
                    <el-form-item
                      label="名字"
                      :prop="'dynamicContent.' + index + '.firstName'"
                      :rules="{
                        required: true,
                        message: '請輸入名字',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入名字"
                        v-model="item.firstName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="5">
                    <el-form-item
                      label="電話區號"
                      :prop="'dynamicContent.' + index + '.phoneAreaCode'"
                      :rules="{
                        required: true,
                        message: '請輸入電話區號',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電話區號"
                        v-model="item.phoneAreaCode"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      label="電話號碼"
                      :prop="'dynamicContent.' + index + '.phoneNumber'"
                      :rules="{
                        required: true,
                        message: '請輸入電話號碼',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電話號碼"
                        v-model="item.phoneNumber"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="9">
                    <el-form-item
                      label="電郵地址"
                      :prop="'dynamicContent.' + index + '.email'"
                      :rules="{
                        required: true,
                        message: '請輸入電郵地址',
                        trigger: 'blur',
                        type: 'email',
                      }"
                    >
                      <el-input
                        placeholder="請輸入電郵地址"
                        v-model="item.email"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12" :md="12">
                    <el-form-item
                      label="居住國家 / 城市"
                      :prop="'dynamicContent.' + index + '.country'"
                      :rules="{
                        required: true,
                        message: '請輸入居住國家/城市',
                        trigger: 'blur',
                      }"
                    >
                      <el-input
                        placeholder="請輸入居住國家/城市"
                        v-model="item.country"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col class="buttons">
                    <el-button @click="item.contentVisible = false"
                      >取消</el-button
                    >
                    <el-button @click="submit(item)">儲存</el-button>
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
import { ElMessage } from "element-plus";

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
        title: [
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
        firstName: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        phoneAreaCode: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
        phoneNumber: [
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
        country: [
          {
            required: true,
            message: "This Field is required",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    showContent(item) {
      // this.isContentVisible = true;
      // item.contentVisible = true;
      item.memberEdit = true;
    },
    submit(item) {
      this.$refs.ruleFormRefAdd[0].validate((valid) => {
        if (valid) {
          item.contentVisible = false;
          this.ruleForm.members.push({ ...item, memberEdit: false });
        } else {
          ElMessage({
            message: "Please Fill All Fields",
            type: "error",
          });
        }
      });
    },
    edit(item) {
      this.$refs.ruleFormRef[0].validate((valid) => {
        if (valid) {
          console.log("editted");
          console.log(item);
          item.memberEdit = false;
        } else {
          ElMessage({
            message: "Please Fill All Fields",
            type: "error",
          });
        }
      });
    },
    addMember() {
      this.ruleForm.dynamicContent.push({
        title: "",
        lastName: "",
        firstName: "",
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        country: "",
        contentVisible: true,
        imgSrc: null,
      });
      console.log("added");
    },
    onFileChange(event, item) {
      const file = event.target.files[0];

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        ElMessage({
          message: "Image must be in jpeg or png format",
          type: "error",
        });
      } else {
        item.imgSrc = URL.createObjectURL(file);
      }
    },
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