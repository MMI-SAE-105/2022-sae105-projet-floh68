const articlesLink = document.querySelector('.dropdown > a');
const dropdownMenu = document.querySelector('.dropdown-menu');

articlesLink.addEventListener('click', function(event) {
  event.preventDefault();
  dropdownMenu.classList.toggle('show');
});