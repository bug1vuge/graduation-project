const showDocsModule = () => {
    const docsWrap = document.querySelector('.text-center');
    const docsOverlay = document.querySelector('.docs-modal__overlay');
    const docsModal = document.querySelector('.docs-modal');
    const modalImage = document.querySelector('.modal-image');

    docsWrap.addEventListener('click', (e) => {
        e.preventDefault();

        let currEl = e.target;

        if (currEl.closest('.sertificate-document')) {

            docsModal.classList.add('docs-modal--vis');
            docsOverlay.classList.add('docs-modal__overlay--vis');

            const path = currEl.parentNode.getAttribute('href');

            modalImage.setAttribute('src', path);
        };

        if (currEl.classList.contains('hide-docs-modal') || currEl.classList.contains('docs-modal__overlay')) {
            docsModal.classList.remove('docs-modal--vis');
            docsOverlay.classList.remove('docs-modal__overlay--vis');
        };
    });
};

export default showDocsModule;