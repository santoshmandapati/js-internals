
class CustomEventEmitter {
    constructor() {
        this.listeners = {};
    }

    addEventListener(eventName, callback) {
        const eventListeners = this.listeners[eventName] || [];
        eventListeners.push(callback);
        this.listeners[eventName] = eventListeners;
    }

    removeEventListener(eventName, callback) {
        const eventListeners = this.listeners[eventName] || [];
        const index = eventListeners.indexOf(callback);
        eventListeners.splice(index, 1);
        this.listeners[eventName] = eventListeners;
    }

    getListeners(eventName) {
        return this.listeners[eventName];
    }

    emit(eventName, ...args) {
        const eventListeners = this.listeners[eventName];
        eventListeners.forEach(listener => {
            listener(...args);
        });
    }
}

const eventEmitter = new CustomEventEmitter();

eventEmitter.addEventListener('click', (event) => {console.log(event)});
eventEmitter.addEventListener('click', () => {console.log('hello')});
eventEmitter.addEventListener('focus', (...args) => {console.log(...args)});

console.log(eventEmitter.getListeners('click'));

eventEmitter.removeEventListener('click', () => {console.log('hello')});

eventEmitter.emit('click', 1);
eventEmitter.emit('focus', 1, 'hello', true);
