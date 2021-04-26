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

    if (i === number) {
      openedProject.classList.remove('dis-none');
      if(!(openedProjectName.classList.contains('permanent-back-gray'))) {
        openedProjectName.classList.add('permanent-back-gray');
      }
    }
    else {
      if(!(openedProject.classList.contains('dis-none'))) {
        openedProject.classList.add('dis-none');
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
}
