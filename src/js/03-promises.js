function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};

const formEl = document.querySelector('form');
const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const btnEl = document.querySelector('button');

function onFormSubmit(event) {
  event.preventDefault();
  const delay = parseInt(firstDelayEl.value);
  const step = parseInt(delayStepEl.value);
  const amount = parseInt(amountEl.value);
  let currentDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        alert(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
}
formEl.addEventListener('submit', onFormSubmit);