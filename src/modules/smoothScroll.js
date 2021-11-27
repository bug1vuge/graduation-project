const smoothScrollModule = () => {
    const scrollToBtn = document.querySelector('.smooth-scroll');
    const scrollToSection = document.querySelector('#header');
    const hideAfterBlock = document.querySelector('#benefits');

    const scrollTo = (el) => {
        window.scroll({
            left: 0,
            top: el.offsetTop,
            behavior: 'smooth'
        });
    };

    const checkingPassedPos = () => {
        let scrollVal = window.scrollY;
        let passedHeight = hideAfterBlock.offsetTop;

        if (scrollVal > passedHeight) {
            scrollToBtn.classList.add('show');
        } else {
            scrollToBtn.classList.remove('show');
        }
    };

    checkingPassedPos();

    window.addEventListener('scroll', () => {
        checkingPassedPos();
    });

    scrollToBtn.addEventListener('click', () => {
        scrollTo(scrollToSection);
    });
};

export default smoothScrollModule;