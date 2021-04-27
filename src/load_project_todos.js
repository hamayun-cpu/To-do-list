const loadProjectTodos = (storedNames) => {
  for (let i = 0; i < storedNames.length; i++) {
    const d = document.getElementById('right-container');
    
    const newd = document.createElement('div');
    newd.id = `name-${i}`;
    newd.innerHTML = `<h1 class = 'bold-text ml-3 mt-3'>${storedNames[i].name}</h1>`;
    newd.className = 'dis-none';
    d.appendChild(newd);

    const newT = document.createElement('div');
    newT.id = `task-button-${i}`;
    newT.innerHTML = `<button id = 'add-task' class = 'add-btn cur-pointer w-100 my-2 text-center'><i class='fas fa-plus mr-2'></i> Add Task</button>`;
    newT.className = 'dis-none';
    d.appendChild(newT);
  }
}

export default loadProjectTodos;