# `v-model`三问
### what is `v-model`?
`v-model`是vue提供的一个指令，能够顾实现表元素 `input`,`textarea`,`select`等元素和组件上创建双向绑定的数据。本质上是一种语法糖，既可以世界定义在元素表单元素也可以用在自定义组件上。

### v-model本质语法糖：
- input和textarea使用 `value` 和 `input`事件
- checkbox和radio使用`checked`和`change`事件
- select元素使用`value`和`change`事件

v-model也支持指令修饰符
- `.trim`: 首尾空格过滤
- `.number`: 自动parseFloat
- `.lazy` 取代input事件而监听change事件
```js

```
### why we need `v-model`?
双向绑定数据
### how to use `v-model`?
表单元素input上的使用
```html
<body>
    <div id="app">
        <div>
            <div>Message is {{msg}}</div>
            <div><input type="text" v-model="msg"></div>
        </div>
    </div>
    <script src="./vue.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                msg: ""
            }
        })
    </script>
</body>
```