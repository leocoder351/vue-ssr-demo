## 第三阶段

后端渲染 包含 Ajax 数据

## 步骤

1. 在服务端开始渲染之前，预先获取所有需要的 ```Ajax``` 数据，然后存在 ```Vuex``` 的 ```Store``` 中
2. 把全部 ```Ajax``` 数据埋在 ```window.__INITIAL_STATE__``` 中，通过 ```HTML``` 传递到浏览器端
3. 浏览器端通过 ```Vuex``` 将 ```window.__INITIAL_STATE__``` 里面的 ```Ajax``` 数据分别注入到各个组件中