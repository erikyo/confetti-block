import confetti from 'canvas-confetti';
import './style.css';
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      confetti({ particleCount: 100, spread: 200, origin: { y: 0.6 } });
    }
  });
})
observer.observe(document.querySelector('.confetti'));