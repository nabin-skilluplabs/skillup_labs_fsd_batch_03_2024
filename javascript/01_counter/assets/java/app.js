document.querySelector('.counter-wrapper').classList.add ('round-box') ;

let counter = 0;
document.getElementById("plus").addEventListener('click', addCounter) ;
document.getElementById("minus").addEventListener('click', subCounter);
document.getElementById("reset").addEventListener ('click', resetCounter);



function addCounter() {
    const newValue = counter + parseInt(getStep());
    if(counter >= getMax()) {
        const errorMessage = 'Counter value cannot be more that max value 100';
        document.querySelector('.error-message').innerHTML = errorMessage;
    }
    else {
        counter = newValue;
        document.querySelector('.result').innerHTML = counter;
    }
}


function subCounter () {
    counter = counter - parseInt(getStep());
    document.querySelector('.result').innerHTML = counter;
    document.querySelector('.error-message').innerHTML = '';
}


function resetCounter () {
    counter = 0;
    document.querySelector('.result').innerHTML = counter;
}


function getStep() {
    const step = document.getElementById('stepBy').value;
    return step
}

function getMax() {
    return document.getElementById('max').value;
}