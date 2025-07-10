import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import plugins from "./plugins/gsaphelper";
import { createRouter, createWebHistory } from "vue-router";
import landingpage from "./components/views/landingpage.vue";
import email from "./components/views/Email.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: landingpage },
    { path: "/emailMe", component: email },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(routes);
app.use(plugins);
app.mount("#app");
