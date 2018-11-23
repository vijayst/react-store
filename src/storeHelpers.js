
let subscribers = [];

function subscribe(fn) {
    if (typeof fn === 'function' && subscribers.indexOf(fn) === -1) {
        subscribers.push(fn);
    }
}

function unsubscribe(fn) {
    const index = subscribers.indexOf(fn);
    if (index !== -1) {
        subscribers.splice(index, 1);
    }
}

function publish(state) {
    subscribers.forEach(fn => fn(state));
}

export {
    subscribe,
    unsubscribe,
    publish
};