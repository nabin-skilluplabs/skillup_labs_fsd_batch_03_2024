function addEventListener() {
    document.querySelector("#addBtn").addEventListener("click", handleAddNew);
    document.querySelector("#view_all").addEventListener("click", toggleView)
}
const toDoItems = [];
function handleAddNew(event) {
    event.preventDefault();
    const inputItem = document.querySelector('input');
    const todoItem =  inputItem.value;
    if(todoItem !== "") {
        toDoItems.unshift(todoItem);
        populateToDoItems(toDoItems.slice(0,5));
        inputItem.value = "";


        console.log({todoItem, toDoItems});

        
    }
}
//conditional- use if or ifelse 
//shift-removes last unshift- add last push-add in first and pop-remove in first

function populateToDoItems(toDoItems) {
    let list  = '';
    for(value of toDoItems) {
        list += `<div><span>${value}</span> <input type="checkbox" ></div>`;
    }
    document.querySelector(".list").innerHTML = list;
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click' , (event) =>  removeToDoItem(event, index));
    });
    document.querySelector("#total").innerHTML = toDoItems.length;
}

function showTotalCount() {
    document.querySelector("#total").innerHTML = toDoItems.length;
}
function removeToDoItem(event , index) {
    console.log(event.target);
    if(event.target.checked) {
        toDoItems.splice(index, 1);
        const textContent = document.querySelector("#view_all").textContent;
        if (textContent === 'View All') {
        populateToDoItems(toDoItems.slice(0,5));
        }
        else {
            populateToDoItems(toDoItems);
        }
        showTotalCount();

        console.log({index})

    }
}
function toggleView() {

    const textContent = document.querySelector("#view_all").textContent;
    if(textContent === "View All")  {
        populateToDoItems(toDoItems);
        if(toDoItems.length > 5) {
            document.querySelector('#view_all').textContent = "View less";
        }
    } 
    else{
    
    populateToDoItems(toDoItems.slice(0,5));

    document.querySelector("#view_all").textContent = "View All";
    
       
    }
}

addEventListener();






