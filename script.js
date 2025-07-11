
const quotes = [
  "“Nothing's gonna hurt you baby...”",
  "“You were the one I loved...”",
  "“Each time I see you I fall a little more...”",
  "“Your lips, my lips, apocalypse...”",
  "“I could never make you stay...”"
];

function updateQuote() {
  const box = document.getElementById('quoteBox');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
  box.textContent = randomQuote;

  box.style.opacity = 0;
  setTimeout(() => {
    box.style.opacity = 0.85;
  }, 200);
}

setInterval(updateQuote, 7000);


let audio = new Audio('Apocalypse.mp3');
audio.volume = 0.6;
let isPlaying = false;

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playButton.textContent = 'Pause the Vibe ⏸️';
    isPlaying = true;
  } else {
    audio.pause();
    playButton.textContent = 'Play the Vibe 🎶';
    isPlaying = false;
  }
});
window.addEventListener('load', () => {
  audio.play().then(() => {
    isPlaying = true;
    playButton.textContent = 'Pause the Vibe ⏸️';
  }).catch(() => {
    console.log("Auto-play diblokir 😢 klik tombol manual ya!");
  });
});


const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}
animateStars();
function toggleList(header) {
  const albumDiv = header.parentElement;
  const list = albumDiv.querySelector("ul");

  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

