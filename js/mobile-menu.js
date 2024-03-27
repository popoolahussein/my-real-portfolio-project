/* eslint-disable no-shadow */
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
const mobileProject = [
  {
    name: 'Multi-post story',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.`,
    image: '/img/portfolio.png',
    technologies: ['html', 'ruby on rail', 'css'],
    liveLink:
      'https://my-real-portfolio-project-e-git-caa17c-popoolahusseins-projects.vercel.app?_vercel_share=HCFNVwwMqQEUdpYcxVAGrViI5mRyqLNV',
    sourceLink: 'https://github.com/popoolahussein/my-real-portfolio-project/tree/popup',
  },
];

const desktopProject = [
  {
    name: 'Multi - Post stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.`,
    image: '/img/portfolio.png',
    technologies: ['html', 'ruby on rail', 'css', 'Github'],
    liveLink:
      'https://my-real-portfolio-project-e-git-caa17c-popoolahusseins-projects.vercel.app?_vercel_share=HCFNVwwMqQEUdpYcxVAGrViI5mRyqLNV',
    sourceLink: 'https://github.com/popoolahussein/my-real-portfolio-project/tree/popup',
  },
];

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

// Existing code for popup menu toggle
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

// Function to generate HTML for the mobile-menu popup window
function generateMobileHTML(mobileProject) {
  return `
    <section class="portfolio-content-box hidden" id="popup-menu">
      <div class="absolute circle-bg-1 gap1"></div>
      <div class="absolute circle-bg-2 gap2"></div>
      <section class="portfolio-content">
        <button class="menu-button adjust-button" id="menu-button1">
          <div class="mobile-icon"></div>
        </button>
        <h2 class="multi-post adjust">${mobileProject.name}</h2>
        <section class="pc-details">
          <img class="img-width" src="${
            mobileProject.image
          }" title="project-img" alt="project-img" />
          <p class="story p-adjust">
            ${mobileProject.description}
          </p>
          <div class="used-lang">
            <ul class="mylist">
              ${mobileProject.technologies
                .map(
                  (tech) =>
                    `<li class="lang">${tech}</li><li class=""><span class="vertical"></span></li>`,
                )
                .join('')}
            </ul>
          </div>
          <div class="pc-button-box">
            <button class="button pc-button1">
              <a class="inbutton pc-inbutton" href="${
                mobileProject.liveLink
              }" title="project">See live</a>
              <img class="liveimg" src="/img/Icon1.png" title="see live" alt="see live" />
            </button>
            <button class="button pc-button2">
              <a class="inbutton pc-inbutton" href="${
                mobileProject.sourceLink
              }" title="project">See Source</a>
              <img src="/img/github.png" title="see-source" alt="See Source" />
            </button>
          </div>
        </section>
      </section>
    </section>
  `;
}

// Function to generate HTML for the desktop-menu popup window
function generateDesktopHTML(desktopProject) {
  return `
    <section class="portfolio-content-box hidden" id="popup-menu">
      <div class="absolute circle-bg-1 gap1"></div>
      <div class="absolute circle-bg-2 gap2"></div>
      <section class="portfolio-content">
        <button class="menu-button adjust-button" id="menu-button1">
          <div class="mobile-icon"></div>
        </button>
        <h2 class="multi-post adjust">${desktopProject.name}</h2>
        <section class="pc-details">
          <img class="img-width" src="${
            desktopProject.image
          }" title="project-img" alt="project-img" />
          <p class="story p-adjust">
            $desktopProject.description}
          </p>
          <div class="used-lang">
            <ul class="mylist">
              ${desktopProject.technologies
                .map(
                  (tech) =>
                    `<li class="lang">${tech}</li><li class=""><span class="vertical"></span></li>`,
                )
                .join('')}
            </ul>
          </div>
          <div class="pc-button-box">
            <button class="button pc-button1">
              <a class="inbutton pc-inbutton" href="${
                desktopProject.liveLink
              }" title="project">See live</a>
              <img class="liveimg" src="/img/Icon1.png" title="see live" alt="see live" />
            </button>
            <button class="button pc-button2">
              <a class="inbutton pc-inbutton" href="${
                desktopProject.sourceLink
              }" title="project">See Source</a>
              <img src="/img/github.png" title="see-source" alt="See Source" />
            </button>
          </div>
        </section>
      </section>
    </section>
  `;
}

window.addEventListener('load', () => {
  const desktopPopupHTML = generateDesktopHTML(desktopProject[0]);
  const desktopPopupContainer = document.getElementById('popup-menui');
  desktopPopupContainer.insertAdjacentHTML('beforeend', desktopPopupHTML);

  const mobilePopupHTML = generateMobileHTML(mobileProject[0]);
  const mobilePopupContainer = document.getElementById('popup-menu');
  mobilePopupContainer.insertAdjacentHTML('beforeend', mobilePopupHTML);
});
