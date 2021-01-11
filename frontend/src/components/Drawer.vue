<template>
  <v-navigation-drawer absolute v-model="drawer">
    <div class="pt-10"></div>
    <div v-if="profile !== null">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="profile.userpic" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ profile.name }}</v-list-item-title>
          <v-list-item-subtitle @click="logout" class="logout"
            >Выйти</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </div>

    <div v-else>
      <v-list dense>
        <v-list-item @click="login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Войти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        { title: "Домой", icon: "mdi-home-city", route: "/" },
        {
          title: "Все заявки",
          icon: "mdi-apps",
          route: "/all-apps",
        },
        {
          title: "Пользователи",
          icon: "mdi-account-group-outline",
          route: "/users",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      appDrawer: (state) => state.drawer,
      profile: (state) => state.profile,
    }),
    drawer: {
      get() {
        return this.appDrawer;
      },
      set(val) {
        this.toogleDrawer(val);
      },
    },
  },
  methods: {
    ...mapMutations(["toogleDrawer", "login"]),
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss">
.logout:hover {
  cursor: pointer;
}
</style>