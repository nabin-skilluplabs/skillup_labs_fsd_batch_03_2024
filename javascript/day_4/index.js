/* for add new button
*/
function addEventListener(){
    document.querySelector("#Addbtn").addEventListener("click", handleAddNew);
    document.querySelector("#view_all").addEventListener("click", toggleView);
}
const todoItems = [];
/* declaring above variables outside of function to make it easy accessible even inside function*/
function handleAddNew(event){
    event.preventDefault();
    const inputItems = document.querySelector('input');
    const todoItem = inputItems.value;
    /* above line is to add items to the list that we type in the input field */
    
    if(todoItem !== ""){
    todoItems.unshift(todoItem);
    populateToDoItems(todoItems.slice(0, 5));
    inputItems.value = '';
    console.log({todoItem, todoItems});
    /* This is to print the result*/
    }
    document.querySelector('#total').innerHTML = todoItems.length;
}

function populateToDoItems(todoItems){
    let list = '';
    for(value of todoItems){
        list += `<div><p>${value}</p><input type="checkbox"></div>`;

    }
    document.querySelector('.form-text').innerHTML = list;
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click', (event => removeToDoItem(event, index)));
    })
    
}

function showTotalCount(){
    document.querySelector('#total').innerHTML = todoItems.length;
}
function removeToDoItem(event, index){
    if(event.target.checked){
        todoItems.splice(index, 1);
        const textContent = document.querySelector('#view_all').textContent; 
        if(textContent === 'View All'){
            populateToDoItems(todoItems.slice(0, 5));
        }
        else{
            populateToDoItems(todoItems);
        }
        showTotalCount();
    }
    
}
function toggleView(){
    const textContent = document.querySelector('#view_all').textContent; 
    if(textContent === 'View All'){
        populateToDoItems(todoItems);
        document.querySelector('#view_all').textContent = 'View Less';
    }
    else {
        populateToDoItems(todoItems.slice(0, 5));
        document.querySelector('#view_all').textContent = 'View All';
    }
}
addEventListener()
