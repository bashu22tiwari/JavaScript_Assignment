// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]


//   a. Find the sum, min, and max

var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

var sum = array.reduce((acc,currval) => {
    return acc+currval;
},0);

var temp = array[0];
var minVal = array.reduce((acc,currval) => {
    if(acc>currval){
        acc=currval;
    }
    return acc;
},temp);

var maxVal = array.reduce((acc,currval) => {
    if(acc<currval){
        acc=currval;
    }
    return acc;
},temp);

console.log('Sum is : ',sum);
console.log('Min is : ',minVal);
console.log('Max is : ',maxVal);




//   b. Print “List is full of prime no” if every element is prime


function isPrime(n){
    for(let i=2 ; i<n ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}


var isEveryPrime = array.every((val) => {
    return isPrime(val);
})

if(isEveryPrime){
    console.log('List is full of prime no');
}
else{
    console.log('List is not full of prime no');
}



//   c. Print “List has a prime no” if there is a prime no in it

var hasAPrime = array.some((val) => {
    return isPrime(val);
})

if(hasAPrime){
    console.log('List has a prime no');
}
else{
    console.log('List do not has a prime no');
}



//   d. Remove duplicate values from the list.



