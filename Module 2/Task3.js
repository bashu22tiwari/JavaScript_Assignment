// 3. Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them


var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = array.filter((val) => {
    return val%2!=0 ;
})

var even = array.filter((val) => {
    return val%2==0 ;
})

function isPrime(n){
    for(let i=2 ; i<n ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

var prime = array.filter((val) => {
    if(isPrime(val)){
        return val;
    }
})

console.log('Odd no are:',odd);
console.log('Even no are:',even);
console.log('Prime no are:',prime);

