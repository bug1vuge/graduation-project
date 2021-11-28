const modalModule = (modalSelector, openButtonSelector) => {
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector(modalSelector);
    const openModalButtons = document.querySelectorAll(openButtonSelector);


    openModalButtons.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                e.preventDefault();
            };

            overlay.style.display = 'block';
            modal.style.display = 'block';
        });
    });


    modal.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.title === 'Close') {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        }

    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
};

export default modalModule;