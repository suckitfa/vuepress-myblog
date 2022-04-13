class Observered {
    constructor(name) {
        this.name = name;
        this.state = '走路'
        this._observerList = [];
    }
    setObserver(o) {
        this._observerList.push(o);
    }
    setState(state) {
        this.state = state;
        // 通知每一个观察者
        this._observerList.forEach(o => o.update.call(this));
    }
}

class Observer {
    constructor() {

    }
    update(od) {
        console.log(od.name + '正在' + od.state);
    }
}