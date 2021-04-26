const load_projects = () => {
  const container = document.getElementById('left-container');
  const projects = JSON.parse(localStorage.getItem('projectnames'));
  const size = projects.length;
  for(let i = 0; i < size; i++) {
    const project = document.createElement('div');
    project.id = `project-${i}`;
    project.className = 'add-btn cur-pointer bold-text d-flex justify-content-between';
    project.innerHTML = `<div><i class="fas fa-th-list"></i> ${projects[i]}</div> <input id = 'del-project-${i}' class = 'cross dis-none' type="submit" value="x">`;
    container.appendChild(project);
  }
};

export default load_projects;