function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');

const colorEl = widget.querySelector('.color');

const btn = widget.querySelector('.change-color');

const changeColor = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
}

btn.addEventListener('click', changeColor);

