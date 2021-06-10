Array.prototype.customFilter = function (predicate) {

    if(typeof predicate !== 'function') {
        throw new TypeError();
    }
    const source = this;
    const target = [];

    for(let i=0; i<source.length; i++) {
        if(predicate(source[i])) target.push(source[i]);
    }
    return target;
}

const names = ['andy', 'bob', 'brian'];

const filteredNames = names.customFilter(n => n.startsWith('c'));
console.log(filteredNames.length);
