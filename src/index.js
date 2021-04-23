import "./style.css";
import './tabs';
import './side_bar'
import './form_project'

const projectnames = [];

const addProject = document.getElementById('add-project');
const formProject = document.getElementById('project-form');
const addProjectBtn = document.getElementById('ad-proj');

//helperfuntion
const displayProjectForm = () => {
  formProject.classList.remove('dis-none');
}
const hideProjectForm = () => {
  if (!(formProject.classList.contains('dis-none'))) {
    formProject.classList.add('dis-none');
  }
}

addProject.addEventListener('click', () => {
  displayProjectForm();
});

addProjectBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('proj-name').value;
  projectnames.push(name);
  console.log(projectnames);
});
