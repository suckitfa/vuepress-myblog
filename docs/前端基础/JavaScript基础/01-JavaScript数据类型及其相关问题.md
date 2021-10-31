### JavaScript的基本数据类型及其相关问题

### Javascript的数据类型

1. 基本数据类型
> 存储的都是值
- string
- number
```js
  // 特殊的情况
  typeof NaN // number
  NaN === NaN // false
  // JS中的数字存储为IEEE 754标准，全部用浮点数存储
  
```
- boolean
- null
```js
typeof null // 'object'
```
- undefined
- bigint
- symbol
2. 引用数据类型
- Object

### 引用类型和基本数据类型区别
传递值的时候（函数传参，赋值等），引用类型传递的值是"地址"，这个地址指向真正的值,而基本数据类型传递的是真正的值。如下示意图：
1. 引用数据类型（普通对象）
```js
let obj1 = {
  age:19
}
let obj2 = obj1
obj2.age = 99
```
![](./img/obj-stack.png)

2. 基本数据类型（数字：number）
```js
let obj1 = 1
let obj2 = obj1
obj2 = 2
```
![](./img/primitive-stack.png)
  

### 问题一：如何判断数据类型?

1. typeof 方法，适用于**基本数据类型的判断**，但是typeof null的结果为object
> null不是对象，传统bug
   ```js
   typeof 1 // 'number'
   typeof false // 'boolean'
   typeof 'hello' // 'string'
   // 注意typeof对于未申明的变量也会出现undefined
   typeof undefined // 'undefined'
   typeof Symbol() // 'symbol'
   ```

2. instanceof ，适用于对象，用于判断```Son instanceof Father```，son是否为Father的实例,基于原型链的原理。

   MDN的解释：验证Father原型是否在Son的原型链上。

   > 缺点就是，在原型链上的都会认为是实例。 因此不用来辨别具体是哪个对象的实例。

   MDN解释： **`Symbol.hasInstance`**用于判断某对象是否为某构造器的实例。因此你可以用它自定义 [`instanceof`] 操作符在某个类上的行为。

   ```js
   // Symbol.hasInstance可以让我们自定义,instanceof的行为
   class PrimitiveString {
     static [Symbol.hasInstance](x) {
       return typeof x === 'string'
     }
   }
   console.log('hello world' instanceof PrimitiveString) // true
   ```

   

   ### 简单实现instanceof原理：链表的遍历

   ```js
   // son为实例
   // father为一个构造函数
   // son沿着自己的原型链向下找，直到null(原型链的顶部)
   // 思路：其实这就是一个链表遍历的过程.
   function myinstanceof(son,father) {
     // 基本数据类型直接返回false
     if(typeof son !== 'object' || son == null) return false;
     const fatherPrototype = father.prototype
     let sonProto = son.__proto__
     while(sonProto !== null) {
       // 原型链的尽头是null
       	if(sonProto == fatherPrototype) {
           return true;
         }
       // 链表的遍历
       sonProto = sonProto.__proto__
     }
     return false;
   }
   
   const testFunc = ()=>{}
   const result = myinstanceof(testFunc,Function)
   console.log(result)
   ```

   

3. Object.prototype.toString.call
```js
   // --------------------------------------------------
   // 因此可以基于以上方法，封装一个函数来判断数据数据类型
   // https://javascript.ruanyifeng.com/stdlib/object.html#toc9
   // 看下阮一峰老师的优雅实现
   function type(val) {
    const result = Object.prototype.toString.call(val);
    // 这个正则，扣出数据类型名字
    return result.match(/\[object (.*?)\]/)[1].toLowerCase();
    }
    [
    'String',
    'Boolean',
    'Number',
    'Undefined',
    'Null',
    'Symbol',
    'Boolean',
    'Function',
    'RegExp'
    ].forEach(item => {
      // 构造出 isNumber...方法，放在type中， type看成Function的实例
    type['is' + item] = (val) => {
        return type(val) === item.toLowerCase();
    }});
  ```


### 问题二：falsy和truthy是啥意思？
> 概念：中文翻译过来对应为:虚值和真值，也就对应boolean类型的true和false
### falsy对应

- false 
- null
- undefined
- '' 和"" (空字符串)
- NaN
- 0
- 0n （bigint）
- document.all(MDN上出现的)

### 除falsy之外的都是truthy

### 问题三:两等和三等的区别

相同点：双方都是对象时，只有指向同一对象才会相等 （地址相同才是相等）

不同：

1. **=== 要求双方类型相同并且值相等**

2. == 要求在比较双方类型不同的时候会进行类型转换，先转换为相同类型，再做比较。
1. 两个都为对象，引用同一地址的时候为真.
(基本类型vs基本类型， 基本类型vs引用类型)
2. 先看是否为null和undefiend, null == undefined // true
操作数类型不同的时候：

两个操作数类型不同
3. string和number , 将string --> number
4. 其中一个boolean, 将boolean ---> number , 实际：true = 1 false = 0

5. 如果是一个是对象，另一个是number和string, 调用valueOf() 和toString方法将对象转为原始值

```js
NaN === NaN // false
NaN == NaN // false
```



### 问题四：数据类型是如何自动转换的?

- 转为boolean
  除falsy值外，其余为真

  > 0 空字符串 undefiend null NaN 0 0n document.all

- 对象转为string的流程

  1. [Symbol.toPromitive]
  2. valueOf
  3. toString

  依次调用以上定义在对象中的方法，如果返回了基本类型的值，就停止，则对应的基本类型之为返回的值。否则，报错。

  MDN解释：`**Symbol.toPrimitive**` 是一个内置的 Symbol 值，它是作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数。

  ```js
  let a = {
    valueOf() {
      return 0
    },
    toString() {
      return '1'
    },
    [Symbol.toPrimitive]() {
      return 2
    }
  }
  1 + a // => 3
  ```

  



### 参考资料

- https://lienjack.github.io/Blog/knowledge/js/1.type.html#%E7%B1%BB%E5%9E%8B%E7%A7%8D%E7%B1%BB
- https://yuchengkai.cn/docs/frontend/#%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality
- https://javascript.ruanyifeng.com/stdlib/object.html#toc9