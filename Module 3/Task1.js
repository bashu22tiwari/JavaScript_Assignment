// 1. Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]

//   a. Print id and name of the youngest and oldest person
//   b. Create another list having id and name of all the person above 18 years
//   c. Find the average age
//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively


// Note: Use map(), filter(), reduce, some() and every() methods for above problems



//    a. Print id and name of the youngest and oldest person


var array = [
    {id: 1, name: "Amit Kumar", age: 25},
    {id: 2, name: "Rahul Dixit", age:20},
    {id: 3, name: "Ravi Joshi", age: 55},
    {id: 4, name: "Rohit Verma", age: 35},
    {id: 5, name: "Ajay Jain", age: 17},
    ] ;

var temp1 = array[0] ;

var youngest = array.reduce((acc,val) => {
    if(val.age < acc.age){
        acc = val;
    }

    return acc ;
},temp1);


var oldest = array.reduce((acc,val) => {
    if(val.age > acc.age){
        acc = val ;
    }

    return acc ;
},temp1);

console.log("id : "+youngest.id+" and name : "+youngest.name);
console.log("id : "+oldest.id+" and name : "+oldest.name);




//   b. Create another list having id and name of all the person above 18 years


var listIs = array.filter((curr) => {
    if(curr.age>18){
        return curr ;
    }
}).map((val) => {
    return {
        id:val.id,
        name: val.name
    }
});

console.log(listIs);



//   c. Find the average age

var lengthOfArray = array.length ;

var sumOfAges = array.reduce((acc,val) => {
    return acc+val.age;
},0)

average = sumOfAges/lengthOfArray;
console.log(average);



//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

var startWithA = array.filter((val) => {
    if(val.name[0]=='A'){
        return val.name;
    }
}).map((val) => {
    return val.name;
});

var startWithR = array.filter((val) => {
    if(val.name[0]=='R'){
        return val.name;
    }
    
}).map((val) => {
    return val.name;
})

console.log(startWithA);
console.log(startWithR);