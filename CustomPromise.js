function all(promises) {
    if(!Array.isArray(promises)) {
        throw new TypeError('Array expected in arguments');
    }

    let results = [];

    return new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            promise.then((val) => {
                results[idx] = val;
                if(idx + 1 === promises.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
        });
    });
}

function name() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('sandy')
        }, 1000);
    });
}

function age() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(32)
        }, 2000);
    });
}

all([name(), age()])
    .then(res => console.log(res))
    .catch(err => console.log(err));
