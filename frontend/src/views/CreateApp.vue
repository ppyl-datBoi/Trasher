<template>
<div style="background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);">
    <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-sheet
      style="border: 1px solid #dadce0; border-radius: 1%"
      class="mx-auto"
      width="800"
    >
      <v-row class="py-10 px-10">
        <v-col>
          <v-row class="px-0 pb-3"
            ><v-col cols="12">
              <span class="text-h6">Создание звявки</span></v-col
            ></v-row
          >
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Заявитель*"
                placeholder="Иванов Иван"
                outlined
                v-model="app.author"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Почта"
                placeholder="example@google.com"
                outlined
                v-model="app.mail"
                disabled
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Население*"
                placeholder="Пермь"
                outlined
                v-model="app.city"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Улица*"
                placeholder="Мира"
                outlined
                v-model="app.street"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                label="Дом*"
                placeholder="15"
                type="number"
                outlined
                v-model="app.number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-0">
            <span
              class="text-caption text--secondary"
              style="place-self: center"
              >* - Обязательно для заполнения</span
            >
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!isReady" @click="create"> Создать </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from 'moment'

export default {
  data: () => ({
    app: {},
    isReady: false,
  }),
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
  mounted() {
    this.setDefaultValues();
  },
  watch: {
    app: {
      handler: function (newValue) {
        let result = true;
        for (let prop in this.app) {
          if (!this.app[prop]) result = false;
        }
        this.isReady = result;
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(['createApp']),
    setDefaultValues() {
      if (this.profile === null) {
        setTimeout(() => {
          this.setDefaultValues();
        }, 500);
        return;
      }
      this.app = {
        author: this.profile.name,
        mail: this.profile.email,
        city: null,
        street: null,
        number: null,
        status: 1,
      };
    },
    create(){
    this.app.createdDate = moment();
    this.createApp(this.app);
    this.$router.push('/all-apps')
  }
  },
};
</script>
