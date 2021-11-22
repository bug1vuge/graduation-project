const modalModule = (modalClass, overlayClass, openBtn, closeBtn) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector(overlayClass);
    const openModalBtns = document.querySelectorAll(openBtn);
    const closeModalBtns = document.querySelectorAll(closeBtn);


    const openModalFunc = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }

        overlay.style.display = 'block';
        modal.style.display = 'block';
    };

    const closeModalFunc = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }

        overlay.style.display = 'none';
        modal.style.display = 'none';
    };


    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModalFunc);
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeModalFunc);
    });
};

export { modalModule };