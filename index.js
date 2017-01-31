var map = {
    'insertion': 'insertion-sort',
    'quick': 'quick-sort',
    'merge': 'merge-sort',
};

module.exports = function(type, collection) {
    var file = map[type];
    var method = require('./methods/' + file);
    return method(collection);
};