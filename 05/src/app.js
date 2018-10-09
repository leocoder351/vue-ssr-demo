import Vue from 'vue';
import createStore from './store/store.js';
import createRouter from './router';
import App from './App.vue';

export function createApp() {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, store, router, App };
}