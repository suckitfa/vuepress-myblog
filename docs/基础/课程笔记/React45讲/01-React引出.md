###  UI

传统开发关注了太多的细节
React提出整体刷新的概念

React很简单
1. 新概念： 组件
2. 4个必须API
3. 单向数据流
4. 错误提示很完善

### 数据模型：引入Flux设计模式来管理数据

![image-20211123215525128](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123215525128.png)

![image-20211123215543228](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123215543228.png)

![image-20211123215658450](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123215658450.png)





### 组件化的开发UI

![image-20211123215928986](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123215928986.png)

React组件： prop + state = view

状态机

组件分类

1. 受控组件

   state控制引起

2. 非受控组件

![image-20211123222418403](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123222418403.png)

### 组件原则

组件设计：单一职责

数据状态管理： DRY原则 （能算的就算，尽量少state）



### JSX

在JavaScript代码中直接写HTML标记

![image-20211123222950495](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123222950495.png)

![image-20211123223212287](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123223212287.png)

Angular

![image-20211123223338819](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123223338819.png)

![image-20211123223442641](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123223442641.png)



### React渲染流程

![image-20211123223739309](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123223739309.png)

constructor

1. 用于初始化内部状态，很少使用 
2. 唯一可以直接修改state

getDerivedStateFromProps

![image-20211123224319877](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123224319877.png)

componentDidMount

![image-20211123224426213](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123224426213.png)

getSnapshotBeforeUpdate

![image-20211123224436080](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123224436080.png)

componetDidUpdate

![image-20211123224525829](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123224525829.png)

shouldComponetUpdate

![image-20211123224624892](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123224624892.png)



### JSX运行的基础 Virtual DOM

# diff算法的优化： 0(n^3) ----> 0(n)

1. 广度优先**分层**比较

![image-20211123230412422](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123230412422.png)

![image-20211123230602785](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123230602785.png)



![image-20211123230801035](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123230801035.png)

![image-20211123231014979](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123231014979.png)

key的作用,满足假设1，让他react有更搞的性能



### 组件的复用

react中使用的设计模式

- 高阶组件 不理解
- 函数作为子组件 不理解

![image-20211123231730309](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123231730309.png)

![image-20211123234357295](/Users/bobtang/Library/Application Support/typora-user-images/image-20211123234357295.png)



### Context API

```js
const ThemeContext = React.createContext('light');

```



解决组件的通信问题

![image-20211124122556486](/Users/bobtang/Library/Application Support/typora-user-images/image-20211124122556486.png)

### 脚手架

![image-20211124123515160](/Users/bobtang/Library/Application Support/typora-user-images/image-20211124123515160.png)