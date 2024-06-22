console.log('calculator');

//DOM= Document Object Model
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});
let calculateExp = '';
function handleClick(event) {
    const value = event.target.innerText;
    switch(value){
        case'=':
            try{
            calculateExp = eval(calculateExp); 
            }
            catch{
                calculateExp = '';
                //alert('Invalid Calculation, Please refresh and try again!');
            }  
            break;
        case 'C':
            calculateExp = '';
            break;
        case'Del':
            calculateExp = calculateExp.slice(0, calculateExp.length - 1);
            break;
        case'+':
        case'-':
        case'*':
        case'/':
            const lastValue = calculateExp[calculateExp.length - 1];
            if(parseInt(lastValue) == lastValue) {
                calculateExp = calculateExp + value;
            }
            else{
                calculateExp = calculateExp.slice(0, calculateExp.length - 1) + value;
            }
            break;
            default:
            calculateExp = calculateExp + value;
    }
    document.querySelector('.display').innerText = calculateExp;
}
