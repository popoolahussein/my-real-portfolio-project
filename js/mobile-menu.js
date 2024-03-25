const desktopFooter = document.querySelector('.desktop-footer');
const contactForm = document.querySelector('.contact-form');
const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const desktopVersion = document.querySelector('.main1');
const mobileVersion = document.querySelector('.main');
const projectButton = document.querySelectorAll('.project-button');
const popupMenu = document.getElementById('popup-menu');
const projectButtoni = document.querySelectorAll('.project-buttoni');
const popupMenui = document.getElementById('popup-menui');

function handleVisibility() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth >= 768) {
    // Show desktop footer and hide contact form
    desktopFooter.style.display = 'block';
    contactForm.style.display = 'none';

    // Show desktop version and hide mobile version
    desktopVersion.style.display = 'block';
    mobileVersion.style.display = 'none';
  } else {
    // Show contact form and hide desktop footer
    desktopFooter.style.display = 'none';
    contactForm.style.display = 'block';

    // Show mobile version and hide desktop version
    desktopVersion.style.display = 'none';
    mobileVersion.style.display = 'block';
  }

  // Adjust layout for the mobile menu
  if (screenWidth <= 768) {
    desktopVersion.style.display = 'none';
    mobileVersion.style.display = 'block';
  } else {
    desktopVersion.style.display = 'block';
    mobileVersion.style.display = 'none';
  }
}

// Initial check and set visibility
handleVisibility();

// Listen for window resize events
window.addEventListener('resize', handleVisibility);

// Existing code for mobile menu toggle
const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
};

hamburgerBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

// viewing and existing code for popup menu toggle
const popMenu = () => {
  popupMenu.classList.toggle('hidden');
};

projectButton.forEach((button) => {
  button.addEventListener('click', popMenu);
});
popupMenu.addEventListener('click', popMenu);

const popMenui = () => {
  popupMenui.classList.toggle('hidden');
};

projectButtoni.forEach((button) => {
  button.addEventListener('click', popMenui);
});
popupMenui.addEventListener('click', popMenui);
