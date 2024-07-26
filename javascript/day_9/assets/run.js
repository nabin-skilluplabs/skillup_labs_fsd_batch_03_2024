//console.log(1)
//setTimeout(function(){
//   console.log(2);
//},1000);
//console.log(3);
/* console 1 and 3 will operate first coz we set time for console 2 so it will execute after them. */

//callback function
//promise
//Asyn/Await

/*console.log("===callback function===");
console.log(1);
function handleByCallback(callback){
    setTimeout(function(){
        console.log(2);
        callback();
    }, 0);
}
handleByCallback(() => {
    console.log(3);
});
*/
/*console.log("===Promise Function ===")
console.log(1);
function handleByPromise(){
   return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(2);
            resolve();
        }, 0);
    });
}
handleByPromise()
.then(() =>{
    console.log(3);
})
.catch(() => {
    console.log('Error');
})
.finally(()=> {
 console.log('Finally Done');
})
*/
console.log("===Async Await Function===");

console.log(1);
function handleByAsyncAwait(){
   return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(2);
            resolve();
        }, 100);
    });
}
(async ()=>{
    await handleByAsyncAwait()
    console.log(3);
})();
