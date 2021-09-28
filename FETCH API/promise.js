
// **************** FETCH API USING PROMISES   *****************//



// ****************  FETCH DATA FROM LOCAL TXT FILE  ************//


// function makeRequest(){
//     console.log('Button Clicked');

//     // Making a fetch Object

//     const prom = fetch('data.txt');
//     console.log(prom);

//     prom.then((res) => {
//         console.log(res);

//         // For error Handling

//         if(res.ok==false){
//             throw Error(res.statusText);
//         }
//         return res.text();
//     }).then((data) => {
//         console.log(data);
//         document.getElementById('data').innerHTML = data;
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// var button = document.getElementById('btn');

// button.addEventListener('click',makeRequest);





// ****************  FETCH DATA FROM LOCAL JSON FILE  ************//


function makeRequest(){
    console.log('Button Clicked');

    // Making a fetch Object

    const prom = fetch('data.json');
    console.log(prom);

    prom.then((res) => {
        console.log(res);

        // For error Handling

        if(res.ok==false){
            throw Error(res.statusText);
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        document.getElementById('data').innerHTML = `Name is: ${data.name} and roll no is ${data.rollNo}`;
    }).catch((err) => {
        console.log(err);
    });
}

var button = document.getElementById('btn');

button.addEventListener('click',makeRequest);