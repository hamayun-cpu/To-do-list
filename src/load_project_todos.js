const loadProjectTodos = (storedNames) => {
  const d = document.getElementById('right-container');

  for (let i = 0; i < storedNames.length; i++) {
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

    for (let j = 0; j < storedNames[i].todos.length; j++) {
      const newTodo = document.createElement('div');
      newTodo.id = `task-${i}-${j}`;
      newTodo.innerHTML = `
        <h3>${storedNames[i].todos[j].title}</h3>
        <p>${storedNames[i].todos[j].description}</p>
        <p>${storedNames[i].todos[j].dueDate}</p>
        <p>${storedNames[i].todos[j].priority}</p>
      `;
      newTodo.className = 'dis-none';
      d.appendChild(newTodo);
    }
  }

  const form = document.createElement('div');
    form.id = 'todo-form';
    form.classList = 'dis-none w-50 m-auto';
    form.innerHTML = `
      <form>
        <input id = 'todo-title' class = 'form-control' type='text' name='todo-title' placeholder='title..'>
        <input id = 'todo-description' class = 'form-control' type='text' name='todo-description' placeholder='description..'>
        <input id = 'todo-date' class = 'form-control' type='text' name='todo-date' placeholder='due-date..'>
        <input id = 'todo-priority' class = 'form-control' type='text' name='todo-priority' placeholder='priority'>
        <input id = 'add-todo' class = 'btn btn-primary my-1 w-48' type='submit' value='Add'>
        <input class = 'btn btn-danger w-50' type = 'submit' value = 'Cancel'>
      </form>
    `;
  
    d.appendChild(form);
}

export default loadProjectTodos;