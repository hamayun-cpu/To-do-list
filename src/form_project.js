const formForProject = (() => {
  const container = document.getElementById('left-container');
  const form = document.createElement('div');
  form.id = 'project-form';
  form.classList = 'dis-none';
  form.innerHTML = `
    <form>
      <input id = 'proj-name' class = 'form-control' type='text' name = 'proj-name' placeholder="Project name..">
      <input id = 'ad-proj' class = 'btn btn-primary my-1 w-48' type="submit" value="Add">
      <input class = 'btn btn-danger w-50' type="submit" value="Cancel">
    </form>
  `;

  container.appendChild(form);
})();

export default formForProject;
