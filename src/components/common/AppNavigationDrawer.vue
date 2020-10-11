<template>
  <v-navigation-drawer
    app
    v-model="childShowNavigationDrawer"
    absolute
    temporary
  >
    <v-list>
      <v-list-item
        v-for="navigationMenu in navigationMenus"
        :key="navigationMenu.key"
        :to="navigationMenu.link"
      >
        <v-list-item-icon>
          <v-icon>{{ navigationMenu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ navigationMenu.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiHome,
  mdiAccount,
  mdiCog,
  mdiInformation,
  mdiHelpCircle,
  mdiGift
} from "@mdi/js";

interface NavigationMenu {
  key: number;
  icon: string;
  name: string;
  link: string;
}

export default Vue.extend({
  props: {
    showNavigationDrawer: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    showNavigationDrawer(val: boolean) {
      this.childShowNavigationDrawer = val;
    },
    childShowNavigationDrawer(val: boolean) {
      if (!val) {
        this.$emit("toggleNavigationDrawer");
      }
    }
  },
  data: () => ({
    childShowNavigationDrawer: false,
    navigationMenus: [
      { key: 0, icon: mdiHome, name: "ホーム", link: "/" },
      { key: 1, icon: mdiAccount, name: "マイページ", link: "/mypage" },
      { key: 2, icon: mdiCog, name: "設定", link: "/settings" },
      {
        key: 3,
        icon: mdiInformation,
        name: "このアプリについて",
        link: "/about"
      },
      { key: 4, icon: mdiHelpCircle, name: "ヘルプ", link: "/help" },
      { key: 5, icon: mdiGift, name: "寄付", link: "/contributions" }
    ] as NavigationMenu[]
  })
});
</script>
