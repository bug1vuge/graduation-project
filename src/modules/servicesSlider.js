const servicesSliderModule = () => {
    const slides = document.querySelectorAll('.services-slide');
    const sliderArrows = document.querySelector('.services-arrows');

    let count = 0;

    const changeSlidesAmount = () => {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        slides[0].classList.add('active');

    };

    const showNextSlide = () => {

        if (screen.width > 576) {

            slides[count].classList.remove('active');
            slides[count + 1].classList.remove('active');

            count += 2;

            if (count >= slides.length) {
                count = 0;
            }

            slides[count].classList.add('active');
            slides[count + 1].classList.add('active');

        } else {

            slides[count].classList.remove('active');

            count++;

            if (count >= slides.length) {
                count = 0;
            }

            slides[count].classList.add('active');

        }

    };

    const showPrevSlide = () => {
        if (screen.width > 576) {

            slides[count].classList.remove('active');
            slides[count + 1].classList.remove('active');

            count -= 2;

            if (count < 0) {
                count = slides.length - 2;
            }

            slides[count].classList.add('active');
            slides[count + 1].classList.add('active');

        } else {

            slides[count].classList.remove('active');

            count--;

            if (count < 0) {
                count = slides.length - 1;
            }

            slides[count].classList.add('active');

        }
    };

    if (screen.width < 576) {
        changeSlidesAmount();
    }

    sliderArrows.addEventListener('click', (e) => {
        if (e.target.closest('.services__arrow--right')) {
            showNextSlide();
        } else if (e.target.closest('.services__arrow--left')) {
            showPrevSlide();
        }
    });
};

export default servicesSliderModule;