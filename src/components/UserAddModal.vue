<template>
  <v-row justify="end">
    <v-col cols="12" sm="12" class="d-flex justify-end">
      <v-btn
          prepend-icon="mdi-account-plus"
          flat
          color="primary"
          dark
          @click.stop="dialog = true"
          :style="{ marginRight: '8px' }"
      >
        Add User
      </v-btn>

      <v-dialog v-model="dialog" max-width="500" persistent>
        <v-card>
          <div class="d-flex justify-space-between align-center">
            <v-card-title class="text-h5"> Add User</v-card-title>
            <v-icon
                class="mx-2 icon mr-4"
                @click="CloseModal"
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
                Submit
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
  helpers, alpha,
} from "@vuelidate/validators";
import Vue3IntlInput from "./Vue3IntlInput.vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const formData = reactive({
      username: "",
      email: "",
      phone: "",
      role: "",
      files: [],
    });

    const rules = {
      username: {
        required: helpers.withMessage("User name is required", required),
        alpha: helpers.withMessage("User name is not alphabetical", alpha),
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
  name: "UserAddModal",
  components: {Vue3IntlInput},
  props: {},
  data() {
    return {
      row: null,
      column: null,
      dialog: this?.showModal,
      imageData: "",
      type: ["user", "admin"],
      confirmModal: false,
      fileName: "",
    };
  },
  methods: {
    pickfile(e) {
      let input = e?.target?.files[0];
      this.fileName = input?.name;
      if (input) {
        let reader = new FileReader();
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
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let user = {
          name: this.formData.username,
          email: this.formData.email,
          role: this.formData.role,
          phone: this.formData.phone,
          fileName: this.fileName,
          image: this.imageData,
        };
        Swal.fire({
          title: "Do you want to save the user?",
          showCancelButton: true,
          confirmButtonText: "Save",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("addUser", user);
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
    CloseModal() {
      Swal.fire({
        title: "Do you want to close the modal?",
        showCancelButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.dialog = false;
          this.resetForm();
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

.input__details {
  align-items: flex-end;
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  grid-area: messages;
  letter-spacing: 0.0333333333em;
  line-height: normal;
  min-height: 22px;
  padding-top: 6px;
  overflow: hidden;
  justify-content: space-between;
}

.messages {
  flex: 1 1 auto;
  font-size: 12px;
  min-height: 14px;
  min-width: 1px;
  position: relative;
}

.messages__message {
  line-height: 12px;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  transition-duration: 150ms;
  color: red;
}

.swal2-container.swal2-center.swal2-backdrop-show {
  z-index: 99999999;
}
</style>
