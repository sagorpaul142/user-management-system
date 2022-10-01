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
              class="mx-2 icon"
              icon="mdi-pencil"
              v-tooltip="{
              content: `Click then Edit <b>${user.name}</b> information`,
              html: true,
            }"
          />

          <v-icon
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
</template>

<script>
import UserDetailsModal from "@/components/UserDetailsModal";

export default {
  name: "UserCard",
  props: ["userList"],
  components: {UserDetailsModal},
  data() {
    return {
      showModal: false,
      selectedUser: {},
    };
  },
  methods:{
    userDetailsInfo(user) {
      this.showModal = !this.showModal;
      this.selectedUser = user;
    },
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
