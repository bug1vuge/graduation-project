const benefitsSliderModule = () => {
    const slides = document.querySelectorAll('.benefits__item');
    const sliderArrowsBlock = document.querySelector('.benefits-arrows');
    const slidesWrap = document.querySelector('.benefits-wrap');

    let count = 0;


    const changeSlidesAmount = () => {

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[0].classList.add('active');

    };

    if (screen.width < 576) {

        slidesWrap.style.justifyContent = 'center';
        changeSlidesAmount();

    }

    const showNextSlides = () => {

        if (screen.width > 576) {
            slides[count].classList.remove('active');
            slides[count + 1].classList.remove('active');
            slides[count + 2].classList.remove('active');

            count += 3;

            if (count >= slides.length) {
                count = 0;
            }

            slides[count].classList.add('active');
            slides[count + 1].classList.add('active');
            slides[count + 2].classList.add('active');

        } else {
            slides[count].classList.remove('active');

            count++;

            if (count >= slides.length) {
                count = 0;
            }

            slides[count].classList.add('active');
        }
    };

    const showPrevSlides = () => {

        if (screen.width > 576) {
            slides[count].classList.remove('active');
            slides[count + 1].classList.remove('active');
            slides[count + 2].classList.remove('active');

            count -= 3;

            if (count < 0) {
                count = slides.length - 3;
            }

            slides[count].classList.add('active');
            slides[count + 1].classList.add('active');
            slides[count + 2].classList.add('active');

        } else {
            slides[count].classList.remove('active');

            count--;

            if (count < 0) {
                count = slides.length - 1;
            }

            slides[count].classList.add('active');
        }
    };

    sliderArrowsBlock.addEventListener('click', (e) => {
        if (e.target.closest('.benefits__arrow--right')) {
            showNextSlides();
        } else if (e.target.closest('.benefits__arrow--left')) {
            showPrevSlides();
        };
    });

};

export default benefitsSliderModule;