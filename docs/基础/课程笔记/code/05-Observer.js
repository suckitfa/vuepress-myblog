// 观察者模式基于发布订阅的
// 发布订阅发布和订阅的两者无关
// 观察者模式中： 被观察者应该存放着观察者 被观察者状态变化，更新自己升上所有的观察者
// vue中的应用很常见 Observer Watcher
class Subject {
    constructor() {
        this.state = '开心';
        this._arr = [];
    }

    // 装载观察者
    attach(ob) {
        this._arr.push(ob);
    };

    // 更新自己的状态,
    setState(newState) {
        this.state = newState;
        this._arr.forEach(ob => ob.update(newState))
    }
}

// 每个数据变化，都应该动静自己的观察者，而不是一个数据变了，都更新
class Obersever {
    constructor(name) {
        this.name = name;
    }

    // 让悲观者调用
    update(newState) {
        console.log(this.name + newState);
    }
}
let subject = new Subject();

let my1 = new Obersever('父亲');
let my2 = new Obersever('母亲');

subject.attach(my1);
subject.attach(my2);
subject.setState('大哭');