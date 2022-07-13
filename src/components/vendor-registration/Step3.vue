<template>
  <h6>{{ $t("upload_files") }}</h6>
  <el-row :gutter="20">
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("business_registeration_certificate") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
        <p>{{ $t("certificate_of_incorporation") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
        <p>{{ $t("bank_statement") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
        <p>{{ $t("doctor_license") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
        <p>{{ $t("service_list") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
        <p>{{ $t("company_photos") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
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
      <el-button @click="nextStep('step-2')" class="return">{{
        $t("previous_button")
      }}</el-button>
    </el-col>
    <el-col :sm="24" :md="12">
      <el-button @click="nextStep('completed')" class="next">
        {{ $t("submit_button") }}
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
  created() {
    this.$store.commit("SET_VENDOR_STEP", 2);
  },
};
</script>

<style scoped>
h6 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

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