<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon
      @click.stop="toggleNavigationDrawer()"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <h1>{{ appTitle }}</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon>{{ icons.mdiLogout }}</v-icon>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiLogout } from "@mdi/js";

export default Vue.extend({
  data: () => ({
    appTitle: "体温記録",
    icons: {
      mdiLogout
    }
  }),
  methods: {
    toggleNavigationDrawer(): void {
      this.$emit("toggleNavigationDrawer");
    }
  }
});
</script>
