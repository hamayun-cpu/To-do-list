const side_bar = (() => {
  const parent = document.getElementById('content');

  const container = document.createElement('div')
  container.className = 'container-fluid';

  container.innerHTML = `
    <div class="row">
      <div id = 'left-container' class='col-3 bg-gray h-100-vh'>
        <h2 class = 'bold-text d-flex justify-content-center mt-3'>Projects</h2>
        <button id = 'add-project' class = 'add-btn w-100 my-2 text-left'><i class='fas fa-plus mr-2'></i> Add Project</button>
      </div>
      <div id = 'right-container' class="col-9">
        2 of 2 (wider)
      </div>
    </div>
  `;

  parent.appendChild(container);  
})();

export default side_bar;