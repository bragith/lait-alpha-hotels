import Vue from "vue";
import App from "./App.vue";
import "@/styles/reset.scss"
import "@/styles/fonts.scss"
import "@/styles/global.scss"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
