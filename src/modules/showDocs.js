const showDocsModule = () => {
    const docsBlock = document.querySelector('.text-center');
    // const docsItems = document.querySelectorAll('.sertificate-document');
    const overlay = document.querySelector('.overlay');
    const imgModal = document.createElement('div');
    const bigImg = document.createElement('img');

    imgModal.classList.add('image-modal');

    docsBlock.append(imgModal);
    imgModal.append(bigImg);

    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';

    docsBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('.sertificate-document')) {

            imgModal.style.display = 'flex';
            overlay.style.display = 'block';

            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }
    });
};

export default showDocsModule;