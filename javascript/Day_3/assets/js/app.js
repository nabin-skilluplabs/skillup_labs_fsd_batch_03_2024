
console.log('calculator');

// DOM - Document Object Model 
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
   button.addEventListener('click', handleClick)
});

let calculateEXp = ''; 
function handleClick(event) {
    const value = event.target.innerText;
    console.log(value)
    if(value === "=") {
        try {
            calculateEXp = eval(calculateEXp); 

        }
        catch {
           calculateEXp = '';
            //alert('Invalid calculation, Plase refresh and try again');
        }
    } 
    else if (value === "CE") {
        calculateEXp = '';
    } 
    else if (value === "DEL") {
    calculateEXp = calculateEXp.slice(0, calculateEXp.length - 1);
} 


    else if ((value === '+') || (value ==='-') || (value === '*') || (value === '/')) {
        const lastValue = calculateEXp[calculateEXp.length - 1];
        if(parseInt(lastValue) == lastValue) {
            calculateEXp = calculateEXp + value;
        }
        else {
            calculateEXp = calculateEXp.slice(0, calculateEXp.length - 1) + value;
        }
    }
    else {
        calculateEXp = calculateEXp + value;
    }

    document.querySelector('.display').innerText = calculateEXp;

}

