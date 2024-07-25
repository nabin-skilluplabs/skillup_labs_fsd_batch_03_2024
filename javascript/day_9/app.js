//SET TIMEOUT
const timeoutReference = setTimeout(function() {
    document.querySelector("h1").style.fontSize = "50px";


},5 * 1000);

document.querySelector("#cancel").addEventListener("click", function() {
    console.log(timeoutReference);

    clearTimeout(timeoutReference);

})
console.log(1);
setTimeout(function() {
    console.log(2);
}, 0);
console.log(3);

//SET INTERVAL
let count = 100;

const intervalId = setInterval(function() {
    document.querySelector("h2").textContent = count;
    const randomRed = parseInt(Math.random() * 256);
    const randomGreen = parseInt(Math.random() * 256);
    const randomBlue = parseInt(Math.random() * 256);
    document.querySelector("h2").style.cssText = `font-size: ${count}px; color: rgb(${randomGreen}, ${randomRed}, ${randomBlue})`;
    count--;
    if (count < 0 ) {
        clearInterval(intervalId);
    }

    


}, 100);

setInterval(function() {
    const now = new Date();
    const hour = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    const ampm = (hour < 12) ? 'Am' : 'PM';
    console.log ({
        hour,
        mins,
        secs,
        ampm
    });
    document.querySelector("#clock").textContent = `${hour}:${mins}:${secs}:${ampm}`;
},1000
)



