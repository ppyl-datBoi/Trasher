<template>
<div style="background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
">
  <v-container class="d-flex align-center justify-center" style="height: 100vh">
    <v-data-table
      v-if="allApps.length > 0"
      :headers="headers"
      :items="allApps"
      class="elevation-1"
      style="width: 100%"
    >
      <template v-slot:top>
        <div class="pt-4 px-4">
          <span class="text-h5">Заявки</span>
        </div>
      </template>
      <template v-slot:item.createdDate="{ item }">
        {{ formatDate(item.createdDate) }}
      </template>
      <template v-if="profile.status === 1" v-slot:item.status="{ item }">
        {{ item.status }}
      </template>
      <template v-if="profile.status === 0" v-slot:item.status="{ item }">
        <v-row>
          <v-combobox
            v-model="item.status"
            :items="statuses"
            item-text="title"
            item-value="id"
            @change="toggleStatus(item)"
          ></v-combobox>
          <v-btn @click="removeApp(item)" icon style="align-self: center">
            <v-icon>mdi-delete</v-icon>
          </v-btn></v-row
        >
      </template>
    </v-data-table>
  </v-container>
</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import moment from "moment";

export default {
  name: "AllApps",
  data: () => ({
    headers: [
      {
        text: "Заявитель",
        align: "start",
        value: "author",
      },
      { text: "Город", value: "city" },
      { text: "Улица", value: "street" },
      { text: "Дом", value: "number" },
      { text: "Дата создания", value: "createdDate" },
      { text: "Статус", value: "status" },
    ],
  }),
  computed: {
    ...mapState({
      allApps: (state) => state.allApps,
      statuses: (state) => state.statuses,
      profile: (state) => state.profile,
    }),
  },
  created() {
    this.getAllApps();
  },
  methods: {
    ...mapActions(["getAllApps", "changeAppStatus", "removeApp"]),
    ...mapMutations(["setAllApps"]),
    formatDate(date) {
      return moment(date).format("YYYY.MM.DD, HH:mm:ss");
    },
    toggleStatus(item) {
      let app = item;
      app.status = item.status.id;
      this.changeAppStatus(app);
    },
  },
};
</script>