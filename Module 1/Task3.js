// Provided the following  array:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter out odd, even, and prime numbers and print them


var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkPrime(n){
    for(let i=2 ; i<n ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

var oddList = array.filter(function(element){
    return element%2 != 0 ;
})

var evenList = array.filter(function(element){
    return element%2 == 0 ;
})

var primeList = array.filter(function(element){
    if(checkPrime(element)){
        return element ;
    }
})

console.log(oddList);
console.log(evenList);
console.log(primeList);

