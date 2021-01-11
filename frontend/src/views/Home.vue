<template>
<div>
  <v-img src="../assets/3.jpg" style="height:100vh;">
  <v-row style="height:100vh;">
    <v-col cols="6" class="d-flex align-center justify-center py-0">
       <div>
    <v-row class="d-flex justify-center text-h1 py-5 text--primary font-weight-black"><span>TRASHER</span></v-row>
  <v-row class="d-flex justify-center text-h5 text--secondary"><span>Сервис вывоза отходов</span></v-row>
   <v-row class="d-flex justify-center pt-8"><v-btn @click="pushToCreate" style="width:200px" depressed rounded color="white">Создать заявку</v-btn></v-row>
 <!--  <v-main class="d-flex justify-center">
        <v-btn @click="checkAuthorization">
          Проверка
        </v-btn>
        <v-btn @click="addPost">
          Добавить
        </v-btn>
    </v-main> -->
  </div>
    </v-col>
    <v-col cols="6" class="d-flex align-center py-0">
      <v-img src="../assets/waste.png" class="d-flex align-center">
  
  </v-img>
    </v-col>
  </v-row>
  
  </v-img>
</div>
</template>

<script>
import {mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'Home',

  data: () => ({
    post: {
      title: "1",
      text: "2",
    }
  }),
    computed: {
    ...mapState({
      profile: (state) => state.profile,
    })
  },
  methods: {
    ...mapMutations(["login"]),
    pushToCreate(){
      if(this.profile !== null) {
        this.$router.push("/create");
      } else {
        this.login();
      }     
    },
    addPost(){
      const path = "/add";
      const {title, text} =  this.post;
      axios.post(path, {title, text}).then((response) => {
        console.warn(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
};
</script>
