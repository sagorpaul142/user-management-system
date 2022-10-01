<template>
  <v-container>
    <v-row no-gutters>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card class="ma-2 pa-2">
          <h3 class="text-center">Users</h3>
          <v-list-item>
            <UserCard :userList="userList"/>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="ma-2 pa-2">
          <h3 class="text-center">Admin</h3>
          <v-list-item>
            <UserCard :userList="adminList"/>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "./UserCard";

export default {
  name:"UserComponent",
  components: { UserCard },
  computed: {
    ...mapGetters({
      adminList: "adminList",
      userList: "userList",
    }),
  },
}
</script>