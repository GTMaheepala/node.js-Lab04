const myPromise = new Promise((resolve, reject) => {

    let condition = true;   // Change to false to test rejection

    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });