module.exports = function(collection) {
    for (var i=1; i<collection.length; i++) {
        var x = collection[i];
        var j = i;
        while(j > 0 && collection[j-1] > x) {
            collection[j] = collection[j-1];
            j--;
        }
        collection[j] = x;
    }
    return collection;
};