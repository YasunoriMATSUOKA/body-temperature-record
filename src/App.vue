<template>
  <v-app>
    <AppHeader @toggleNavigationDrawer="toggleNavigationDrawer" />
    <AppNavigationDrawer
      :showNavigationDrawer="showNavigationDrawer"
      @toggleNavigationDrawer="toggleNavigationDrawer"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppNavigationDrawer from "@/components/common/AppNavigationDrawer.vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppNavigationDrawer
  },
  data: () => ({
    showNavigationDrawer: false
  }),
  methods: {
    toggleNavigationDrawer(): void {
      this.showNavigationDrawer = !this.showNavigationDrawer;
    }
  }
});
</script>
