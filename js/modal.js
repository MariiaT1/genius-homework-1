const modalCall = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.modal-btn-open');
const btnClose = document.querySelector('.modal-btn-close');

function toggleHide() {
    modalCall.classList.toggle('hidden')
}


btnOpen.addEventListener('click', toggleHide);
btnClose.addEventListener('click', toggleHide);