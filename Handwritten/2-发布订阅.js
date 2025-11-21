class EventEmitter {
    constructor() {
        // 存储事件及其对应的回调函数列表
        this.events = {};
    }

    // 订阅事件
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    // 发布事件
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback.apply(this, args);
            });
        }
    }

    // 取消订阅
    off(event, callback) {
        if (this.events[event]) {
            const index = this.events[event].indexOf(callback);
            if (index > -1) {
                this.events[event].splice(index, 1);
            }
        }
    }

    // 单次订阅
    once(event, callback) {
        const onceWrapper = (...args) => {
            callback.apply(this, args);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }
}

const eventBus = new EventEmitter();

// 组件A订阅事件
eventBus.on('userLogin', (userInfo) => {
    console.log('用户已登录:', userInfo);
});

// 组件B发布事件
eventBus.emit('userLogin', { name: '张三', id: 123 });
eventBus.emit('123', { name: '张三', id: 123 });
eventBus.emit('userLogin', { name: '李四', id: 123 });
