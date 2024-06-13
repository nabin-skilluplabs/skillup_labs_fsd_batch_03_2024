document.querySelector('.counter-wrapper').classList.add('round-box');

let counter = 0;



document.querySelector('#plus').addEventListener('click', addCounter);

function addCounter() {
counter = counter + 1;
document.querySelector('.result').innerHTML = counter;

}

document.querySelector('#minus').addEventListener('click', subCounter);

function subCounter() {
counter = counter - 1;
document.querySelector('.result').innerHTML = counter;

}