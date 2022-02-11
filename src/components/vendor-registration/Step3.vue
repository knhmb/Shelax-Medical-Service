<template>
  <el-row :gutter="20">
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>商業登記證</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><circle-close-filled></circle-close-filled></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>公司註冊證書</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon>
                    <circle-close-filled></circle-close-filled>
                  </el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>銀行月結單 (最近三個月)</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon>
                    <circle-close-filled></circle-close-filled>
                  </el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>醫生執照</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon>
                    <circle-close-filled></circle-close-filled>
                  </el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>服務清單</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon>
                    <circle-close-filled></circle-close-filled>
                  </el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>公司相片 (入口與內部相片)</p>
        <p class="description">
          巾福左收休鼻買早住步共止秋故苗事汁許貓頁亭功呢
        </p>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <template #default>
            <el-icon><Upload /></el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon>
                    <circle-close-filled></circle-close-filled>
                  </el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <el-button @click="nextStep('step-2')" class="return"> 返回 </el-button>
    </el-col>
    <el-col :sm="24" :md="12">
      <el-button @click="nextStep('completed')" class="next">
        下一步
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import { CircleCloseFilled, Upload } from "@element-plus/icons-vue";
import { UploadFile } from "element-plus/es/components/upload/src/upload.type";

export default {
  components: {
    CircleCloseFilled,
    Upload,
  },
  data() {
    return {
      UploadFile,
      dialogVisible: false,
      dialogImageUrl: "",
    };
  },
  methods: {
    nextStep(value) {
      this.$emit("changeStep", value);
    },
    handlePictureCardPreview(UploadFile) {
      this.dialogImageUrl = UploadFile.url;
      this.dialogVisible = true;
      console.log("khaled");
    },
  },
};
</script>

<style scoped>
.upload-card {
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 1rem;
  /* min-width: 387px; */
}

.upload-card p {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-bottom: 1rem;
}

.upload-card p.description {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #8d8d8d;
  margin-bottom: 1.5rem;
}

.el-button {
  border-radius: 4px;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  letter-spacing: 0.4px;
  margin-bottom: 0.5rem;
}

.el-button.next {
  background: #7690da;
  color: #ffffff;
}

.el-button.return {
  color: #7690da;
  border-color: #7690da;
}
</style>