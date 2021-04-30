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
      newTodo.className = 'dis-none card col-4 mx-auto my-2';
      newTodo.id = `task-${i}-${j}`;
      newTodo.innerHTML = `
        <div class="card-body">
          <h5 class="card-title bold-text">${storedNames[i].todos[j].title}</h5>
          <p class="card-text">${storedNames[i].todos[j].description}</p>
          <span class="card-link bold-text">${storedNames[i].todos[j].dueDate}</span>
          <span class="card-link bold-text">${storedNames[i].todos[j].priority}</span> <br>
          <div class = 'd-flex  mt-3'>
            <input id = 'edit-${i}-${j}' class = 'btn btn-primary w-50 mr-2' type="submit" value="Edit">
            <input id = 'delete-${i}-${j}' class = 'btn btn-danger w-50' type="submit" value="Delete">
          </div>
        </div>
      `;
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
        <input id = 'todo-priority' class = 'form-control' type='text' name='todo-priority' placeholder='priority..'>
        <input id = 'add-todo' class = 'btn btn-primary my-1 w-48' type='submit' value='Add'>
        <input id = 'cancel' class = 'btn btn-danger w-50' type = 'submit' value = 'Cancel'>
      </form>
    `;
  
    d.appendChild(form);
}

export default loadProjectTodos;
