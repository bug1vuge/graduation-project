const modalModule = () => {
    const overlay = document.querySelector('.overlay');

    const toggleModal = (modalSelector, openButtonSelector, closeButtonSelector) => {

        const modal = document.querySelector(modalSelector);
        const openModalButtons = document.querySelectorAll(openButtonSelector);
        const closeModalButtons = document.querySelectorAll(closeButtonSelector);


        openModalButtons.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                    e.preventDefault();
                };

                overlay.style.display = 'block';
                modal.style.display = 'block';
            });
        });

        closeModalButtons.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                    e.preventDefault();
                };

                overlay.style.display = 'none';
                modal.style.display = 'none';
            });
        });
    };


    toggleModal('.header-modal', '.order-call-btn', '.header-modal__close');
    toggleModal('.services-modal', '.call-measurer-btn', '.services-modal__close');
};

export default modalModule;