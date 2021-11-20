import { openModal, timer, slider } from './modules/helper';

import benefitsSlider from './modules/benefitsSlider';
import servicesSlider from './modules/servicesSlider';


openModal(
    '.header-modal',
    '.overlay',
    '.button>a',
    '.header-modal__close'
);

openModal(
    '.services-modal',
    '.overlay',
    '#call-measurer',
    '.services-modal__close'
);

benefitsSlider();
servicesSlider();

timer(
    '28 november 2021',
    {

        days: '.count1-timer1-block > span',
        hrs: '.count2-timer1-block > span',
        mins: '.count3-timer1-block > span',
        secs: '.count4-timer1-block > span'

    }
);

timer(
    '28 november 2021',
    {

        days: '.count1-timer2-block > span',
        hrs: '.count2-timer2-block > span',
        mins: '.count3-timer2-block > span',
        secs: '.count4-timer2-block > span'

    }
);


// slider('.benefits__item', '.benefits-arrows');
