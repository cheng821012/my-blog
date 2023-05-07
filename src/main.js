import { createApp } from "vue";
import { createPinia } from "pinia";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/font/fontF.css";
import router from "./router";

const app = createApp(App);
SwiperCore.use([Autoplay, Pagination]);
app.use(createPinia());
app.use(router);
app.mount("#app");
