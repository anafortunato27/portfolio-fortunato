const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.navlinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navlinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.navlinks a').forEach(link => link.addEventListener('click', () => {
  navlinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => {
    const isActive = item === button;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  projects.forEach(project => {
    project.hidden = category !== 'todos' && !project.dataset.category.split(' ').includes(category);
  });
}));
document.getElementById('year').textContent = new Date().getFullYear();
