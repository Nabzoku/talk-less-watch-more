const eyeInputs = document.querySelectorAll('.eye-input');
const eyes = document.querySelector('.eyes');
const mouthInput = document.querySelector('.mouth-input');
const mouth = document.querySelector('.mouth');
const text = document.querySelector('.text');
function checkForText() {
  text.style.color = '#ffebcd00';

  setTimeout(() => {
    text.textContent = mouth.classList.contains('switched')
      ? 'Talk Less'
      : 'Watch More';
    text.style.color = '#ffebcd';
  }, 200);
}
eyeInputs.forEach((eye) => {
  eye.addEventListener('change', () => {
    eyes.classList.toggle('switched');
    mouth.classList.toggle('switched');
    checkForText();
  });
});
mouthInput.addEventListener('change', (e) => {
  mouth.classList.toggle('switched');
  eyes.classList.toggle('switched');
  checkForText();
});
