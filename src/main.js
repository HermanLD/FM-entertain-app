import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "swiper/css";
import "@/assets/styles/base.css";

import useImage from "@/utils/dyna-images.js";

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head);

// Add util to replace 'require' for loading images
app.config.globalProperties.$image = useImage;

app.mount("#app");

export default app;
