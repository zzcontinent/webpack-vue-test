// 1 -------------------------------------------------------
// import Vue from 'vue'
// import './style/common.scss'

// var app = new Vue({
//     el: '#app',
//     data: {
//         msg: 'hello world'
//     }
// });

// 2 -------------------------------------------------------
// import tfunc from './util';
// import Vue from 'vue';

// import './style/common.scss';

// Vue.component('my-component', {
//     template: '<img :src="url" />',
//     data() {
//         return {
//             url: require('./img/zzmx.jpg')
//         }
//     }
// })

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     },
//     methods: {
//         async fetchData() {
//             const data = await tfunc()
//                 .then(console.log('callback ok!'))
//                 .catch((error) => {
//                     console.error(error)
//                 });
//             this.message = data;
//         }
//     },
//     created() {
//         this.fetchData();
//     }
// });


// 3 -------------------------------------------------------
import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';

var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

