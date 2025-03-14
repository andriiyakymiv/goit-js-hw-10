import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconSucces from '../img/icon-succes.svg';
import iconHello from '../img/icon-hello.svg';

const startGreeting = () => {
  iziToast.show({
    position: 'topRight',
    title: 'Hello',
    titleColor: '#FFFFFF',
    message: 'Welcome',
    messageColor: '#FFFFFF',
    iconUrl: iconHello,
    color: '#FFFFFF',
    backgroundColor: '#0099FF',
    progressBarColor: '#0071BD',
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
        title: 'OK',
        titleSize: '16px',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 1000,
        close: false,
        iconUrl: iconSucces,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        titleSize: '16px',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 1000,
        close: false,
      });
    });
});
