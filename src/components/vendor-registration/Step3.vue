<template>
  <h6>{{ $t("upload_files") }}</h6>
  <el-row :gutter="20">
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("business_registeration_certificate") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListBusiness"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :on-preview="handlePictureCardPreview"
          :on-change="change"
          ref="upload"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
        <!-- <el-upload action="#" list-type="picture-card" :auto-upload="false">
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
        </el-upload> -->
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("certificate_of_incorporation") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListCompany"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessCompany"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadCompany"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("bank_statement") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListBank"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessBank"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadBank"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("hong_kong_identity_card") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListHKID"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessHKID"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadHKID"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("doctor_license") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListDoctor"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessDoctor"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadDoctor"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("service_list") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListDocument"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessDocument"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadDocument"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="upload-card">
        <p>{{ $t("company_photos") }}</p>
        <p class="description">
          {{ $t("upload_file_text") }}
        </p>
        <el-upload
          v-model:file-list="fileListCompanyPhoto"
          :action="`${window.location.protocol}//${window.location.hostname}/api/upload/vendor-registration`"
          list-type="picture-card"
          :on-success="handleSuccessCompanyPhoto"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          ref="uploadCompanyPhoto"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-col>
    <el-col></el-col>
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
import { Plus } from "@element-plus/icons-vue";
import { UploadFile } from "element-plus/es/components/upload/src/upload.type";
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  components: {
    Plus,
  },
  props: ["formData"],
  data() {
    return {
      UploadFile,
      dialogVisible: false,
      dialogImageUrl: "",
      fileListBusiness: [],
      fileListCompany: [],
      fileListBank: [],
      fileListHKID: [],
      fileListDoctor: [],
      fileListDocument: [],
      fileListCompanyPhoto: [],
      category: "",
      documents: [],
    };
  },
  methods: {
    nextStep(value) {
      if (value === "step-2") {
        this.$emit("changeStep", { value: value, formData: {} });
        return;
      }
      console.log(this.formData);
      console.log(value);
      const clonedArray = this.documents.map((a) => {
        return { ...a };
      });
      clonedArray.forEach((object) => {
        delete object["uId"];
      });
      console.log(this.documents);
      console.log(clonedArray);
      const data = {
        companyName: this.formData.companyName,
        contactPerson: this.formData.contactName,
        contactNo: this.formData.companyPhone,
        companyAddress: this.formData.companyAddress,
        bankName: this.formData.bankName,
        bankAccNo: this.formData.bankNumber,
        applicantName: this.formData.name,
        dateOfBirth: moment(this.formData.dob).format("YYYYMMDD"),
        idNo: this.formData.idCardNumber,
        email: this.formData.email,
        otp: this.formData.verificationCode,
        password: this.formData.password,
        isAgreePrivacyNotice: this.formData.checkbox,
        memberRegistration: false,
        vendorRegistration: true,
        platformAdmin: false,
        // document: [],
        document: clonedArray,
      };
      console.log(data);
      this.$store
        .dispatch("auth/register", data)
        .then(() => {
          this.$emit("changeStep", { value: value, formData: {} });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
      // this.$store.dispatch("auth/vendorRegistration", data).then(() => {
      //   this.$emit("changeStep", value);
      // });
      // this.$emit("changeStep", value);
    },
    handleRemove(file) {
      console.log(file);
      this.documents = this.documents.filter((item) => item.uId !== file.uid);
      //       const indexOfObject = this.documents.findIndex(object => {
      //   return object.uId === file.uid;
      // });
      console.log(this.documents);

      // console.log(indexOfObject); // 👉️ 1

      // arr.splice(indexOfObject, 1);

      // console.log(arr);
    },
    handleRemoveFile(file) {
      console.log(file);
    },
    handleSuccess() {
      // this.documents = [];
      // console.log(this.$refs);
      this.fileListBusiness = [];
      this.fileListBusiness = this.$refs.upload.uploadFiles;
      console.log(this.$refs.khaled);
      console.log(this.fileListBusiness);

      this.fileListBusiness.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isBR: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );

      console.log(this.documents);
    },
    handleSuccessCompany() {
      this.fileListCompany = this.$refs.uploadCompany.uploadFiles;

      this.fileListCompany.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isCI: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    handleSuccessBank() {
      this.fileListBank = this.$refs.uploadBank.uploadFiles;

      this.fileListBank.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isBankStatement: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    handleSuccessHKID() {
      this.fileListHKID = this.$refs.uploadHKID.uploadFiles;

      this.fileListHKID.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isIdNo: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    handleSuccessDoctor() {
      this.fileListDoctor = this.$refs.uploadDoctor.uploadFiles;

      this.fileListDoctor.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isDoctorLicense: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    handleSuccessDocument() {
      this.fileListDocument = this.$refs.uploadDocument.uploadFiles;

      this.fileListDocument.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isServiceList: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    handleSuccessCompanyPhoto() {
      this.fileListCompanyPhoto = this.$refs.uploadCompanyPhoto.uploadFiles;

      this.fileListCompanyPhoto.find((item) => {
        this.documents.push({
          uId: item.raw.uid,
          isCompanyPhotos: true,
          filePath: item.response.item,
        });
      });
      this.documents = this.documents.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.uId === value.uId)
      );
      console.log(this.documents);
    },
    change() {
      // this.fileList = this.$refs.upload.uploadFiles;
      // console.log(this.fileList);
      // const arr = [];
      // this.fileList.find((item) => {
      //   arr.push({ isBR: true, filePath: item.response.item });
      // });
      // console.log(arr);
    },
    handlePictureCardPreview(uploadFile) {
      this.dialogImageUrl = uploadFile.url;
      this.dialogVisible.value = true;
      console.log("khaled");
      console.log(this.dialogImageUrl);
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
  align-self: flex-end;
}
</style>