import { modalModule } from './modules/modal';
import { benefitsSliderModule } from './modules/benefitsSlider';
import { servicesSliderModule } from './modules/servicesSlider';
import { timerModule } from './modules/timer';
import { sendFormModule } from './modules/sendForm';
import { smoothScrollModule } from './modules/smoothScroll';
import { calcModule } from './modules/calc';
// import { showDocsModule } from './modules/showDocs';

//модальное окно - заказать звонок
modalModule({
    modal: '.header-modal',
    overlay: '.overlay',
    openBtn: '.index-button > a',
    closeBtn: '.header-modal__close',
});
modalModule({
    modal: '.header-modal',
    overlay: '.overlay',
    openBtn: '.balcony-button > a',
    closeBtn: '.header-modal__close',
});
modalModule({
    modal: '.header-modal',
    overlay: '.overlay',
    openBtn: '.kuhni-button > a',
    closeBtn: '.header-modal__close',
});
//модальное окно - вызвать замерщика
modalModule({
    modal: '.services-modal',
    overlay: '.overlay',
    openBtn: '#call-measurer',
    closeBtn: '.services-modal__close',
});

//слайдер - выгоды для клиентов
benefitsSliderModule();

//слайдер - услуги
servicesSliderModule();

//таймер
timerModule(
    '28 november 2021',
    {
        days: '.count1-timer1-block > span',
        hrs: '.count2-timer1-block > span',
        mins: '.count3-timer1-block > span',
        secs: '.count4-timer1-block > span'
    }
);
timerModule(
    '28 november 2021',
    {
        days: '.count1-timer2-block > span',
        hrs: '.count2-timer2-block > span',
        mins: '.count3-timer2-block > span',
        secs: '.count4-timer2-block > span'
    }
);

//отправка формы
sendFormModule('form1');
sendFormModule('form2');

//плавный скролл
smoothScrollModule('.smooth-scroll', '#header', '#offer');

//калькулятор стоимости услуг
calcModule();

// showDocsModule();