
洋葱模型就是中间件的处理流程，中间件的生命周期:
1. 前期处理
2. 交给并等待其他中间件处理 `dispatch`
3. 后期处理

多个中间件处理，就形成了所谓的洋葱模型，它是 AOP 面向切面编程的一种应用。

```js
const App = () => {
    const context = {}
    const middleWareQueue = [];
    return {
        use(fn) {
            middleWareQueue.push(fn)
        },
        callback() {
            function dispatch(i) {
                let fn = middleWareQueue[i]
                Promise.resolve(
                    fn(context,function next() {
                        dispatch(i+1)
                    })
                )
            }
            return dispatch(0)
        }
    }
}
```