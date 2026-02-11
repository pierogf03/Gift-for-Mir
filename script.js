const introCard = document.getElementById('introCard');
const questionCard = document.getElementById('questionCard');
const yesCard = document.getElementById('yesCard');
const noCard = document.getElementById('noCard');

const continueBtn = document.getElementById('continueBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const choiceButtons = document.getElementById('choiceButtons');

const sadAudio = document.getElementById('sadAudio');
const restartButtons = document.querySelectorAll('[data-restart]');

function showCard(type) {
  introCard.classList.add('hidden');
  questionCard.classList.add('hidden');
  yesCard.classList.add('hidden');
  noCard.classList.add('hidden');

  if (type === 'intro') {
    document.body.classList.remove('sad');
    sadAudio.pause();
    sadAudio.currentTime = 0;
    introCard.classList.remove('hidden');
    return;
  }

  if (type === 'question') {
    document.body.classList.remove('sad');
    sadAudio.pause();
    sadAudio.currentTime = 0;
    questionCard.classList.remove('hidden');
    resetNoButtonPosition();
    return;
  }

  if (type === 'yes') {
    document.body.classList.remove('sad');
    sadAudio.pause();
    sadAudio.currentTime = 0;
    yesCard.classList.remove('hidden');
    return;
  }

  if (type === 'no') {
    document.body.classList.add('sad');
    noCard.classList.remove('hidden');
    sadAudio.play().catch(() => {
      // Ignore autoplay restrictions silently.
    });
  }
}

function resetNoButtonPosition() {
  noBtn.style.left = '56%';
  noBtn.style.top = '38px';
}

function moveNoButton() {
  const bounds = choiceButtons.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  const buttonWidth = noRect.width;
  const buttonHeight = noRect.height;

  const maxX = Math.max(bounds.width - buttonWidth - 4, 4);
  const maxY = Math.max(bounds.height - buttonHeight - 4, 4);

  let randomX = 0;
  let randomY = 0;
  let attempts = 0;

  do {
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);
    attempts += 1;
  } while (
    attempts < 20 &&
    randomX + bounds.left < yesRect.right &&
    randomX + bounds.left + buttonWidth > yesRect.left &&
    randomY + bounds.top < yesRect.bottom &&
    randomY + bounds.top + buttonHeight > yesRect.top
  );

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

continueBtn.addEventListener('click', () => showCard('question'));
yesBtn.addEventListener('click', () => showCard('yes'));

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  moveNoButton();
});
noBtn.addEventListener('focus', moveNoButton);
noBtn.addEventListener('touchstart', (event) => {
  event.preventDefault();
  moveNoButton();
});

restartButtons.forEach((btn) => btn.addEventListener('click', () => showCard('intro')));

showCard('intro');
