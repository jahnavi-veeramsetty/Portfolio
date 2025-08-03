// === SCORE SETUP ===
let score = Number(sessionStorage.getItem('score')) || 0;
const scoreEl = document.getElementById('score');
if (scoreEl) scoreEl.textContent = score;

// === COLLECTIBLES SETUP ===
const collectibleImages = ['star.png', 'batman.png', 'jelly.png', 'spyde.png'];
const numberToGenerate = 4;

// Select random images
const selectedImages = Array.from({ length: numberToGenerate }, () =>
  collectibleImages[Math.floor(Math.random() * collectibleImages.length)]
);

// Create and place collectibles
selectedImages.forEach((filename) => {
  const img = document.createElement('img');
  img.src = 'collectibles/' + filename;
  img.classList.add('collectible');

  const top = Math.random() * 75 + 5;   // 5% to 80%
  const left = Math.random() * 75 + 10; // 10% to 85%
  img.style.position = 'absolute';
  img.style.top = top + '%';
  img.style.left = left + '%';

  img.addEventListener('click', () => {
    img.classList.add('clicked');
    setTimeout(() => img.remove(), 300); // wait for fade-out

    score++;
    sessionStorage.setItem('score', score);
    if (scoreEl) scoreEl.textContent = score;

    const pop = new Audio('sounds/pop.mp3');
    pop.play();
  });

  document.body.appendChild(img);
});

// === IMAGE SWAP ON HOVER ===
const mainPhoto = document.getElementById('main-photo');
const hoverSwap = {
  home: 'bg/topl.png',
  about: 'bg/topr.png',
  projects: 'bg/botr.png',
  details: 'bg/bot.png' // updated ID!
};

['home', 'about', 'projects', 'details'].forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('mouseenter', () => {
    if (mainPhoto) mainPhoto.src = hoverSwap[id];
  });

  btn.addEventListener('mouseleave', () => {
    if (mainPhoto) mainPhoto.src = 'bg/front.png';
  });
});


// === PROJECTS SECTION TOGGLE ===
const projectsBtn = document.getElementById('projects');
const projectsSection = document.getElementById('projectsSection');
const backProjects = document.getElementById('backProjects');

if (projectsBtn && projectsSection && backProjects) {
  // Show section
  projectsBtn.addEventListener('click', () => {
    projectsSection.classList.remove('hidden');
  });

  // Close on back button
  backProjects.addEventListener('click', () => {
    projectsSection.classList.add('hidden');
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      projectsSection.classList.add('hidden');
    }
  });

  // Close on clicking empty space
  projectsSection.addEventListener('click', (e) => {
    if (e.target === projectsSection) {
      projectsSection.classList.add('hidden');
    }
  });
}


  const img = document.getElementById('details-img');
  img.addEventListener('mouseover', () => {
    img.src = 'images/bot.png';
  });
  img.addEventListener('mouseout', () => {
    img.src = 'images/details.png';
  });

