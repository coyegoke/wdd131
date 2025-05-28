// Dynamic Footer Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  if (navMenu.classList.contains('open')) {
    menuToggle.querySelector('.hamburger').style.display = 'none';
    menuToggle.querySelector('.close').style.display = 'block';
  } else {
    menuToggle.querySelector('.hamburger').style.display = 'block';
    menuToggle.querySelector('.close').style.display = 'none';
  }
});

// Responsive Hamburger Menu
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove('open');
    menuToggle.querySelector('.hamburger').style.display = 'none';
    menuToggle.querySelector('.close').style.display = 'block';
  }
});