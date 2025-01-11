const inputTask = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

function addTask(){
    if (inputTask.value === ""){
        alert("You must have to add something");
    } else{
        let li = document.createElement("li");
        li.innerText = inputTask.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
}

taskList.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();
