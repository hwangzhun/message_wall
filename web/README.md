# message_wall

## Vue 中的 v-for 详解

- 在 Vue 中，v-for 指令用于迭代数组或对象，并根据每一项生成一个模板块。在你的代码中，v-for 正在迭代 wallLabel[id]，这是一个与 id 相关联的数组。

### 详解

``` js
<span 
  class="label-list" 
  v-for="(e, index) in wallLabel[id]" 
  :key="index" 
  :class="{ 'label-list-active': labelActive == index }" 
  @click="labelSelectNode(index)"
>
  {{ e }}
</span>
```
---

``` js
v-for="(e, index) in wallLabel[id]"
```

- wallLabel[id] 是一个数组。v-for 遍历这个数组的每一项，e 是数组的当前元素，index 是当前元素的索引。
- 这个 id 是一个响应式变量，表示从 wallLabel 数据源中获取第 id 项的数组，然后遍历其中的元素。
- 对于每个元素 e，Vue 会生成一个对应的 <span> 标签。

``` js
(e, index)
```

- e：表示当前迭代的元素（即数组中的每一个值）。
- index：当前元素的索引值，通常用于唯一标识每一个 <span> 标签。

``` js
:key="index"
```

- key 是 Vue 需要的一个唯一标识符，用于高效更新 DOM。当数组项发生变化时，key 帮助 Vue 确定哪些元素需要添加、更新或移除。
- 这里使用 index 作为 key，因为每个索引在数组中是唯一的。

``` js
:class="{ 'label-list-active': labelActive == index }"
```

- 这是一个动态绑定的类，根据 labelActive 的值来决定是否为当前 <span> 标签添加 label-list-active 类。
- labelActive == index 表示当当前遍历的项索引与 labelActive 的值相等时，会添加 label-list-active 类。

``` js
@click="labelSelectNode(index)"：
``` 

- 为每个生成的 <span> 添加一个点击事件，当点击该元素时，会触发 labelSelectNode(index) 函数，将当前的 index 作为参数传递过去。
- 这意味着点击某个标签后，会根据标签的索引值更新 labelActive 或执行其他操作。

#### 总结 

- v-for="(e, index) in wallLabel[id]" 循环遍历数组 wallLabel[id]，e 是数组中的值，index 是当前值的索引。
- 每个遍历的元素生成一个 <span> 标签，带有 key 和点击事件。
- 根据 labelActive 的值，决定是否为某个标签添加 label-list-active 类，从而高亮当前选中的标签。

### 大白话解释

用大白话解释的话，v-for 的作用就是帮你「循环创建多个相同类型的元素」，比如你有一堆标签，想在页面上显示每一个标签，它就帮你一一创建对应的 <span> 标签。

#### 具体理解：

``` js
v-for="(e, index) in wallLabel[id]" 
```

就像是在说：
“我有一个叫 wallLabel[id] 的数组，里面放着很多标签。请你按照顺序（index）一个个取出来，e 就是当前取出来的那个标签。”
说白了，它是帮你「循环遍历数组里的内容」，然后把每个内容显示在页面上。

``` js
(e, index)：
```

e 就是「当前标签的名字」，比如你标签里有 "热门"、"推荐" 这样的内容，e 就分别是 "热门" 或 "推荐"。
index 就是「当前这个标签在数组里的顺序」，也就是第几个。

``` js
:key="index"：
```

Vue 需要每个生成的标签有个「独一无二的身份证」，这样它可以更聪明地知道哪个标签要更新、删除或新增。index 作为每个标签的顺序就是这个「身份证」，保证每个标签有唯一标识。

``` js
:class="{ 'label-list-active': labelActive == index }"
``` 

这个就是给每个标签加上一个动态的样式。简单来说：
如果 labelActive（表示当前选中的标签）跟当前这个标签的 index 是一样的，就加一个叫 label-list-active 的样式。
这个样式可能会让标签变成“高亮”或者有其他特殊的样子。

``` js
@click="labelSelectNode(index)"：
```

当你点击某个标签时，它会触发 ``` labelSelectNode(index) ``` 这个方法，意思就是：“我现在点了第 index 个标签，把这个标签的顺序值传给 labelSelectNode 函数去处理。”


#### 总结：

想象你有一排标签，Vue 用 v-for 就像帮你站在工厂流水线前，一个个按照顺序把这些标签拿出来贴在页面上。每个标签还有一个小编号（index），你可以点击其中一个，Vue 会记住你点击了第几个，给它加一个高亮的样式。这就是 v-for 的大白话理解。

## props: 语法糖写法

在 Vue 3 的 script setup 语法糖中，props 的定义方式比传统写法更加简洁。要定义一个 width 属性并为其设置默认值，你可以使用 defineProps 来定义 props。

``` js
<script setup>
const props = defineProps({
  width: {
    type: String,  // 设置类型为 String，因为 100% 是字符串
    default: '100%'  // 默认值为 '100%'
  }
});
</script>
```

### 解释
- defineProps：用来定义组件的 props，类似于传统写法中的 props 选项。
- type: String：指定 width 的类型为 String，因为 100% 是一个字符串。
- default: '100%'：指定 width 的默认值为 '100%'，这样如果父组件没有传入 width，它会默认使用 100%。

这就是在 script setup 语法糖中定义 props 的方式。

### 注意

1. 在 Vue 3 的 script setup 语法糖中，props 是不需要手动引入的。defineProps 是 Vue 内置的一个全局 API，它自动可用，因此你不需要显式导入它。
   - 你只需要直接使用 defineProps 来定义 props，不需要通过 import 语句导入。它的作用是让你在 script setup 中能够定义和使用 props。
   - 在 script setup 中，defineProps 是 Vue 内置的，不需要导入任何东西，直接用就可以了。

2. 运行报错 ```defineProps' is not defined```
   - 出现 'defineProps' is not defined 的错误，通常是因为你使用了 ESLint 的规则来检查代码，它无法识别 Vue 3 的内置编译器宏，比如 defineProps。

为了避免这个问题，你需要确保你的 ESLint 配置支持 Vue 3 的 script setup 语法糖。具体操作如下：

1. 更新 ESLint 配置
    在 .eslintrc.js 文件中，添加对 Vue 3 语法糖的支持。你可以这样修改你的 ESLint 配置

    ``` js
        module.exports = {
    // 你的其他 ESLint 配置
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',  // 确保使用 Vue 3 的规则
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021,  // 支持最新的 ES 语法
        sourceType: 'module',
    },
    rules: {
        // 你的其他规则
    },
    globals: {
        defineProps: 'readonly',  // 声明 defineProps 是全局的
        defineEmits: 'readonly',  // 如果你使用 defineEmits 也加上
        defineExpose: 'readonly',  // 如果使用 defineExpose
        withDefaults: 'readonly'   // 如果使用 withDefaults
    }
    };
    ```
2. 安装相关插件

    确保你的项目安装了 Vue 3 的 ESLint 插件，运行以下命令来安装：

    ``` bash
    npm install eslint-plugin-vue@latest --save-dev
    ```

    这一步是为了确保 ESLint 支持 Vue 3 的 script setup 语法糖。



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