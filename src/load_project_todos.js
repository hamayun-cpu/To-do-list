const loadProjectTodos = (storedNames) => {
  for (let i = 0; i < storedNames.length; i++) {
    const d = document.getElementById('right-container');
    
    const newd = document.createElement('div');
    newd.id = `name-${i}`;
    newd.innerHTML = `<h1 class = 'bold-text ml-2 mt-3'>${storedNames[i]}</h1>`;
    newd.className = 'dis-none';
    d.appendChild(newd);
  }
}

export default loadProjectTodos;