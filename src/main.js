import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://ipnakeshuluwafcrldts.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE2NDI5OTg1NjEsImV4cCI6MTk1ODU3NDU2MX0.Op6gKzmu57-5m-C6NSNi17cRqP_4c4l0gb_y3EreuHw",
  supabaseOptions: {},
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
