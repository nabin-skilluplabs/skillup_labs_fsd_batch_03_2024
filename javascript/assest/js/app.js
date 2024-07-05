function addEventListener() {
    document.querySelector("#addBtn").addEventListener("click", handleAddNew);
}
const toDoItems = [];
function handleAddNew(event) {
    event.preventDefault();
    const inputItem = document.querySelector('input');
    const todoItem = inputItem.value;
    if (todoItem !== "") {
        toDoItems.push(todoItem);
        populateToDoItems(toDoItems);
        inputItem.value = "";
        console.log({ todoItem, toDoItems });
    }
}
function populateToDoItems(toDoItems) {
    let list = '';
    for (value of toDoItems) {
        list += `<div><span>${value}</span> <input type="checkbox"></div>`;
    }
    document.querySelector(".list").innerHTML = list;
    const allCheckboxes = document.querySelector("input[type = 'checkbox']");
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (event) => removeToDoItem (event,index));
    });
    document.querySelector("#total").innerHTML = toDoItems.length;
}
function removeToDoItem(event,index) {
    if(event.target.checked){
        console.log({index})
    }
}
addEventListener();

