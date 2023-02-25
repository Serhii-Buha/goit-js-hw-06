
const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    outputEl.textContent = inputEl.value.trim() || 'Anonymous';
});



//v2

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', () => {
//   const name = inputEl.value.trim();
//   outputEl.textContent = name ? name : 'Anonymous';
// });
