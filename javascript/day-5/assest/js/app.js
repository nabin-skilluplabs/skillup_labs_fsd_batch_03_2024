function addEventListener() {
     document.querySelector('#addBtn').addEventListener('click', handleAddNew);
}
const toDoItems = [];
function handleAddNew(event) {
    event.preventDefault();

    const todoItem = document.querySelector('input').value;
    toDoItems.push(todoItem);
    populateToDoItems(toDoItems);
   console.log({todoItem, toDoItems});




}
function populateToDoItems(toDoItems) {
    let list = '';
    for(value of toDoItems) {
        list += `<div class="courses"><span>${value}</span><input type="checkbox"></input></div>`;
    }
    document.querySelector(".course-content").innerHTML = list;
    document.querySelector("#total").innerHTML = toDoItems.length;
}
addEventListener();