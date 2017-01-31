# via-sort

This package is a convenient wrapper for most standard sorting methods. Such as quickSort, mergeSort and others.

### How to use?
```
var array = [2, 3, 1, 2, 6, 5];
var sortedArray = viaSort('quick', array);
console.log(sortedArray) // [1, 2, 2, 3, 5, 6]
```

### Where to use it?
Standard method `.sort()` significantly slower `quickSort`. 
To check it out there is a script
```
node performance/index.js
```
output
```
10 'native sort method'
85 'insertion'
4 'quick'
14 'merge'

```
Where time described in milliseconds

### TDD
```
npm test
```

#### Community
I will be glad your `pull requests`