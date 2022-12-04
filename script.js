'use strict';
const modal = document.querySelector('.modal');
const overly = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overly.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
const closeModal = () => {
  modal.classList.add('hidden');
  overly.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overly.addEventListener('click', closeModal);

document.addEventListener('keydown',(event)=>{
  (event.key === 'Escape') ? closeModal() : false;
})