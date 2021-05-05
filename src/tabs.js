const tabs = (() => {
  const parent = document.getElementById('content');
  parent.innerHTML = `
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1 title-txt"><i class="far fa-calendar-check mr-3"></i> ToDos</span>
    </nav>
  `;
})();

export default tabs;