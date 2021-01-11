import Vue from 'vue';
import Vuex from 'vuex';
import axios from "../api/http-common";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
    drawer:false,
    allApps: [],
    users:[],
    userStatuses: [{id:0, title: 'Админ'},{id:1, title: 'Пользователь'}, {id:2, title: 'Модератор'}, {id:3, title: 'Заблокирован'}],
    statuses: [{id:0, title: 'Заблокирована'},{id:1, title: 'На рассмотрении'}, {id:2, title: 'Активна'}, {id:3, title: 'Завершена'},]
  },
  mutations: {
    setProfile (state, payload) {
      state.profile = payload;
    },
    toogleDrawer(state, payload){
      state.drawer = payload;
    },
    login(){
      window.close();
      window.open('http://localhost:9000/signin', '_blank');    
  },
  setUsers(state, payload) {
    let result = payload;
    result.forEach(user => {
      user.status = state.userStatuses.find((s) => s.id === user.status).title;
    });
    console.log(result);
    state.users = result;
  },
  setAllApps(state, payload) {
    let result = payload;
    result.forEach(app => {
      app.status = state.statuses.find((s) => s.id === app.status).title;
    });
    state.allApps = result;
  }
  },
  actions: {
    checkAuthorization({commit}){
      axios.get("/profile").then((response) => {
        commit("setProfile", response.data.profile)
        console.warn(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    logout({commit}){
      commit('setProfile', null);
      axios.get('/logout');

    },
    createApp({}, payload){
      payload.number = +payload.number;
      axios.post("/app", payload).then((response) => {
        console.warn(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    getUsers({commit}){
      axios.get('/users').then((response) => {
        commit('setUsers', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    getAllApps({commit}){
      axios.get('/all-apps').then((response) => {
        commit('setAllApps', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    changeAppStatus({ dispatch}, payload){
      axios.put('/app', payload).then(() => {
        dispatch('getAllApps');
      })
      .catch((error) => {
        console.log(error);
      })
    },
    removeApp({ dispatch}, payload){
      console.log(payload);
      axios.delete('/app', { data: payload.id }).then(() => {
        dispatch('getAllApps');
      })
      .catch((error) => {
        console.log(error);
      })
    },
  },
  modules: {
  },
});
