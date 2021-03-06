const sendFormModule = (formId) => {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll('input');

    const totalVal = localStorage.getItem('totalValue')

    const regExpName = /^[а-яА-ЯёЁa-zA-Z]{2,}$/g;
    const regExpPhone = /^\+\d{7,16}/g;

    let isFilled = false;
    let isNameValid = false;
    let isPhoneValid = false;

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json());
    };


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formBody = {};
        let inputsVal = [];


        isFilled = false;
        isNameValid = false;
        isPhoneValid = false;

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        formBody.countVal = totalVal;

        formInputs.forEach(el => {

            if (el.getAttribute('type') !== 'hidden') {
                if (el.value) {
                    inputsVal.push(el.value);
                };
            };

            if (el.name === 'fio') {
                if (regExpName.test(el.value)) {
                    isNameValid = true;
                };
            };

            if (el.name === 'phone') {
                if (regExpPhone.test(el.value)) {
                    isPhoneValid = true;
                };
            };

        });

        if (inputsVal.length > 0 && inputsVal.length <= 2) {
            isFilled = true;
        }

        if (isFilled && isNameValid && isPhoneValid) {
            sendData(formBody);
            alert('Данные успешно отправлены');

            form.reset();

            console.log(isFilled, isNameValid, isPhoneValid);

        } else {
            alert('Проверьте правильность заполнения полей');
        };

        console.log(isFilled, isNameValid, isPhoneValid);
    });
};

export default sendFormModule;