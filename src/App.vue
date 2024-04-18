<template>
  <component :is="getLayout">
    <router-view />
  </component>
</template>

<script>
import Layout from "./views/Layout.vue";

export default {
  components: {
    Layout,
  },
  computed: {
    getLayout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
