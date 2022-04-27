<template>
  <section class="other-member">
    <base-member-card>
      <h3>常用成員</h3>
      <div class="box">
        <el-avatar :size="50" />
        <el-icon><plus /></el-icon>
        <span class="text">新增常用成員</span>
      </div>
      <div :class="{ 'content-visible': isContentVisible }" class="box-2">
        <el-row>
          <el-col :xs="24" :sm="12">
            <el-avatar :size="50" />
            <span>Jane Cooper</span>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div @click="showContent" class="edit">
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
          <div v-if="isContentVisible" class="box-content">
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-position="top"
            >
              <el-row :gutter="20">
                <el-col :sm="12" :md="3">
                  <el-avatar :size="50">
                    <el-icon class="form-icon"><camera /></el-icon>
                  </el-avatar>
                </el-col>
                <el-col :sm="12" :md="5">
                  <el-form-item label="稱謂" prop="title">
                    <el-select></el-select>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="8">
                  <el-form-item label="姓氏" prop="lastName">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="8">
                  <el-form-item label="名字" prop="firstName">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="5">
                  <el-form-item label="電話區號" prop="phoneAreaCode">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="9">
                  <el-form-item label="電話號碼" prop="phoneNumber">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="9">
                  <el-form-item label="電郵地址" prop="email">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :sm="12" :md="12">
                  <el-form-item label="居住國家 / 城市" prop="country">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col class="buttons">
                  <el-button @click="isContentVisible = false">取消</el-button>
                  <el-button @click="isContentVisible = false">修改</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </transition>
      </div>
      <!-- <el-collapse class="box-2" v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template #title>
            <el-row>
              <el-col :sm="24" :md="12">
                <el-avatar :size="50" />
                <span>Jane Cooper</span>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-icon><edit /></el-icon>
                <span class="action">修改</span>
                <el-icon><delete /></el-icon>
                <span class="action">刪除</span>
              </el-col>
            </el-row>
          </template>
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
      </el-collapse> -->
    </base-member-card>
  </section>
</template>

<script>
import { Plus, Edit, Delete, Camera } from "@element-plus/icons-vue";

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
      ruleForm: {
        title: "",
        lastName: "",
        firstName: "",
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        country: "",
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
    showContent() {
      this.isContentVisible = true;
    },
  },
};
</script>

<style >
.other-member h3 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2rem;
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