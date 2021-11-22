const modalModule = (modalData) => {
    const modal = document.querySelector(modalData.modal);
    const overlay = document.querySelector(modalData.overlay);
    const openModalBtns = document.querySelectorAll(modalData.openBtn);
    const closeModalBtns = document.querySelectorAll(modalData.closeBtn);

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