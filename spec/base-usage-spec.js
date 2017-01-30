var viaSort = require('../index');
var array = [2, 3, 1, 2, 6, 5];
var expectedArray = [1, 2, 2, 3, 5, 6];

describe('Base usage:', function() {

    it('It is workly', function() {
        var sortedArray = viaSort('insertion', array);
        sortedArray.forEach(function(item, index) {
            expect(expectedArray[index]).toBe(item);
        });

    });

});