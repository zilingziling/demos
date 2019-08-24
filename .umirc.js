import Router from './config/routerConfig'
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes:Router.routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'DEMOS',
      dll: false,
  }],
  ],
}
