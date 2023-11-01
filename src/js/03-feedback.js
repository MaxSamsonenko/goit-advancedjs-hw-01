import throttle from 'lodash.throttle';
//access form element
const form = document.querySelector('.feedback-form');
//add listeners to form element for "input" and "submit" events
form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', formSubmitHandler);
//access input and texarea elements
const email = form.elements.email;
const message = form.elements.message;
//get saved data from local storage
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
//if data is present in local storage add it to input and texarea fields
if (savedData) {
  email.value = savedData.email;
  message.value = savedData.message;
}
//function for saving user input to local storage
function inputHandler() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}
//function for form submit, clear input fields and local storage
function formSubmitHandler(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}
