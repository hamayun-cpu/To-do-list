import './style.css';
import './tabs';
import './side_bar';
import './form_project';
import loadProjects from './load_projects';
import loadProjectTodos from './load_project_todos';
import { createProject, createList } from './factory_funtions';

// make deafult project
let storedNames = JSON.parse(localStorage.getItem('projectnames'));
if (storedNames === null || storedNames.length === 0) {
  storedNames = [];
  const def = createProject('default');
  const list = createList('title', 'description', 'dueDate', 'priority');
  def.todos.push(list);
  storedNames.push(def);
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
}

// load all projects in left side bar
loadProjects();
// load all projects todos and hide them by default
loadProjectTodos(storedNames);

// global varibales
const addProject = document.getElementById('add-project');
const formProject = document.getElementById('project-form');
const addProjectBtn = document.getElementById('ad-proj');
const addTaskBtn = document.getElementById('add-todo');
const cancelTodo = document.getElementById('cancel');
const cancelProject = document.getElementById('cancelProject');
let isEditButtonPressed = false;
const editStack = [];

// helperfuntions--------------------------
const displayProjectForm = () => {
  formProject.classList.remove('dis-none');
};
const hideProjectForm = () => {
  if (!(formProject.classList.contains('dis-none'))) {
    formProject.classList.add('dis-none');
  }
};
const showOnlyThisProject = (number) => {
  for (let i = 0; i < storedNames.length; i += 1) {
    const openedProject = document.getElementById(`name-${i}`);
    const openedProjectName = document.getElementById(`project-${i}`);
    const taskButton = document.getElementById(`task-button-${i}`);

    if (i === number) {
      openedProject.classList.remove('dis-none');
      taskButton.classList.remove('dis-none');
      if (!(openedProjectName.classList.contains('permanent-back-gray'))) {
        openedProjectName.classList.add('permanent-back-gray');
      }

      for (let j = 0; j < storedNames[i].todos.length; j += 1) {
        const projectTodo = document.getElementById(`task-${i}-${j}`);
        projectTodo.classList.remove('dis-none');
      }
    } else {
      if (!(openedProject.classList.contains('dis-none'))) {
        openedProject.classList.add('dis-none');
      }
      if (!(taskButton.classList.contains('dis-none'))) {
        taskButton.classList.add('dis-none');
      }
      for (let j = 0; j < storedNames[i].todos.length; j += 1) {
        const projectTodo = document.getElementById(`task-${i}-${j}`);
        if (!(projectTodo.classList.contains('dis-none'))) {
          projectTodo.classList.add('dis-none');
        }
      }
      openedProjectName.classList.remove('permanent-back-gray');
    }
  }
};
const deleteProject = (index) => {
  storedNames.splice(index, 1);
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
  window.location.reload();
};
const hideTodoForm = () => {
  const form = document.getElementById('todo-form');
  if (!(form.classList.contains('dis-none'))) {
    form.classList.add('dis-none');
  }
};
const whichActive = () => {
  let i;
  for (i = 0; i < storedNames.length; i += 1) {
    const op = document.getElementById(`name-${i}`);
    if (!(op.classList.contains('dis-none'))) {
      break;
    }
  }
  return i;
};
const addTodoToProject = (title, decription, date, priority) => {
  if (isEditButtonPressed) {
    const j = editStack.pop();
    const i = editStack.pop();
    storedNames[i].todos[j].title = title;
    storedNames[i].todos[j].description = decription;
    storedNames[i].todos[j].dueDate = date;
    storedNames[i].todos[j].priority = priority;
    isEditButtonPressed = false;
  } else {
    const i = whichActive();
    const openedObject = storedNames[i];
    const list = createList(title, decription, date, priority);
    openedObject.todos.push(list);
  }
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
  window.location.reload();
};
const hideTodosOfProject = (i) => {
  for (let j = 0; j < storedNames[i].todos.length; j += 1) {
    const ele = document.getElementById(`task-${i}-${j}`);
    ele.classList.add('dis-none');
  }
};
const showTodosOfProject = (i) => {
  for (let j = 0; j < storedNames[i].todos.length; j += 1) {
    const ele = document.getElementById(`task-${i}-${j}`);
    ele.classList.remove('dis-none');
  }
};
const showTodoForm = () => {
  const formTodo = document.getElementById('todo-form');
  formTodo.classList.remove('dis-none');
  const l = whichActive();
  hideTodosOfProject(l);
};
const changeIsEditButtonPressed = (val) => {
  isEditButtonPressed = val;
};

// eventListeners-----------------------------
addProject.addEventListener('click', () => {
  displayProjectForm();
});

addProjectBtn.addEventListener('click', (e) => {
  const name = document.getElementById('proj-name').value;

  if (name !== '') {
    hideProjectForm();
    const def = createProject(name);
    storedNames.push(def);
    localStorage.setItem('projectnames', JSON.stringify(storedNames));
  } else {
    e.preventDefault();
  }
});

for (let i = 0; i < storedNames.length; i += 1) {
  const openedProject = document.getElementById(`project-${i}`);
  const delProject = document.getElementById(`del-project-${i}`);
  const taskButton = document.getElementById(`task-button-${i}`);

  openedProject.addEventListener('click', () => {
    hideTodoForm();
    showOnlyThisProject(i);
  });

  openedProject.addEventListener('mouseover', () => {
    delProject.classList.remove('dis-none');
  });

  openedProject.addEventListener('mouseout', () => {
    if (!(delProject.classList.contains('dis-none'))) {
      delProject.classList.add('dis-none');
    }
  });

  delProject.addEventListener('click', () => {
    deleteProject(i);
  });

  taskButton.addEventListener('click', () => {
    showTodoForm();
  });

  for (let j = 0; j < storedNames[i].todos.length; j += 1) {
    const del = document.getElementById(`delete-${i}-${j}`);
    const edit = document.getElementById(`edit-${i}-${j}`);

    del.addEventListener('click', () => {
      storedNames[i].todos.splice(j, 1);
      localStorage.setItem('projectnames', JSON.stringify(storedNames));
      window.location.reload();
    });

    edit.addEventListener('click', () => {
      changeIsEditButtonPressed(true);
      editStack.push(i);
      editStack.push(j);
      const { title } = storedNames[i].todos[j];
      const decription = storedNames[i].todos[j].description;
      const date = storedNames[i].todos[j].dueDate;
      const { priority } = storedNames[i].todos[j];
      showTodoForm();
      document.getElementById('todo-title').value = title;
      document.getElementById('todo-description').value = decription;
      document.getElementById('todo-date').value = date;
      document.getElementById('todo-priority').value = priority;
    });
  }
}

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('todo-title').value;
  const decription = document.getElementById('todo-description').value;
  const date = document.getElementById('todo-date').value;
  const priority = document.getElementById('todo-priority').value;

  if (title !== '' && decription !== '' && date !== '' && priority !== '') {
    hideTodoForm();
    addTodoToProject(title, decription, date, priority);
  }
});

cancelTodo.addEventListener('click', (e) => {
  e.preventDefault();
  hideTodoForm();
  if (isEditButtonPressed) {
    editStack.pop();
    const i = editStack.pop();
    showTodosOfProject(i);
    isEditButtonPressed = false;
  } else {
    const j = whichActive();
    showTodosOfProject(j);
  }
});

cancelProject.addEventListener('click', (e) => {
  e.preventDefault();
  hideProjectForm();
});
