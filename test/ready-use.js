/*
 *解析 Vue.use() 的使用，
 */
/*
  1.在 Loading.vue 中定义一个组件
  <template>
    <div class="loading-box">
      Loading...
    </div>
  </template>
  2.在 jndex.js 中 引入 Loading.vue ，并导出
  // 引入组件
  // 定义 Loading 对象
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  import LoadingComponent from './loading.vue'
  const Loading = {
    install:function(Vue){
      Vue.component('Loading',LoadingComponent)
    }
  }
  // 导出
  export default Loading
*/



// function normalizeNamespace (fn) {
//   return (namespace, map) => {
//     if (typeof namespace !== 'string') {
//       map = namespace
//       namespace = ''
//     } else if (namespace.charAt(namespace.length - 1) !== '/') {
//       namespace += '/'
//     }
//     return fn(namespace, map)
//   }
// }

// function normalizeMap (map) {
//   return Array.isArray(map)
//     ? map.map(key => ({ key, val: key }))
//     : Object.keys(map).map(key => ({ key, val: map[key] }))
// }

