<template>
<div style="background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);">
     <v-container class="d-flex align-center justify-center" style="height: 100vh">
    <v-data-table
      v-if="users.length > 0"
      :headers="headers"
      :items="users"
      class="elevation-1"
      style="width: 100%"
    >
      <template v-slot:top>
        <div class="pt-4 px-4">
          <span class="text-h5">Пользователи</span>
        </div>
      </template>
      <template v-slot:item.lastVisit="{ item }">
        {{ formatDate(item.lastVisit) }}
      </template>
      
    </v-data-table>
  </v-container>
</div> 
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from 'moment';

export default {
    data: () => ({
    headers: [
      {
        text: "Пользователь",
        align: "start",
        value: "name",
      },
      { text: "Почта", value: "email" },
      { text: "Статус", value: "status" },
      { text: "Последний визит", value: "lastVisit" },
    ],
  }),
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["getUsers"]),
    formatDate(date) {
      return moment(date).format("YYYY.MM.DD, HH:mm:ss");
    },
  },
};
</script>