<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <p>{{ message }}</p>
    <FAQUnit />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FAQUnit from "@/components/views/About/FAQUnit.vue";

export default Vue.extend({
  components: {
    FAQUnit
  },
  data: () => ({
    pageTitle: "このアプリについて",
    message: "This is an about page"
  })
});
</script>
