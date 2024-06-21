//DOM = Document Object Model
console.log('Calculator')
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

let calculateExp = '';


function handleClick(event){
    const value = event.target.innerText;
    if(value === "="){
        try {
            calculateExp = eval(calculateExp);  
        }
        catch{
          calculateExp = '';
        }  
    }
    else if(value === 'DEL'){
        calculateExp = calculateExp.slice(0, calculateExp.length - 1);
    }
    else if(value === 'CE'){
        calculateExp = '';
    }
    else if((value === '+') || (value === '-') || (value === '*') || (value === '/') ){
        const lastValue = calculateExp[calculateExp.length - 1]

        if(parseInt(lastValue) == lastValue) {
            calculateExp = calculateExp + value;
        }
        else {
            calculateExp = calculateExp.slice(0, calculateExp.length - 1) + value;
        }
    }
  
    else{
        calculateExp = calculateExp + value;
    }

    document.querySelector('.display').innerText = calculateExp;
}

