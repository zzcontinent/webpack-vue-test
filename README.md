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
```
resolve:{
    alias:{
        'vue$':'vue/dist/vue.js'
    }
}
```

- main.js
```
import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world'
    }
});
```

- index.html
```
<body>
    <div id="app">
        {{msg}}
    </div>
    <script src="/dist/build.js"></script>
</body>
```