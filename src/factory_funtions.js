export const createList = (title,description,dueDate,priority) => {
  return {
    title,description,dueDate,priority
  };
}

export const createProject = (name) => {
  const todos = [];
  const addToDo = (title,description,dueDate,priority) => {
    const list = createList(title,description,dueDate,priority);
    todos.push(list);
  }
  return {
    name,addToDo,todos
  };
}