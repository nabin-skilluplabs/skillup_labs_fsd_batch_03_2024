function addEventListener() {
     document.querySelector('#addBtn').addEventListener('click', handleAddNew);
}
const toDoItems = [];
function handleAddNew(event) {
    event.preventDefault();

    const todoItem = document.querySelector('input').value;
    const inputItem = document.querySelector('input').value= '';
    


    if(todoItem !== '') {
    toDoItems.unshift(todoItem);
    populateToDoItems(toDoItems);
    inputItem.value = '';
   console.log({todoItem, toDoItems});
   const bodyElement = document.querySelector('body');
   const bodyHeight = 
    
    }
  




}
function populateToDoItems(toDoItems) {
    let list = '';
    for(value of toDoItems) {
        list += `<div class="courses"><span>${value}</span><input type="checkbox"></input></div>`;
    }
    document.querySelector(".course-content").innerHTML = list;
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click', (event) => removeToDoItem(event, index));
    });
    document.querySelector("#total").innerHTML = toDoItems.length;
}
function removeToDoItem(event, index) {
z
    if(event.target.checked){
        toDoItems.splice(index, 1);
        populateToDoItems(toDoItems);

    }
}
addEventListener();