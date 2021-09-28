const url = 'https://jsonplaceholder.typicode.com/users';




  

const xhr = new XMLHttpRequest();


//*********************  GET METHOD *************/


// xhr.open('GET',url);

// xhr.responseType = 'json';

// xhr.onload = () => {
//     if(xhr.status>=400){
//         console.log('Failed');
//     }
//     else{
//         console.log(xhr.response);
//     }
// }

// xhr.onerror = () => {
//     console.log('Error!!');
// }



// *****************  POST METHOD ******************//

xhr.open('POST',url,body);

var body = {
    name:'Bashu',
    address:'Gwalior'
}

xhr.setRequestHeader('Content-Type','application/json');


xhr.onload = () => {
        if(xhr.status>=400){
            console.log('Failed');
        }
        else{
            console.log(xhr.response);
        }
    }


xhr.send(JSON.stringify(body));


