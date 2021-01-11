import axios from "axios";
import vuex from '../store/index';

const html = axios.create({
     headers: {
       "Content-type": "application/json"
     }
   });
html.interceptors.request.use(function (config) {
    const whiteURL = ["/profile", '/logout', '/all-apps'];
    // if(!vuex.state.profile && !whiteURL.find(config.url)) window.open('http://localhost:9000/signin', '_blank');
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default html;