<template>
  <div>
    <div v-for="user in userList" :key="user.id" class="user">
      <div class="d-flex justify-space-between align-center mb-3">
        <div class="d-flex align-center">
          <v-avatar size="45px">
            <img
                :src="user.image"
                :style="{ width: '64px' }"
                :alt="user.name"
            />
          </v-avatar>
          <p class="mx-3 text-capitalize">{{ user.name }}</p>
        </div>

        <div>
          <v-icon
              @click="userDetailsInfo(user)"
              class="icon"
              icon="mdi-information"
              v-tooltip="{
              content: `Click then show <b>${user.name}</b> information`,
              html: true,
            }"
          />

          <v-icon
              @click="editSingleUserInformation(user.id,user)"
              class="mx-2 icon"
              icon="mdi-pencil"
              v-tooltip="{
              content: `Click then Edit <b>${user.name}</b> information`,
              html: true,
            }"
          />

          <v-icon
              @click="deleteSingleUserInformation(user.id)"
              class="icon"
              icon="mdi-delete"
              v-tooltip="{
              content: `Click then delete <b>${user.name}</b> information`,
              html: true,
            }"
          />
        </div>
      </div>
      <v-divider></v-divider>
    </div>

    <div v-if="userList.length === 0" class="text-center">
      <p class="no-user font-weight-bold">No User Found</p>
    </div>
  </div>

  <UserDetailsModal
      :active="showModal"
      :selectedUser="selectedUser"
      v-if="showModal"
      @close="showModal = false"
  />
  <UserEditModal
      :userId="userId"
      :editModal="editModal"
      :userEdit="editUser"
      v-if="editModal"
      @close="editModal = false"
    />
</template>

<script>
import UserDetailsModal from "@/components/UserDetailsModal";
import Swal from "sweetalert2";
import UserEditModal from "@/components/UserEditModal";
export default {
  name: "UserCard",
  props: ["userList"],
  components: {UserDetailsModal,UserEditModal},
  data() {
    return {
      showModal: false,
      selectedUser: {},
      editModal: false,
      editUser: {},
      userId: null,
      confirmModal: false,
    };
  },
  methods:{
    userDetailsInfo(user) {
      this.showModal = !this.showModal;
      this.selectedUser = user;
    },
    deleteSingleUserInformation(id, name) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: `Are you sure want to delete ${name}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            let timerInterval;
            swalWithBootstrapButtons.fire({
              title: "Your user has been deleted.",
              timer: 1000,
              icon: "success",
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {}, 10);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            });
            this.$store.dispatch("deleteUser", id);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            let timerInterval;
            swalWithBootstrapButtons.fire({
              title: "Your imaginary user is safe :",
              timer: 1000,
              icon: "error",
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {}, 10);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            });
          }
        });
    },
    editSingleUserInformation(id,user){
      this.editModal = !this.editModal;
      this.userId = id;
      this.editUser = user;
    }
  }
};
</script>

<style>
.icon {
  cursor: pointer;
}

hr.v-divider.v-theme--light {
  margin-bottom: 5px;
}

.btn-success {
  color: #fff !important;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-danger {
  color: #fff !important;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn {
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  margin: 0 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
  color: white;
}
</style>
