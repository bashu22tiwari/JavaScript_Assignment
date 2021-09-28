// Callback function is basically a function which can be passed to another function as a argument
// These helps us to work asynchronously
// Set timeout is also a callback function

setTimeout(function(){
    console.log('This is settimeout function');
}, 5000);

function x(y){
    console.log('This is X');
    y();
}

x(function y(){
    console.log('This is Y');
});


// Set timeout is also a callback function   

