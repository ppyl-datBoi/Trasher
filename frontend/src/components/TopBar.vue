<template>
  <div>
    <v-toolbar
      dense
      color="transparent"
      flat
      style="position: fixed; width: 100%; z-index: 1"
    >
      <v-app-bar-nav-icon @click="toogleDrawer(!drawer)"></v-app-bar-nav-icon>

      <v-toolbar-title>TRASHER</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        v-if="profile === null"
        @click="login"
        outlined
        rounded
        small
        style="text-transform: none"
      >
        Войти
      </v-btn>
      <span v-else>
        {{ profile.name }}
      </span>
      <v-btn icon href="https://github.com/ppyl-datBoi/Trasher">
        <v-icon>mdi-git</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TopBar",

  computed: {
    ...mapState({
      profile: (state) => state.profile,
      drawer: (state) => state.drawer,
    }),
  },
  methods: {
    ...mapMutations(["toogleDrawer", "login"]),
  },
};
</script>