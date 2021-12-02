class EventEmitter {
    constructor() {
            this.map = {};
        }
        // 补全代码
        /**
            1. 同一名称事件可能有多个不同的执行函数
            2. 通过"on"函数添加事件
            3. 通过"emit"函数触发事件
        */
    on(eventName, cb) {
        this.map[eventName] == undefined ?
            this.map[eventName] = [cb] :
            this.map[eventName].push(cb);
    }

    emit(eventName) {
        if (!this.map[eventName]) return;
        this.map[eventName].forEach(cb => cb());
    }
}


function test() {
    let sign1 = 0;
    let sign2 = 0;
    const emitter = new EventEmitter();
    emitter.on('add', function() { sign1++ });
    emitter.emit('add');
    emitter.on('add', function() { sign2++ });
    emitter.emit('add');
    const judge = sign1 === 2 && sign2 === 1;

    return judge
}

// console.log(test());