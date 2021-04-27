import "./style.css";
import './tabs';
import './side_bar'
import './form_project'
import load_projects from './load_projects'
import loadProjectTodos from './load_project_todos'
import * as factoryFuntions from './factory_funtions'
//factory funtions



// make deafult project
let storedNames = JSON.parse(localStorage.getItem('projectnames'));
if(storedNames === null || storedNames.length === 0) {
  storedNames = [];
  const def = factoryFuntions.createProject('default');
  def.addToDo('def','def','def','def');
  storedNames.push(def);
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
}



// load all projects in left side bar
load_projects();
// load all projects todos and hide them by default
loadProjectTodos(storedNames);




// global varibales
const addProject = document.getElementById('add-project');
const formProject = document.getElementById('project-form');
const addProjectBtn = document.getElementById('ad-proj');
const addTaskBtn = document.getElementById('add-todo');





//helperfuntions--------------------------
const displayProjectForm = () => {
  formProject.classList.remove('dis-none');
}
const hideProjectForm = () => {
  if (!(formProject.classList.contains('dis-none'))) {
    formProject.classList.add('dis-none');
  }
}
const showOnlyThisProject = (number) => {
  for (let i = 0; i < storedNames.length; i++) {
    const openedProject = document.getElementById(`name-${i}`);
    const openedProjectName = document.getElementById(`project-${i}`);
    const taskButton = document.getElementById(`task-button-${i}`);

    if (i === number) {
      openedProject.classList.remove('dis-none');
      taskButton.classList.remove('dis-none');
      if(!(openedProjectName.classList.contains('permanent-back-gray'))) {
        openedProjectName.classList.add('permanent-back-gray');
      }

      for(let j = 0; j < storedNames[i].todos.length; j++) {
        const projectTodo = document.getElementById(`task-${i}-${j}`);
        projectTodo.classList.remove('dis-none');
      }
    }
    else {
      if(!(openedProject.classList.contains('dis-none'))) {
        openedProject.classList.add('dis-none');
      }
      if(!(taskButton.classList.contains('dis-none'))) {
        taskButton.classList.add('dis-none');
      }
      for(let j = 0; j < storedNames[i].todos.length; j++) {
        const projectTodo = document.getElementById(`task-${i}-${j}`);
        if(!(projectTodo.classList.contains('dis-none'))) {
          projectTodo.classList.add('dis-none');
        }
      }
      openedProjectName.classList.remove('permanent-back-gray');
    }
  }
}
const deleteProject = (index) => {
  storedNames.splice(index, 1);
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
  location.reload();
}
const hideTodoForm = () => {
  const form = document.getElementById('todo-form');
  if (!(form.classList.contains('dis-none'))) {
    form.classList.add('dis-none');
  }
}
const addTodoToProject = (title,decription,date,priority) => {
  alert('hi');
  for(let i =0; i < storedNames.length; i++) {
    const openedProject = docunment.getElementById(`name-${i}`);
    if (!(openedProject.classList.contains('dis-none'))) {
      storedNames[i].addToDo(title,decription,date,priority);
      localStorage.setItem('projectnames', JSON.stringify(storedNames));
      break;
    }
  }
}





//eventListeners-----------------------------
addProject.addEventListener('click', () => {
  displayProjectForm();
});

addProjectBtn.addEventListener('click', (e) => {
  const name = document.getElementById('proj-name').value;

  if(name !== '') {
    hideProjectForm();
    const def = factoryFuntions.createProject(name);
    storedNames.push(def);
    localStorage.setItem('projectnames', JSON.stringify(storedNames));
  } else {
    e.preventDefault();
  }
});

for (let i = 0; i < storedNames.length; i++) {
  const openedProject = document.getElementById(`project-${i}`);
  const delProject = document.getElementById(`del-project-${i}`);
  const taskButton = document.getElementById(`task-button-${i}`);

  openedProject.addEventListener('click', () => {
    showOnlyThisProject(i);
  });

  openedProject.addEventListener('mouseover', event => {
    delProject.classList.remove('dis-none');
  });
  
  openedProject.addEventListener('mouseout', event => {
    if(!(delProject.classList.contains('dis-none'))) {
      delProject.classList.add('dis-none');
    }
  });

  delProject.addEventListener('click', () => {
    deleteProject(i);
  });

  taskButton.addEventListener('click', () => {
    const formTodo = document.getElementById('todo-form');
    formTodo.classList.remove('dis-none');
  });
  
}


addTaskBtn.addEventListener('click', () => {
  const title = document.getElementById('todo-title').value;
  const decription = document.getElementById('todo-description').value;
  const date = document.getElementById('todo-date').value;
  const priority = document.getElementById('todo-priority').value;

  if(title !== '' && decription !== '' && date !== '' && priority !== '') {
    hideTodoForm();
    addTodoToProject(title,decription,date,priority);
  } else {
    e.preventDefault();
  }
});
