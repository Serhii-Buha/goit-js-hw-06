

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.target.elements;
  const emailInput = formElements.email;
  const passwordInput = formElements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData);
    loginForm.reset();
  }
});






