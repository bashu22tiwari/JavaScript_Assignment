const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter' , () => {
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave' , () => {
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
});




let start = performance.now();   //start time

YourCodeToRun()                 // <---- The code you're measuring time for  

let end = performance.now();    //end time

console.log('Time taken to Execute Code:'+ (end-start));         // Time in milliseconds
console.log('Time taken to Execute Code:'+ (end-start)/1000);   // Time in seconds