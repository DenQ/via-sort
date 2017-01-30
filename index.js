var map = {
    'insertion': 'insertion-sort',
};

module.exports = function(type, collection) {
    var file = map[type];
    var method = require('./methods/' + file);
    return method(collection);
};