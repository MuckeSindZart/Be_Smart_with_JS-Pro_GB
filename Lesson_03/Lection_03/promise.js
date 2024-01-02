// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 console.log("Error Generation Random Number");
//             }
//         }, 1000);
//     });
// };

// generateRandomNumber().then((number) => {
//     console.log("Number is ", number);
// }).catch((error) => {
//     console.log("Error ", error);
// });

// -------------------------------- //

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject("Error fetching"));
//     });
// };

// // fetchData('https://api.example.com/data')
// fetchData('https://cataas.com/cat?json=true')
//     .then((data) => {
//         console.log("Vot Tak Vot - data ", data);
//     }).catch((error) => {
//     console.log('Error', error);
// });

// -------------------------------- //

// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkFileExists(file)
//             if (fileExists) {
//                 resolve('File does not exists')
//             } else {
//                 reject('File exists')
//             }
//         })
//     }, 1000)
// }

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

// -------------------------------- //

// let calculateSum = (a, b) => {
//     return new Promise(resolve => {
//         const sum = a + b;
//         resolve(sum);
//     })
// }

// calculateSum(3, 7).then((result) => {
//     console.log('Sum is ', result)
// });

// -------------------------------- //

// let divideByZero = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject("Divide by Zero");
//         } else {
//             resolve(a / b);
//         }
//     })
// }


// divideByZero(12, 0).then(
//     (result) => {
//         console.log("Result ", result)
//     }
// )
//     .catch((error) => {
//         console.error("Error", error)
//     })


// -------------------------------- //

// new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// }).then(function (result) {
//     console.log(result)
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve(result * 2)
//         }, 1000)
//     })
// }).then(function (result) {
//     console.log(result)
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve(result * 2)
//         }, 1000)
//     })
// }).then(function (result) {
//     console.log(result)
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve(result * 2)
//         }, 1000)
//     })
// }).then(function (result) {
//     console.log(result)
// })

// -------------------------------- //

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise(reject => setTimeout(reject(new Error('Error')), 2000)),
//     new Promise(resolve => setTimeout(resolve(3), 3000))
// ])
//     .then(console.log)
//     .catch(console.log)

// -------------------------------- //

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return new Promise.race(promises)
        .then((response) => {
            return response.url
        })
}

let urls = [
    'https://cataas.com/',
    'https://cataas.com/',
    'https://cataas.com/',
]

checkServerResponse(urls).then((fastestServer) => {
    console.log(fastestServer, ' is FASTEST')
}).catch((error) => {
    console.error("Error", error)
})