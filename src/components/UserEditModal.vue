<template>
  <v-row justify="end">
    <v-col cols="12" sm="12" class="d-flex justify-end">
      <v-dialog v-model="dialog" max-width="500" persistent>
        <v-card>
          <div class="d-flex justify-space-between align-center">
            <v-card-title class="text-h5"> Edit User</v-card-title>
            <v-icon
                class="mx-2 icon mr-4"
                @click="handleClose"
                icon="mdi-close-circle-outline"
            />
          </div>
          <v-divider></v-divider>

          <v-card-text>
            <v-form @submit.prevent="submitForm" @reset="resetForm">
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                      label="User name"
                      color="primary"
                      variant="underlined"
                      v-model="formData.username"
                      placeholder="Enter your user name"
                      @blur="v$.username.$touch"
                      :error-messages="
                      v$.username.$error ? v$.username.$errors[0].$message : ''
                    "
                  ></v-text-field>

                  <v-text-field
                      color="primary"
                      variant="underlined"
                      label="Email"
                      v-model="formData.email"
                      placeholder="Enter your email"
                      @blur="v$.email.$touch"
                      :error-messages="
                      v$.email.$error ? v$.email.$errors[0].$message : ''
                    "
                  ></v-text-field>

                  <Vue3IntlInput
                      id="contact-number"
                      v-model="formData.phone"
                      class="mt-4"
                  />

                  <div class="input__details mb-4">
                    <div class="messages">
                      <div class="messages__message">
                        {{
                          v$.phone.$error ? v$.phone.$errors[0].$message : ""
                        }}
                      </div>
                    </div>
                  </div>

                  <v-file-input
                      v-if="image === ''"
                      v-model="formData.files"
                      color="deep-purple accent-4"
                      counter
                      label="File input"
                      placeholder="Select your files"
                      outlined
                      :show-size="1000"
                      prepend-inner-icon="mdi-camera"
                      variant="solo"
                      accept="image/png, image/jpeg, image/bmp"
                      :error-messages="
                      v$.files.$error ? v$.files.$errors[0].$message : ''
                    "
                      @input="pickfile"
                  >
                    <template v-slot:selection="{ fileNames }">
                      <template
                          v-for="(fileName, index) in fileNames"
                          :key="fileName"
                      >
                        <v-chip
                            v-if="index < 2"
                            color="deep-purple-accent-4"
                            label
                            size="small"
                            class="mr-2"
                        >
                          {{ fileName }}
                        </v-chip>

                        <span
                            v-else-if="index === 2"
                            class="text-overline text-grey-darken-3 mx-2"
                        >
                          +{{ files.length - 2 }} File(s)
                        </span>
                      </template>
                    </template>
                  </v-file-input>

                  <div class="image-preview" v-if="image">
                    <v-img
                        class="bg-white image-show"
                        :aspect-ratio="1"
                        :src="this.userEdit.image"
                    ></v-img>

                    <v-btn
                        @click="deleteImage"
                        color="error"
                        plain
                        class="btn-delete"
                        prepend-icon="mdi-delete"
                    >
                      Upload
                    </v-btn>
                  </div>

                  <v-radio-group
                      v-model="formData.role"
                      :error-messages="
                      v$.role.$error ? v$.role.$errors[0].$message : ''
                    "
                      inline
                  >
                    <v-radio
                        v-for="n in type"
                        :key="n"
                        :label="`${n}`"
                        :value="n"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-btn
                  @click="submitForm"
                  class="ma-2"
                  color="secondary"
                  elevation="2"
                  outlined
              >
                Update
              </v-btn>
            </v-form>
          </v-card-text>

          <div class="mb-5"></div>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import {reactive} from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import Vue3IntlInput from "./Vue3IntlInput.vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const formData = reactive({
      username: this?.userEdit?.name,
      email: this?.userEdit?.email,
      phone: this?.userEdit?.phone,
      role: this?.userEdit?.role,
      image: this?.userEdit?.image,
      files: [],
    });
    const rules = {
      username: {
        required: helpers.withMessage("User name is required", required),
        minLength: helpers.withMessage(
            "User name should be at least 3 characters long",
            minLength(3)
        ),
        maxLength: helpers.withMessage(
            "User name maximum length allowed is 15 characters",
            maxLength(15)
        ),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Invalid email address", email),
      },
      phone: {
        required: helpers.withMessage("Phone number is required", required),
        minLength: helpers.withMessage(
            "Please enter valid phone number",
            minLength(14)
        ),
        maxLength: helpers.withMessage(
            "Please enter valid phone number",
            maxLength(14)
        ),
      },
      role: {required: helpers.withMessage("Role is required", required)},
      files: {required: helpers.withMessage("Image is required", required)},
    };
    const v$ = useVuelidate(rules, formData);
    return {v$, formData};
  },
  name: "UserEditModal",
  components: {Vue3IntlInput},
  props: {
    editModal: Boolean,
    userEdit: Object,
    userId: Number,
  },
  data() {
    return {
      row: null,
      column: null,
      dialog: this?.editModal,
      imageData: "",
      type: ["user", "admin"],
      image: "",
    };
  },

  created() {
    this.formData.username = this.userEdit.name;
    this.formData.email = this.userEdit.email;
    this.formData.role = this.userEdit.role;
    this.formData.phone = this.userEdit.phone;
    this.formData.files = [this.userEdit.fileName];
    this.image = this.userEdit.image;
  },
  methods: {
    pickfile(e) {
      var input = e?.target?.files[0];
      this.fileName = input?.name;
      if (input) {
        var reader = new FileReader();
        reader.onloadend = () => {
          this.imageData = reader.result;
        };
        reader.readAsDataURL(input);
      }
    },
    resetForm() {
      this.formData.username = undefined;
      this.formData.email = undefined;
      this.formData.role = undefined;
      this.formData.files = undefined;
      this.formData.phone = undefined;
      this.v$.$reset();
    },
    deleteImage() {
      this.image = "";
      this.formData.files = undefined;
    },
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let user = {
          id: this.userId,
          name: this.formData.username,
          email: this.formData.email,
          phone: this.formData.phone,
          role: this.formData.role,
          image: this?.imageData ? this.imageData : this.userEdit?.image,
        };
        Swal.fire({
          title: "Do you want to update the user?",
          showCancelButton: true,
          confirmButtonText: "Save",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("updateUser", user);
            this.dialog = false;
            this.resetForm();
            let timerInterval;
            Swal.fire({
              title: "Saved!",
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            });
          }
        });
      }
    },
    handleClose() {
      Swal.fire({
        title: "Do you want to close the modal?",
        showCancelButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          this.dialog = false;
        }
      });
    },
  },
};
</script>

<style>
.v-input__prepend {
  display: none;
}

.image-preview {
  position: relative;
  margin-bottom: 10px;
}

.image-show {
  width: 100%;
  max-height: 270px;
  border: 1px solid;
  object-fit: cover;
}

.btn-delete {
  position: absolute;
  left: 50%;
  bottom: 0%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}
</style>
