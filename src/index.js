import modalModule from "./modules/modal";
import benefitsSlider from './modules/benefitsSlider';
import servicesSlider from './modules/servicesSlider';
import timer from './modules/timer';
import sendForm from './modules/sendForm';
import showDocs from './modules/showDocs';
import smoothScroll from './modules/smoothScroll';
import calc from './modules/calc';

modalModule('.header-modal', '.order-call-btn');
modalModule('.services-modal', '.call-measurer-btn');

benefitsSlider();
servicesSlider();

timer(
    '31 december 2021',
    '.count1-timer1-el > span',
    '.count2-timer1-el > span',
    '.count3-timer1-el > span',
    '.count4-timer1-el > span',
);
timer(
    '31 december 2021',
    '.count1-timer2-el > span',
    '.count2-timer2-el > span',
    '.count3-timer2-el > span',
    '.count4-timer2-el > span',
);

// sendForm('form1');
// sendForm('form2');
// sendForm('order-call');
// sendForm('application-form');


showDocs();
smoothScroll();

try {
    calc();
} catch (error) { }


