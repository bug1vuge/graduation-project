const smoothScrollModule = () => {
    const scrollToBtn = document.querySelector('.smooth-scroll');
    const scrollToSection = document.querySelector('#header');
    const hideAfterBlock = document.querySelector('#offer');

    scrollToBtn.style.cursor = 'pointer';
    scrollToBtn.style.display = 'none';

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
            scrollToBtn.style.display = 'block';
        } else {
            scrollToBtn.style.display = 'none';
        }
    });

    scrollToBtn.addEventListener('click', () => {
        scrollTo(scrollToSection);
    });
};

export default smoothScrollModule;