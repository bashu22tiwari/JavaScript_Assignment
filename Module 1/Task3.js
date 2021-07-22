// Provided the following  array:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them


var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddList = array.filter(function(element){
    return element%2 != 0 ;
})

var evenList = array.filter(function(element){
    return element%2 == 0 ;
})

console.log(oddList);
console.log(evenList);

