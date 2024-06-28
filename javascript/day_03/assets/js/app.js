console.log('Calculator');


//let num1 = 1;
//const num2 = 2;
//num1 = 3;
//let sum = num1 + num2;

//function calculate() {
//console.log(num1 + num2);
//}
//calculate();

//DOM-Document Object Model
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
    //console.log(button)

});
//console.log(buttons);


let calculateExp = '';

function handleClick(event) {

    //console.log(event.target)
    //const value = event.target.innerHTML;
    const value = event.target.innerText;
    console.log(value)
    switch (value) {
        case "=":
            {

                try {
                    calculateExp = eval(calculateExp);
                }
                catch {
                    calculateExp = ''

                    //alert ('Invalid calculation, please refresh and try again!');
                }
            }

            break;

        case 'CE':
            calculateExp = '';
            break;

        case 'DEL':
            calculateExp = calculateExp.slice(0, calculateExp.length - 1);
            break;
        case '+':
        case '-':
        case '*':
        case '%':
            const lastValue = calculateExp[calculateExp.length - 1];
            if (parseInt(lastValue) == lastValue) {
                calculateExp = calculateExp + value;
            }
            else {
                calculateExp = calculateExp.slice(0, calculateExp.length - 1) + value;
            }
            break;

        default:
            
            calculateExp = calculateExp + value;
    }
    console.log(calculateExp);
    document.querySelector('.display').innerText = calculateExp;
}



/*if(value === "=") {//Conditional statement if the condition is suitable
   try {
    calculateExp = eval(calculateExp);
   }
   catch {
    calculateExp = ''

    //alert ('Invalid calculation, please refresh and try again!');
   }


}*/

/*else if ((value === '+') || (value === '-') || (value === '/')) {
    const lastValue = calculateExp[calculateExp.length - 1];
    if(parseInt(lastValue) == lastValue) {
        calculateExp = calculateExp + value;
    }
    else {
        calculateExp = calculateExp.slice(0, calculateExp.length - 1) + value;
    }

}


else if (value === 'CE') {
    calculateExp = '' ;
}

else if (value ==='DEL') {
    calculateExp = calculateExp.slice(0, calculateExp.length - 1);
}

else {
calculateExp = calculateExp + value;
}

document.querySelector('.display').innerText = calculateExp;
}*/

