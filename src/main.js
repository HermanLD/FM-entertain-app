import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "swiper/css";
import "@/assets/styles/base.css";

const useImage = (url) => {
  // const newURL = new URL(`/src/${url}`, import.meta.url).href;
  // console.log(newURL);
  return new URL(`/src${url}`, import.meta.url).href;
};

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Add util to replace 'require' for loading images
app.config.globalProperties.$image = useImage;

app.mount("#app");

export default app;
