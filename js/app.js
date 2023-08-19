// Global Variables
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const header = document.querySelector('.page__header');


// Build the nav menu
function buildNav() {
  const fragment = document.createDocumentFragment();
  
  sections.forEach((section) => {
    const navButton = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.classList.add('menu__link');
    navLink.textContent = section.dataset.nav;
    navLink.setAttribute('href', `#${section.id}`);
    navButton.appendChild(navLink);
    fragment.appendChild(navButton);
  });
  
  navList.appendChild(fragment);
  navBar.appendChild(navList);
}

// Scroll to the clicked section
function scrollToSection(event) {
  event.preventDefault();
  const targetSectionId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetSectionId);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Set the active section and corresponding navigation link
function setActiveSection() {
  const navLinks = document.querySelectorAll('.menu__link');
  
  sections.forEach((section, i) => {
    const { top, bottom } = section.getBoundingClientRect();
    const isActive = top <= 380 && bottom >= 350;
    section.classList.toggle('your-active-class', isActive);
    navLinks[i].classList.toggle('active_button', isActive);

    if (isActive) {
      navLinks[i].style.backgroundColor = 'pink';
    } else {
      navLinks[i].style.backgroundColor = 'red'; 
    }
  });
}

// Toggle the NavBar according to user scroll activity
function toggleNavBar() {
  header.style.opacity = '1';
  
  clearTimeout(toggleNavBar.timeout);
  toggleNavBar.timeout = setTimeout(() => {
    header.style.opacity = '0';
  }, 6000);
}

// Scroll event listener
window.addEventListener('scroll', () => {
  setActiveSection();
  toggleNavBar();
});

// Build the navigation and attach event listener
buildNav();
navList.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu__link')) {
    scrollToSection(event);
  }
});
