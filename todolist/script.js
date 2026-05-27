function addTask(){

    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Bro! give some input 🥲");
        return;
    }

    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');

    newTask.textContent = taskText;
    deleteTask(newTask);
    taskList.appendChild(newTask);
    document.getElementById('inputTask').value = "";
    
}
function deleteTask(newTask){

    if(taskText === ""){
        alert("Bro! give some input🥲")
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function() {
        newTask.remove();
    }
}