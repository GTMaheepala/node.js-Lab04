const myPromise = new Promise((resolve, reject) => {

    let condition = true;   // Change to false to test error

    if (condition) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});

async function myFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();