import { refs } from './refs';

export function openModal() {
  refs.modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscKeyPress);
  refs.modalCloseBtn.addEventListener('click', handleModalCloseBtnClick);
  refs.modal.addEventListener('click', handleBackDropClick);
}
export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscKeyPress);
  refs.modalCloseBtn.removeEventListener('click', handleModalCloseBtnClick);
  refs.modal.removeEventListener('click', handleBackDropClick);
}
function handleEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
function handleModalCloseBtnClick() {
  closeModal();
}
function handleBackDropClick(event) {
  if (event.target === refs.modal) {
    closeModal();
  }
}
