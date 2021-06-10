
class CustomEventEmitter {
    constructor() {
        this.listeners = {};
    }

    addEventListener(eventType, callback) {
        const eventListeners = this.listeners[eventType] || [];
        eventListeners.push(callback);
        this.listeners[eventType] = eventListeners;
    }

    removeEventListener(eventType, callback) {
        const eventListeners = this.listeners[eventType] || [];
        const index = eventListeners.indexOf(callback);
        eventListeners.splice(index, 1);
        this.listeners[eventType] = eventListeners;
    }

    getListeners(eventType) {
        return this.listeners[eventType];
    }

    emit(eventType, ...args) {
        const eventListeners = this.listeners[eventType];
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