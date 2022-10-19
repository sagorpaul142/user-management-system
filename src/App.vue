<template>
  <v-app>
    <v-main>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>User Management System</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="/user">User</router-link>
          </v-btn>
        </v-toolbar-items>
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-menu>
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

a.router-link-active.router-link-exact-active {
  font-weight: bold;
}

button.v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-text {
  font-weight: 300;
}
</style>
