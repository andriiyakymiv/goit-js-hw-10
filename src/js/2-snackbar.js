import iziToast from 'izitoast';
import iconSucces from '../img/icon-succes.svg';
import iconHello from '../img/icon-hello.svg';
import iconError from '../img/icon-error.svg';

const startGreeting = () => {
  iziToast.show({
    position: 'topRight',
    title: 'Hello',
    titleColor: '#FFFFFF',
    titleSize: '18px',
    message: 'Welcome to the timer',
    messageSize: '16px',
    messageColor: '#FFFFFF',
    iconUrl: iconHello,
    color: '#FFFFFF',
    backgroundColor: '#0099FF',
    progressBarColor: '#0071BD',
    timeout: 1000,
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
        titleSize: '18px',
        titleColor: '#FFFFFF',
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16px',
        messageColor: '#FFFFFF',
        position: 'topRight',
        timeout: 3000,
        close: false,
        iconUrl: iconSucces,
        pauseOnHover: true,
        backgroundColor: '#59A10D',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        titleSize: '18px',
        titleColor: '#FFFFFF',
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16px',
        messageColor: '#FFFFFF',
        position: 'topRight',
        timeout: 3000,
        close: false,
        pauseOnHover: true,
        backgroundColor: '#EF4040',
        iconUrl: iconError,
      });
    });
});
