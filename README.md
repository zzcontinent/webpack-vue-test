### npm run build
- npm i webpack -S
- npm i webpack-cli -S
- npm run build

### npm run dev
- npm i webpack-dev-server -D


> -D --save-dev 保存到devDependencies版本信息,开发包
> -S --save 保存到dependencies版本信息,公用包


### 引入vue
- webpack.dev.config.js加入 
```js
resolve:{
    alias:{
        'vue$':'vue/dist/vue.js'
    }
}
```

- main.js
```js
import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    }
});
```

- index.html
```html
<body>
    <div id="app">
        {{msg}}
    </div>
    <script src="/dist/build.js"></script>
</body>
```

### 引入scss+css

- npm i node-sass css-loader vue-style-loader sass-loader -D

- 匹配css

```js
module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }
        ]
    }
```

匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
解析器的执行顺序是从下往上(先css-loader再vue-style-loader)

注意：因为我们这里用vue开发，所以使用vue-style-loader，其他情况使用style-loader

css-loader使得我们可以用模块化的写法引入css,vue-style-loader会将引入的css插入到html页面里的style标签里

要引入scss也是同理的配置写法


- 匹配scss+sass
```js
module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            }
        ]
    }
```



### 引入图片资源

- npm i file-loader -D
- webpack.config.js添加一个loader
```js
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]?[hash]'
    }
}
```

- main.js
```js
Vue.component('my-component', {
  template: '<img :src="url" />',
  data() {
    return {
      url: require('./img/logo.png')
    }
  }
})
```

- index.html
```html
<body>
    <div id="app">
        {{message}}
        <my-component/>
    </div>
    <script src="/dist/build.js"></script>
    
</body>
```


### 单文件组件

- npm i vue-loader vue-template-compiler -D

- 添加一个vue-loader

```js
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
            'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ],
            'sass': [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ]
        }
    }
}
```

- App.vue
```js
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img src="./img/logo.png">
    <input type="text" v-model="msg">
  </div>
</template>

<script>

import getData from './util';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>
```