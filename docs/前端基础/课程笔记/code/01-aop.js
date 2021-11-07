// 装饰器 前端埋点 在ajax的请求是哪个包装一层自己的逻辑
Function.prototype.before = function(callback) {
    // 防止this丢失
    let self = this;
    return function() {
        callback();
        self();
    }
}

function fn() {
    console.log('do something')
}

let newFn = fn.before(function() {
    console.log('before do something!');
});

// this
newFn();