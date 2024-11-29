'use strict';

// // document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 20;
// // document.querySelector('.score').textContent = 18;

// // document.querySelector('.')

// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 230;

document.querySelector('.btn.check').addEventListener('click', function () {
  const guesss = Number(document.querySelector('.guess').value);

  if (!guesss) {
    document.querySelector('.message').textContent = 'no number';
  }
});
