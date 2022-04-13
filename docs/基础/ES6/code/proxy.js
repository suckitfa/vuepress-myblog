// 理解为目标对象架设一个拦截层
//外界对该对象的访问都必须通过该层
var obj = new Proxy(
    {},
    {
        get: function(target,key,receiver) {
            console.log(` getting ${key}!`)
            return Reflect.get(target,key,receiver);
        },
        set:function(target,key,value,receiver){
            console.log(`setting ${key}!`)
            return Reflect.set(target,key,value,receiver);
        } 
    }
)

// Proxy重载了 overload 运算符
obj.count = 1;

++obj.count;

// 语法 new Proxy(target,handler)
// target: 所要拦截的对象
// handler: 设置的拦截器， 如果没有设置，等同于操作原对象
