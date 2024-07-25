const timeOutReference = setTimeout(function() {
    document.querySelector('h1').style.cssText = "font-size: 150px; color: Red";
}, 10 * 1000);
document.querySelector("#cancelFontSize").addEventListener("click", function(){
    console.log(timeOutReference)
    clearTimeout(timeOutReference);
});
console.log(1);
setTimeout(function(){
    console.log(2)
}, 0);
console.log(3);

//callback function
//Promise
//Async Await
//setInterval

let num = 100;
const timeOut = setInterval(function(){
    document.querySelector("h2").textContent = num;
    const randomRed = parseInt(Math.random() * 256);
    const randomGreen = parseInt(Math.random() * 256);
    const randomYellow = parseInt(Math.random() * 256);
    document.querySelector("h2").style.cssText = `
    font-size: 50px;
    color: rgb(${randomRed}, ${randomGreen}, ${randomYellow})`;
    num--;
    if (num < 0){
        clearInterval(timeOut);
    }
}, 100);

setInterval(function(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const ampm = (hour < 12) ? "AM" : "PM";
    document.querySelector("#digitalClock").textContent = `${hour}: ${min}: ${sec}: ${ampm}`;
    const randomRed = parseInt(Math.random() * 256);
    const randomGreen = parseInt(Math.random() * 256);
    const randomBlue = parseInt(Math.random() * 256);
    document.querySelector("#digitalClock").style.cssText = `
    display: Flex;
    font-size: 180px;
    justify-content: center;
    color: rgb(${randomRed}, ${randomGreen}, ${randomBlue});`
}, 1000);