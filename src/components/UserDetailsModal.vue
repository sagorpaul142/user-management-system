<template>
  <v-row justify="end">
    <v-col cols="12" sm="12">
      <v-dialog v-model="showModal" width="500" persistent>
        <v-card>
          <v-card-title primary-title>
            <span class="text-capitalize">{{ selectedUser.name }}</span> Details
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="text-capitalize text-center">
            <img
              :src="selectedUser.image"
              :style="{ maxWidth: '250px', maxHeight: '200px' }"
              :alt="selectedUser.name"
            />
          </v-card-text>

          <v-card-text class="text-capitalize">
            Name : {{ selectedUser.name }}
          </v-card-text>
          <v-card-text class="pt-0">
            Email : {{ selectedUser.email }}
          </v-card-text>
          <v-card-text class="pt-0">
            Phone : {{ selectedUser.phone }}
          </v-card-text>
          <v-card-text class="text-capitalize pt-0">
            Role : {{ selectedUser.role }}
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('close')" color="error"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UserDetailsModal",
  props: {
    active: Boolean,
    selectedUser: Object,
  },
  data() {
    return {
      showModal: this.active,
    };
  },
};
</script>
