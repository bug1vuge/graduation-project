const modalModule = () => {
    const openModalBtn = document.querySelector('.button>a');
    const closeModalBtn = document.querySelector('.header-modal__close');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.header-modal');

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();

        overlay.style.display = 'block';
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', (e) => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });

};

export default modalModule;