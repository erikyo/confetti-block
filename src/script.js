import confetti from 'canvas-confetti';
import './style.css';

/**
 * Add event listener to confetti button to start confetti
 */
document.querySelector('.wp-block-blocchi-confetti')?.addEventListener('click', () => {
  console.log("confetti!")
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
})