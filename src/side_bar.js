const side_bar = (() => {
  const parent = document.getElementById('content');

  const container = document.createElement('div')
  container.className = 'container-fluid';

  container.innerHTML = `
    <div class="row">
      <div id = 'left-container' class="col-3 bg-gray h-100-vh">
        <h2 class = 'bold-text m-auto d-flex justify-content-center'>Projects</h2>
      </div>
      <div class="col-9">
        2 of 2 (wider)
      </div>
    </div>
  `;

  parent.appendChild(container);  
})();

export default side_bar;