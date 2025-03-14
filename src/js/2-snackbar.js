import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startGreeting = () => {
  iziToast.show({
    close: false,
    position: 'topRight',
    progressBarColor: '#0071BD',
    title: 'Hello',
    titleColor: '#FFFFFF',
    message: 'Welcome',
    messageColor: '#FFFFFF',
    backgroundColor: '#0099FF',
  });
};

startGreeting();

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  createPromise
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled Promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected Promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
