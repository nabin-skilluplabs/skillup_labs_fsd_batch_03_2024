function addEventListener(){
document.querySelector("#addBtn").addEventListener("click",handleAddNew);
document.querySelector("#viewBtn").addEventListener("click", toggleView);
}
const toDoItems = [];
function handleAddNew(event){
    event.preventDefault();
    const inputItem = document.querySelector('input');
    const todoItem = inputItem.value;
    if (todoItem !==""){
    toDoItems.unshift(todoItem);
    showTotalCount();
    populateToDoItems(toDoItems.slice(0, 5));
    inputItem.value = "";
    const bodyElement = document.querySelector("body");
    const bodyHeight = window.innerHeight;
    const wrapperHeight = document.querySelector(".wrapper").offsetHeight;
    console.log({wrapperHeight, bodyHeight});
    if(wrapperHeight > bodyHeight){
        bodyElement.classList.add("fix-todo-center");
    }
    else {
        bodyElement.classList.remove("fix-todo-center")
    }
    console.log({todoItem,toDoItems});
}
}
function populateToDoItems(toDoItems){
    let list = '';
    for (value of toDoItems){
        list+= `<div> <span>${value} </span>  <input type="checkbox"></div>`;
    }
    document.querySelector(".list").innerHTML = list;
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click', (event)=> removeToDoItem(event, index));
    });

}
function showTotalCount(){
    document.querySelector("#total").innerHTML = toDoItems.length;
}
function removeToDoItem(event, index){
    console.log(event.target)
    if(event.target.checked){
        toDoItems.splice(index, 1);
        const textContent = document.querySelector("#viewBtn").textContent;
        if(textContent==="View All"){
            populateToDoItems(toDoItems.slice(0,5));
        
        }
        else{    
        populateToDoItems(toDoItems);
        }
        showTotalCount();
    }
}
function toggleView(){
    const textContent = document.querySelector("#viewBtn").textContent;
    if(textContent === "View All"){
        populateToDoItems(toDoItems);
        if(toDoItems.length > 5){
            document.querySelector("#viewBtn").textContent = "View Less";
            populateToDoItems(toDoItems);
        }
    }
    else{
        populateToDoItems(toDoItems.slice(0, 5));
        document.querySelector("#viewBtn").textContent = "View All"
    }


}





addEventListener();