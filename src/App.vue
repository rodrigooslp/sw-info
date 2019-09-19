<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      dark
      app
    >
      <v-list dense>
        <v-list-item two-line>
          <v-list-item-avatar color="secondary">SW</v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Welcome!</v-list-item-title>
            <v-list-item-subtitle>Star Wars Info Dump</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Characters</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SW-INFO</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="secondary"
      app
    >
      <v-layout justify-end>
        <span class="white--text">Powered by <a href="https://swapi.co" target="_blank" class="referral">swapi.co</a></span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style lang="scss">
.referral {
  text-decoration: none
}
</style>
