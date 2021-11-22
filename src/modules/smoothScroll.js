const smoothScrollModule = (btn, section, block) => {
    const scrollToBtn = document.querySelector(btn);
    const scrollToSection = document.querySelector(section);
    const hideAfterBlock = document.querySelector(block)

    scrollToBtn.style.opacity = '0';
    scrollToBtn.style.transition = '0.3s ease-in';

    const scrollTo = (el) => {
        window.scroll({
            left: 0,
            top: el.offsetTop,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', () => {
        let scrollVal = Math.ceil(window.scrollY);
        let hideAfterBlockHeight = hideAfterBlock.offsetHeight;

        if (scrollVal >= hideAfterBlockHeight) {
            scrollToBtn.style.opacity = '1';
        } else {
            scrollToBtn.style.opacity = '0';
        }
    });

    scrollToBtn.addEventListener('click', () => {
        scrollTo(scrollToSection);
    });

};

export { smoothScrollModule };