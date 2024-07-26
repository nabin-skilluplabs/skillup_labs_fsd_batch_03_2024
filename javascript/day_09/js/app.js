const timeoutRefrence = setTimeout(function() {
    document.querySelector("h1").style.fontSize = "50px";
},10 * 1000);

document.querySelector('#cancelFontChange').addEventListener("click", function() {
console.log(timeoutRefrence);
clearTimeout(timeoutRefrence);
})
console.log(1);
setTimeout(function() {
    console.log(2);
}, 0);
console.log(3);

//callback function()
//Async Await
//Set Interval

let count = 100;
const intervalid = setInterval(function() {
    document.querySelector("h2").textContent = count;
    const randomRed = parseInt (Math.random() * 256);
    const randomGreen = parseInt (Math.random() * 256);
    const randomBlue = parseInt (Math.random() * 256);
    document.querySelector("h2").style.cssText = `font-size: ${count}px; color: rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    count--;
    if(count < 0) {
        clearInterval(intervalid);
    }

}, 1000)

setInterval(function(){
    const now = new Date();
    const hour = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    const ampm = (hour < 12) ? 'AM' : 'PM';
    document.querySelector("#digital-clock").textContent =` ${hour}:${mins}:${secs}${ampm}`;

}, 1000)


