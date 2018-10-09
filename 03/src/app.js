import Vue from 'vue';
import createStore from './store/store.js';
import App from './App.vue';

export function createApp() {
  const store = createStore();

  const app = new Vue({
    store,
    render: h => h(App)
  });

  return { app, store, App };
}