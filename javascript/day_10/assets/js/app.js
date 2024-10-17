// console.log(1);
// setTimeout(function() {
//     console.log(2);
// }, 0);
// console.log(3);

// Callback function
// Promise
// Async/Await

// console.log("=== Callback function ===");
// console.log(1);

// function handleByCallback(callback) {
//     setTimeout(function() {
//         console.log(2);
//         callback();
//     }, 0);
// }

// handleByCallback(() => {
//     console.log(3);
// });


// console.log("=== Promise ===");
// console.log(1);

// function handleByPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log(2);
//             reject();
//         }, 0);
//     });
// }
// handleByPromise()
// .then(() => {
//     console.log(3);
// })
// .catch(() => {
//     console.log('Error');
// })
// .finally(() => {
//     console.log('Finally done!');
// });


console.log("=== Ascync Await ===")

console.log(1);
function handleByAsyncAwait() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(2);
            resolve();
        }, 0);
    });
}

(async () => {
    await handleByAsyncAwait();
    console.log(3);
})();

