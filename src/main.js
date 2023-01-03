import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueScrollTo from "vue-scrollto";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

loadFonts();

createApp(App).use(router).use(store).use(VueScrollTo).use(vuetify).mount("#app");
