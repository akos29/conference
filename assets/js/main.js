const toggler = document.querySelector('.menu-toggler');
const collapseMenu = document.querySelector('.menu-collapse');
// const collapseContainer = document.querySelectorAll('.nav-link');
const speakerContainer = document.querySelector('.speakers-container');

function toggle() {
  if (collapseMenu.style.display === 'none') {
    collapseMenu.style.display = 'flex';
  } else {
    collapseMenu.style.display = 'none';
  }
}

toggler.addEventListener('click', toggle);

document.querySelectorAll('.nav-link').forEach((item) => {
  item.addEventListener('click', toggle);
});

const speakersList = [
  {
    name: 'James M. Bing',
    pp: './assets/images/speaker 2.jpg',
    position: 'Head of  Researchers, Barkley University, Development State',
    experience: 'Listen to the speakers from various countries about the message of development and its context.',
  },
  {
    name: 'Dorrel Tibbs',
    pp: './assets/images/Dorrel-tibbs.jpg',
    position: 'Global Head of People Development, Talent & Communication',
    experience:
    'Listen to the speakers from various countries about the message of development and its context.',
  },
  {
    name: 'Yu Dan Shi',
    pp: './assets/images/yu-dan-shi.jpg',
    position: 'Head of Behavioural Science & Consulting, APAC',
    experience:
    'Listen to the speakers from various countries about the message of development and its context.',
  },

  {
    name: 'Kibrewossen Y',
    pp: './assets/images/kibrewossen.png',
    position: 'CEO of ABC IDBFactory',
    experience:
    'Listen to the speakers from various countries about the message of development and its context.',
  },
  {
    name: 'Negessu Tsegaye',
    pp: './assets/images/king.webp',
    position: 'Executive Leader Organisational Development',
    experience:
    'Listen to the speakers from various countries about the message of development and its context.',
  },
  {
    name: 'Daniel Sahle',
    pp: './assets/images/dani.jpg',
    position: 'CEO of ABC IDBFactory',
    experience: 'Listen to the speakers from various countries about the message of development and its context.',
  },
];

function displaySpeaker(s) {
  const speaker = `<div class="speaker">
  <div class="profile-picture">
  <img src="./assets/images/bg-transparent.jpg" alt="${s.name}" class="background">
  <img src="${s.pp}" alt="${s.name}" class="foreground">
  </div>
  <h3>${s.name} T</h3>
  <p class="position"><em>${s.position}</em></p>
  <hr/>
  <p class="bio">
  ${s.experience}
  </p></div>`;
  return speaker;
}

function displaySpeakers() {
  speakersList.forEach((speaker) => {
    speakerContainer.innerHTML += displaySpeaker(speaker);
  });
}

window.addEventListener('load', displaySpeakers);