const sendFormModule = (formId) => {
    const form = document.getElementById(formId);
    const nameInput = form.querySelector('input[name=fio]');
    const phoneInput = form.querySelector('input[name=phone]');

    const regExpName = /^[а-яА-Яa-zA-z]{2,}/g;
    const regExpPhone = /^[0-9]{7,16}/g;

    const checkingInputValue = () => {
        if (
            nameInput.value !== '' &&
            phoneInput.value !== '' &&
            regExpName.test(nameInput.value) &&
            regExpPhone.test(phoneInput.value)
        ) {
            return true;
        } else {
            return false;
        }
    };

    const validateElem = (el) => {
        if (el.getAttribute('name') === 'fio') {
            el.value = el.value.replace(/[^а-яА-Яa-zA-z]/g, '');
        };

        if (el.getAttribute('name') === 'phone') {
            el.value = el.value.replace(/[^0-9\+]/g, '');
        };
    };


    for (let el of form.elements) {
        if (el.tagName === 'INPUT') {
            el.addEventListener('input', () => {
                validateElem(el);
            });
        };
    };


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

        formData.forEach((val, key) => {
            formBody[key] = val;
        });


        if (checkingInputValue()) {
            sendData(formBody).then();
        }
    });

};

export { sendFormModule };