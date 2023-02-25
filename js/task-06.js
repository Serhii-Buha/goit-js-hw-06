

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
    
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});


//v2 setAttribute

// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', () => {
//   const inputLength = inputEl.value.length;
//   const requiredLength = Number(inputEl.dataset.length);

//   if (inputLength === requiredLength) {
//     inputEl.setAttribute('class', 'valid');
//   } else {
//     inputEl.setAttribute('class', 'invalid');
//   }
// });



//v3

// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', () => {
//   const inputLength = inputEl.value.length;
//   const requiredLength = Number(inputEl.dataset.length);

//   inputEl.classList.toggle('valid', inputLength === requiredLength);
//   inputEl.classList.toggle('invalid', inputLength !== requiredLength);
// });



