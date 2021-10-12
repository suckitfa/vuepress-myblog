### Promise API
- all 
> 接受promise实例数组为参数，返回所有的promise实例的最后的值组成的数组
> 特点是：如果其中一个promise实例为rejected， 则all方法的状态变为rejected.
- race
> 接受promsie实例数组为参数，返回最先执行完的promise实例的值
- allSettle
```js
Promise.all()
Promise.race()
Promise.allSettle()
```