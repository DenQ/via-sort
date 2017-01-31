module.exports = function (type, collection) {
    var method = require('./methods/' + type + '-sort');
    return method(collection);
};