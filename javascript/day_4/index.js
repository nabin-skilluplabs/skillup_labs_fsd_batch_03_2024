/* for add new button
*/
function addEventListener(){
    document.querySelector("#Addbtn").addEventListener("click", handleAddNew);
}
const todoItems = [];
/* declaring above variables outside of function to make it easy accessible even inside function*/
function handleAddNew(event){
    event.preventDefault();

    const todoItem = document.querySelector('input').value;
    /* above line is to add items to the list that we type in the input field */
    todoItems.push(todoItem);
    populateToDoItems(todoItems);
    console.log({todoItem, todoItems});
    /* This is to print the result*/
}

function populateToDoItems(todoItems){
    let list = '';
    for(value of todoItems){
        list += `<div><p>${value}</p><input type="checkbox"></div>`;

    }
    document.querySelector('.form-text').innerHTML = list;
    document.querySelector('#total').innerHTML = todoItems.length;
}
addEventListener()
