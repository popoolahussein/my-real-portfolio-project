const desktopFooter = document.querySelector('.desktop-footer');
const contactForm = document.querySelector('.contact-form');
const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const desktopVersion = document.querySelector('.main1');
const mobileVersion = document.querySelector('.main');

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
