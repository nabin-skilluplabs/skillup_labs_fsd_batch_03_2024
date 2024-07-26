// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 1000);
// console.log(3);


//callback function


// console.log("---Callback Function---");
// console.log(1);
// function handleByCallback(callback){
//     setTimeout(function(){
//            console.log(2);
//            callback();
//      }, 1000);  
// }
// handleByCallback(() => {console.log(3);});

//promise function

// console.log("---promise---");
// console.log(1);
// function handleByPromise(){
//    return new Promise((resolve, reject) =>{
//         setTimeout(function(){
//             console.log(2);
//             resolve();
//       },0); 
//     });
// }
// handleByPromise().then(() => {
//     console.log(3);
// });


//Async/Await

console.log("-----Async/Await-----")
console.log(1);
function handleByAsyncAwait(){
   return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log(2);
            resolve();
      },0); 
    });
};
(async() => {
    await handleByAsyncAwait();
    console.log(3);
})();


