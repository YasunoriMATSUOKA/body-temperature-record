<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: () => ({
    pageTitle: "ホーム",
    message: "This is a home page"
  })
});
</script>
