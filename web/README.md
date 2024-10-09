# message_wall

## 引入全局样式

1. 下载 less loader
    ``` bash
    npm i less-loader less
    ```

2. 下载 style-resources-loader
    ``` bash
    npm i style-resources-loader
    ```

3. 在 vue.config.js 文件中配置
   ``` js
   const path = require('path')
    function resolve (dir) {
        return path.join(__dirname, dir)
        }
            module.exports = {
                pluginOptions: { // 第三方插件配置
                        'style-resources-loader': {
                        preProcessor: 'less',
                        patterns: [path.resolve(__dirname, './src/assets/css/base.less')] // less所在文件路径
                        }
            }
    }
   ```

- 注意：如果此时仍报错@bg变量没有声明，需再安装：vue-cli-plugin-style-resources-loader
    ``` bash
    npm i vue-cli-plugin-style-resources-loader --save-dev
    ```

## 项目中使用 iconfont 的 Symbol JS 方式引入会发生 eslint 报错
```
[eslint]
C:\Users\Cayson\Desktop\GitHub\message_wall\web\src\assets\fonts\iconfont\iconfont.js
1:4737  error  'e' is assigned to itself  no-self-assign

✖ 1 problem (1 error, 0 warnings)


You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.
```

- 如果 iconfont.js 是自动生成的文件，你可以忽略对该文件的 ESLint 检查。这样可以避免不必要的错误提示。

    在 iconfont.js 文件的顶部加上以下注释：

    ```javascript
    /* eslint-disable */
    ```
    这将会禁用整个文件的 ESLint 检查。

## 常用命令

- 创建 Vue 项目
    ``` bash
    vue create web
    ```

- Project setup
    ``` bash
    npm install
    ```

- 运行项目
    ``` bash
    npm run serve
    ```

- 打包项目
    ``` bash
    npm run build
    ```

- Lints and fixes files
    ``` bash
    npm run lint
    ```

- Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目结构
    ``` 
    |-- babel.config.js  
    |-- directoryList.md 
    |-- jsconfig.json    
    |-- package-lock.json
    |-- package.json     
    |-- README.md        
    |-- vue.config.js    
    |-- mock                            // mock 模拟数据
    |-- public
        |-- favicon.ico  
        |-- index.html   
    |-- src
        |-- App.vue      
        |-- main.js      
        |-- api                         // 静态资源
        |-- assets       
        |   |-- logo.png 
        |   |-- fonts    
        |   |-- img      
        |-- components                  // 公共组件
        |   |-- HelloWorld.vue
        |-- router                      // 路由配置目录
        |-- store                       // VueX 状态管理目录
        |-- styles                      // 方法目录
        |-- views                       // 页面目录
    |-- static                          // 静态资源(不会杯打包)
    ```