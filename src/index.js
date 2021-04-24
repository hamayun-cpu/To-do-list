import "./style.css";
import './tabs';
import './side_bar'
import './form_project'


// make deafult projec
let storedNames = JSON.parse(localStorage.getItem('projectnames'));
if(storedNames === null || storedNames.length === 0) {
  storedNames = [];
  storedNames.push('deafult');
  localStorage.setItem('projectnames', JSON.stringify(storedNames));
}

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

//eventListeners-----------------------------
addProject.addEventListener('click', () => {
  displayProjectForm();
});

addProjectBtn.addEventListener('click', (e) => {
  const name = document.getElementById('proj-name').value;

  if(name !== '') {
    hideProjectForm();
    storedNames.push(name);
    localStorage.setItem('projectnames', JSON.stringify(storedNames));
  }
  
});
