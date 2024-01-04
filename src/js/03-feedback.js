import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const updateStorage = throttle(() => {
  const formData = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

feedbackForm.addEventListener('input', updateStorage);

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent form submission
  const formData = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  console.log('Form Data:', formData);

  // Clear storage and form fields
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});
