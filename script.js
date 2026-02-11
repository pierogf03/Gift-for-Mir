const introCard = document.getElementById('introCard');
const questionCard = document.getElementById('questionCard');
const yesCard = document.getElementById('yesCard');
const noCard = document.getElementById('noCard');

const continueBtn = document.getElementById('continueBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const choiceButtons = document.getElementById('choiceButtons');
const restartButtons = document.querySelectorAll('[data-restart]');

const loveAudio = document.getElementById('loveAudio');
const sadAudio = document.getElementById('sadAudio');
const nowPlaying = document.getElementById('nowPlaying');
const songTitle = document.getElementById('songTitle');

const confettiCanvas = document.getElementById('confettiCanvas');
const heartsLayer = document.getElementById('heartsLayer');
const ctx = confettiCanvas.getContext('2d');

let confettiAnimation = null;
let confettiPieces = [];

function updateNowPlaying(audioElement) {
  const hasSource = Boolean(audioElement.getAttribute('src'));
  songTitle.textContent = "Cancioncita de usagi toda bonita";
  nowPlaying.classList.remove('hidden');
}

function hideNowPlaying() {
  nowPlaying.classList.add('hidden');
}

function stopAllAudio() {
  loveAudio.pause();
  sadAudio.pause();
  loveAudio.currentTime = 0;
  sadAudio.currentTime = 0;
  hideNowPlaying();
}

function showCard(type) {
  introCard.classList.add('hidden');
  questionCard.classList.add('hidden');
  yesCard.classList.add('hidden');
  noCard.classList.add('hidden');

  if (type === 'intro') {
    document.body.classList.remove('sad');
    stopAllAudio();
    stopCelebration();
    introCard.classList.remove('hidden');
    return;
  }

  if (type === 'question') {
    document.body.classList.remove('sad');
    stopAllAudio();
    stopCelebration();
    questionCard.classList.remove('hidden');
    resetNoButtonPosition();
    return;
  }

  if (type === 'yes') {
    document.body.classList.remove('sad');
    stopAllAudio();
    yesCard.classList.remove('hidden');
    loveAudio.play().catch(() => {
      // Ignore autoplay restrictions silently.
    });
    updateNowPlaying(loveAudio);
    startCelebration();
    return;
  }

  if (type === 'no') {
    document.body.classList.add('sad');
    stopAllAudio();
    stopCelebration();
    noCard.classList.remove('hidden');
    sadAudio.play().catch(() => {
      // Ignore autoplay restrictions silently.
    });
    updateNowPlaying(sadAudio);
  }
}

function resetNoButtonPosition() {
  noBtn.style.left = '62%';
  noBtn.style.top = '50%';
  noBtn.style.transform = 'translate(-50%, -50%)';
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
    attempts < 24 &&
    randomX + bounds.left < yesRect.right &&
    randomX + bounds.left + buttonWidth > yesRect.left &&
    randomY + bounds.top < yesRect.bottom &&
    randomY + bounds.top + buttonHeight > yesRect.top
  );

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = 'none';
}

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function startConfetti() {
  resizeCanvas();
  confettiCanvas.classList.remove('hidden');

  confettiPieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -confettiCanvas.height,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 10,
    speed: 1.2 + Math.random() * 3,
    drift: -1 + Math.random() * 2,
    color: ['#ff5d9e', '#ffd166', '#7aebff', '#b8ff6b', '#ffffff'][Math.floor(Math.random() * 5)],
  }));

  const draw = () => {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;

      if (piece.y > confettiCanvas.height + 10) {
        piece.y = -20;
        piece.x = Math.random() * confettiCanvas.width;
      }

      ctx.fillStyle = piece.color;
      ctx.fillRect(piece.x, piece.y, piece.w, piece.h);
    });

    confettiAnimation = requestAnimationFrame(draw);
  };

  draw();
}

function stopConfetti() {
  if (confettiAnimation) {
    cancelAnimationFrame(confettiAnimation);
    confettiAnimation = null;
  }

  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiCanvas.classList.add('hidden');
}

function spawnHearts() {
  heartsLayer.classList.remove('hidden');

  for (let index = 0; index < 20; index += 1) {
    const heart = document.createElement('span');
    heart.textContent = Math.random() > 0.5 ? '💖' : '💘';
    heart.style.left = `${6 + Math.random() * 88}%`;
    heart.style.bottom = `${8 + Math.random() * 30}%`;
    heart.style.animationDelay = `${index * 0.08}s`;
    heartsLayer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2600);
  }
}

function startCelebration() {
  startConfetti();
  spawnHearts();
}

function stopCelebration() {
  stopConfetti();
  heartsLayer.classList.add('hidden');
  heartsLayer.replaceChildren();
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
window.addEventListener('resize', resizeCanvas);

showCard('intro');
