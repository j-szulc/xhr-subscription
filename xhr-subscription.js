// https://stackoverflow.com/a/53741846
class XhrSubscription {
    constructor(callback) {
        this.callback = callback;
    }
    next(xhr) {
        return this.callback(xhr);
    }
    unsubscribe() {
        subscriptions = subscriptions.filter(s => s != this);
    }
}
let subscriptions = [];
function subscribeToXhr(callback) {
    const subscription = new XhrSubscription(callback);
    subscriptions.push(subscription);
    return subscription;
}
(function (open) {
    XMLHttpRequest.prototype.open = function () {
        this.addEventListener("readystatechange", () => {
            subscriptions.forEach(s => s.next(this));
        }, false);
        return open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);
