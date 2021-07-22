// Provided the following  array:
// [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
// a. every element being twice of elements in the current list.
// b. every element being half of the elements in the current list.

var array = [0, 2, 4, 6, 8, 10, 12, 14, 16];

var twiceElements = array.map(function(val){
    return val*2 ;
})

var halfElements = array.map(function(val){
    return val/2 ;
})

console.log(twiceElements);
console.log(halfElements);
