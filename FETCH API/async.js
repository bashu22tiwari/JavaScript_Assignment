
// **********************  FETCH API USING ASYNC  *****************//



// ****************  FETCH DATA FROM LOCAL TXT FILE  ************//

// var button = document.getElementById('btn');

// button.addEventListener('click',makeRequest);

// async function makeRequest(){
//     try{
//         console.log('Button Clicked');
//         const res = await fetch('data.txt');
//         console.log(res);
//         if(res.ok==false){
//             throw Error(res.statusText);
//         }
//         const data = await res.text();
//         console.log(data);
//         document.getElementById('data').innerHTML = data;
//     } catch(error) {
//         console.log(error);
//     }
// }




// ****************  FETCH DATA FROM LOCAL JSON FILE  ************//


var button = document.getElementById('btn');

button.addEventListener('click',makeRequest);

async function makeRequest(){
    try{
        console.log('Button Clicked');
        const res = await fetch('data.json');
        console.log(res);
        if(res.ok==false){
            throw Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
        document.getElementById('data').innerHTML = `Name is : ${data.name} and roll No is ${data.rollNo}`;
    } catch(error) {
        console.log(error);
    }
}