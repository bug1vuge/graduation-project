const sendFormModule = () => {

    const sendFormFunc = (formId) => {
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

            if (inputsVal.length === 2) {
                isFilled = true;
            }

            if (isFilled && isNameValid && isPhoneValid) {
                sendData(formBody).then();
                form.reset();

                alert('Данные отправлены');
            } else {
                alert('Проверьте правильность заполнения полей')
            };
        });
    };


    sendFormFunc('form1');
    sendFormFunc('form2');
    sendFormFunc('order-call');
    sendFormFunc('application-form');
};

export default sendFormModule;