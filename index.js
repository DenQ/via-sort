var map = {
    'insertion': 'insertion-sort',
    'quick': 'quick-sort',
};

module.exports = function(type, collection) {
    var file = map[type];
    var method = require('./methods/' + file);
    return method(collection);
};