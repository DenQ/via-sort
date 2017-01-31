var viaSort = require('../index');
var INTERVAL    = 10000;
var SIZE_ARRAY  = 10000;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createCollection(number) {
    var collection = [];
    for(var i=0; i<number; i++) {
        collection.push(getRandomInt(0, INTERVAL));
    }
    return collection;
}

var array = createCollection(SIZE_ARRAY);

function test(mas, call, type) {
    var collection = mas.map(function(item){return item;});
    var date1 = +new Date;
    if (typeof type !== 'undefined') {
        call(type, collection);
    } else {
        collection.sort();
    }
    var date2 = +new Date;
    return date2 - date1;
}

console.log(test(array), 'native sort method');
['insertion', 'quick'].forEach(function(item) {
    console.log( test(array, viaSort, item), item );
});
