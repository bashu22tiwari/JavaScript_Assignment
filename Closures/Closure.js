// ******************* Basic Closures ********************


// function x(){
//     var a = 7;
//     function y(){
//         var b =1;
//         console.log(a);
//         console.log(b);
//         b++;
//         a++;
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();
// z();
// z();


// ******************* Closures Involving Multiple Functions ********************


// function x(){
//     var a = 1;
//     function y(){
//         var b = 2;
//         function z(){
//             var c = 3;
//             console.log(a,b,c);
//         }
//         // z();
//         return z;
//     }
//     // y();
//     return y;
// }

// var d = x();
// console.log(d);
// var e = d();
// console.log(e);
// d();
// e();


// ******************* Set-Timeout + Closures ********************

function x(){
    // var i = 1;
    // setTimeout(function(){
    //     console.log(i);
    // },3000);
    // i++;

    for(var i = 1; i<=5; i++){
        setTimeout(function(){
            // var a = 6;
            var a = i;
            console.log(a);
            // a++;
        },i*1000)
    }
  
    console.log('This is Printing After Settimeout');
}

x();
