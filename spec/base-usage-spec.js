var viaSort = require('../index');
var expectedArray = [1, 2, 2, 3, 5, 6];

function itTest(method) {
    var array = [2, 3, 1, 2, 6, 5];
    var sortedArray = viaSort(method, array);
    sortedArray.forEach(function(item, index) {
        expect(expectedArray[index]).toBe(item);
    });
}

describe('Base usage:', function() {

    it('It is workly', function() {
        ['insertion', 'quick', 'merge'].forEach(itTest);
    });

    it('It is ex', function() {
        expect(function() {
            viaSort('incorrect', [1, 2]);
        }).toThrow();
    });

});