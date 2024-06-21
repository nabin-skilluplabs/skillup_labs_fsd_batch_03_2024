document.querySelector(".counter-wrapper").classList.add("round-box");

let counter = 0;

document.querySelector("#plus").addEventListener("click", addCounter);
document.querySelector("#minus").addEventListener("click", subCounter);
document.querySelector("#reset").addEventListener("click", resetCounter);

function getStep() {
  const step = document.getElementById("stepBy").value;
  return step;
}

function addCounter() {
  newValue = counter + parseInt(getStep());
  if(newValue > getMax()){
    const errorMessage = `Counter value cannot exceed the max value ${getMax()}`;
    document.querySelector(".error-message").innerHTML = errorMessage;
  }
  else{
    counter = newValue;
    document.querySelector(".result").innerHTML = counter;
  }
  
}

function subCounter() {
  counter = counter - parseInt(getStep());
  document.querySelector(".result").innerHTML = counter;
  document.querySelector(".error-message").innerHTML = '';

}

function resetCounter() {
  counter = 0;
  document.querySelector(".result").innerHTML = counter;
}

function getMax(){
return document.getElementById("max").value;
}
