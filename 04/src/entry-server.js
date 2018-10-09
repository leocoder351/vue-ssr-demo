import { createApp } from './app.js';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, App } = createApp();

    let components = App.components;
    let asyncDataPromiseFns = [];
  
    Object.values(components).forEach(component => {
      if (component.asyncData) {
        console.log(3333);
        console.log(component);
        asyncDataPromiseFns.push(component.asyncData({ store }));
      }
    });
  
    Promise.all(asyncDataPromiseFns).then((result) => {
      // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
      context.state = store.state;
  
      console.log(222);
      console.log(store.state);
      console.log(context.state);
      console.log(context);
  
      resolve(app);
    }, reject);
  });
}