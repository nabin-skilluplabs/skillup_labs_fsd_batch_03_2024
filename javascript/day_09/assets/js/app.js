
const timeoutRefrence =  setTimeout(function() {
    document.querySelector("h1").style.cssText = "color: red;";
},10 * 1000);

document.querySelector("#cancleFontChange").addEventListener("click", function() {
    console.log(timeoutRefrence);
    clearTimeout(timeoutRefrence);
});




// Callback function 
// Promise
// Async Await

// setInterval

let count = 100;
const intervalId = setInterval(function() {
    document.querySelector("h2").textContent = count;
    const randomRed = parseInt(Math.random() * 256);
    const randomGreen = parseInt(Math.random() * 256);
    const randomBlue = parseInt(Math.random() * 256);
    document.querySelector("h2").style.cssText = `font-size: 50px; color: rgb(${randomRed}, ${randomGreen}, ${randomBlue}) `;
    count--;
    if(count < 0) {
        clearInterval(intervalId);
    }
}, 100);


setInterval(function() {
    const now = new Date();
    const hour = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    const ampm = (hour < 12) ? 'AM' : 'PM';
    document.querySelector("#digitalClock").textContent = `${hour}:${mins}:${secs}${ampm}`;
}, 1000);


// Callback

// Promise
// Async await

// console.log("==========Synchronous code===========");
// console.log(1);
// setTimeout(function() {
//     console.log(2);
// }, 0);
// console.log(3);

// console.log("==========Asynchronous code using callback===========");

// console.log(1);
// function asyncFunction(callback) {
//   setTimeout(function() {
//     console.log(2);
//     callback();
//   },0);
// }
// asyncFunction(function() {
//   console.log(3)
// });

// console.log("==========Asynchronous code using Promise===========");

// console.log(1);
// function promiseFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log(2);
//             resolve();
//           },0);
//     })
// }
// promiseFunction().then(() => {
//     console.log(3);
// })

console.log("==========Asynchronous code using async/await ===========");

(async () => {
    console.log(1);
    function promiseFunction() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log(2);
                resolve();
            },0);
        })
    }
    await promiseFunction();
    console.log(3)
})();