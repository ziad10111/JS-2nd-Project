'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel);

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!model.classList.contains('hidden')) {
      closeModel();
    }
  }
});
