'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener('click', open);

closeBtn.addEventListener('click', close);
overlay.addEventListener('click', close);
const pressed = function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') close();
};
document.addEventListener('keydown', pressed);
