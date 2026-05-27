function addTask(){
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    newTask.textContent = document.getElementById('inputTask').value;
    deleteTask(newTask);
    taskList.appendChild(newTask);
    document.getElementById('inputTask').value = "";
    
}
function deleteTask(newTask){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function() {
        newTask.remove();
    }
}