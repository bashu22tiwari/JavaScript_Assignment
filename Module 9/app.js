// ***********    PROMISES  ***************//

// three states

// 1. pending
// 2. fulfilled
// 3. reject

const prom1 = new Promise((resolve,reject) => {

    setTimeout(() => {
        let rollNo = [1,2,3,4,5];
        // resolve(rollNo);
        reject('Error while communicating');
    },2000)

});

prom1.then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res); 
})

