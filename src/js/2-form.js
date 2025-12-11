const formData = {
  email: '',
  message: '',
};
function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}
function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const value = JSON.parse(zip);
    return value;
  } catch {
    return zip;
  }
}
const formElem = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

formElem.addEventListener('input', () => {
  formData.email = formElem.elements.email.value;
  formData.message = formElem.elements.message.value;
  saveToLS(localStorageKey, formData);
});

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(localStorageKey);
  formElem.elements.email.value = data?.email || '';
  formElem.elements.message.value = data?.message || '';
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  formData.email = formElem.elements.email.value;
  formData.message = formElem.elements.message.value;
  if (
    formElem.elements.email.value === '' ||
    formElem.elements.message.value === ''
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formElem.reset();
  }
});
