document.querySelector('.counter-wrapper').classList.add('round-box');

let counter = 0;
document.querySelector("#plus").addEventListener('click', addcounter);
document.getElementById("minus").addEventListener('click', subcounter);
document.getElementById("reset").addEventListener('click', resetcounter);

function addcounter() {
    const newValue = counter + parseInt(getstep());
    if(newValue > getMax()) {
        const errorMessage = `couter value cannot contain more than max value ${getMax()}`;
        document.querySelector('.error-message').innerHTML = errorMessage;
    }
    else{
        counter = newValue;
        document.querySelector('.result').innerHTML = counter;
    }
}


function subcounter(){
    counter = counter - parseInt(getstep());
    document.querySelector('.result').innerHTML = counter;
}

function resetcounter(){
    counter = 0;
    document.querySelector('.result').innerHTML = counter;
}


/*use of this function is to make short cut use od some variables like
'const step = document.getElementById('stepBy').value;'
if we use below getstep function we dont have tyo use same above variables in different steps 
 */
function getstep(){
    const step = document.getElementById('stepBy').value;
    return step;
}
function getMax(){
    return document.getElementById("max").value
}
