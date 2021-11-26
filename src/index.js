import modalModule from "./modules/modal";
import benefitsSlider from './modules/benefitsSlider';
import servicesSlider from './modules/servicesSlider';
import timer from './modules/timer';
import sendForm from './modules/sendForm';
import showDocs from './modules/showDocs';
import smoothScroll from './modules/smoothScroll';
import calc from './modules/calc';

modalModule();
benefitsSlider();
servicesSlider();
timer();
sendForm();
showDocs();
smoothScroll();

try {
    calc();
} catch (error) { }


