<template>
  <v-app>
    <v-main>
      <drawer />
      <top-bar />
    <transition name="fade">
  <router-view />
    </transition>
    </v-main>  
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TopBar from './components/TopBar.vue';
import Drawer from './components/Drawer.vue';

export default {
  name: 'App',

  created() {
    this.checkAuthorization();
  },
  components: {
    TopBar,
    Drawer
  },
  methods: {
    ...mapActions(['checkAuthorization']),
  },
};
</script>

<style lang="scss">
  fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

