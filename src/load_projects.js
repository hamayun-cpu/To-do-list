const load_projects = () => {
  const container = document.getElementById('left-container');
  const projects = JSON.parse(localStorage.getItem('projectnames'));
  const size = projects.length;
  for(let i = 0; i < size; i++) {
    const project = document.createElement('div');
    project.id = `project-${i}`;
    project.className = 'add-btn cur-pointer bold-text';
    project.innerHTML = `${projects[i]}`;
    container.appendChild(project);
  }
};

export default load_projects;