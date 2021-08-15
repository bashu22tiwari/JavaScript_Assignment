// 5. Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// a. Find the sum, min, and max
// b. Print “List is full of prime no” if every element is prime
// c. Print “List has a prime no” if there is a prime no in it
// d. Remove duplicate values from the list ()


// To find the Sum,min,max


let array= [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

var sum = 0;
for(let i = 0 ; i<array.length ; i++){
    sum += array[i];
}

var min = array[0];
for(let i = 1 ; i<array.length ; i++){
    if(array[i]<min){
        min = array[i];
    }
}

var max = array[0];
for(let i = 1 ; i<array.length ; i++){
    if(array[i]>max){
        max = array[i];
    }
}

console.log('Sum is:', sum);
console.log('Max is:', max);
console.log('Min is:', min);


// Print “List is full of prime no” if every element is prime


function checkPrime(n){
    for(let i=2 ; i<n ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}


var flag = 0;

for(let i=0 ; i<array.length ; i++){
    if(checkPrime(array[i])==false){
        flag=1;
        break;
    }
}

if(flag==0){
    console.log('List is full of prime no');
}
else{
    console.log('List is not full of Prime Numbers');
}

// Print “List has a prime no” if there is a prime no in it

flag = 0;
for(let i=0 ; i<array.length ; i++){
    if(checkPrime(array[i])){
        flag=1;
        break;
    }
}

if(flag==1){
    console.log('List has a prime no');
}
else{
    console.log('List doesnot have a prime number');
}


// Remove duplicate values from the list ()

array.sort();

var newArray = [];

newArray.push(array[0]);
for(let i=1 ; i<array.length ; i++){
    if(array[i]!=array[i-1]){
        newArray.push(array[i]);
    }
}

console.log(array);
