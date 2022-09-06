<template>
<div id="app">
  <component :is="layout">
    <router-view />
  </component>
  </div>
</template>

<style lang="scss">
@import '../node_modules/materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>

<script>
import authLayout from '@/layouts/authLayout.vue';
import mainLayout from '@/layouts/mainLayout.vue';
export default {
  components: {
    authLayout,
    mainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    },
  },
};
</script>
