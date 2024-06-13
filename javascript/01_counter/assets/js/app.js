document.querySelector('.counter-wrapper').classList.add('round-box');

let counter = 0;



document.getElementById("plus").addEventListener('click', addCounter);

function addCounter() {
    counter = counter + 1;
    document.querySelector('.result').innerHTML = counter;
}

document.getElementById("minus").addEventListener('click', subCounter);

function subCounter() {
    counter = counter - 1;
    document.querySelector('.result').innerHTML = counter;
}