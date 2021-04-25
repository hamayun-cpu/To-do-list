const loadProjectTodos = (storedNames) => {
  for (let i = 0; i < storedNames.length; i++) {
    const d = document.getElementById('right-container');
    
    const newd = document.createElement('div');
    newd.id = `name-${i}`;
    newd.innerHTML = `${storedNames[i]} is project opened`;
    newd.className = 'dis-none';
    d.appendChild(newd);
  }
}

export default loadProjectTodos;