<template>
  <div class="app-main-layout">
    <Navbar 
    @navClick="isOpen=!isOpen"
    />
    <Sidebar v-model="isOpen" />
    <main class="app-content" :class="{full:!isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';
export default {
  data(){
    return{
      isOpen:true,
    }
  },
  name: 'main-layout',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
