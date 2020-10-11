<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    pageTitle: "寄付",
    message: "This is a contributions page"
  })
});
</script>
