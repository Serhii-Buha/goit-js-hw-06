

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

const counterValue = document.querySelector('#value');

// console.log(value);

let value = 0;

decrementBtn.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
    // counterValue.textContent = +counterValue.textContent - 1;
});

incrementBtn.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
    // counterValue.textContent = +counterValue.textContent + 1;
});




