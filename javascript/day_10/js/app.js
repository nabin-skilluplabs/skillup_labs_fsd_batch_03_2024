console.log("-----Async Await-----")

console.log(1);
function handleByAsyncAwait() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(2);
            resolve();
        }, 0)
    })
}

(async () => {
    await handleByAsyncAwait();
    console.log(3);
})();

