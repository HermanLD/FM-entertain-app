import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import useImage from "./utils/image-load";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Add util to replace 'require' for loading images
app.config.globalProperties.$image = useImage;

app.mount("#app");
