const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
const link = document.querySelector('.link');

menuToggle.addEventListener('click', function() {
   navLinks.classList.toggle('show-link');
});