const calcModule = (price = 100) => {
    const typeSelect = document.querySelector('#calc-type');
    const materialSelect = document.querySelector('#calc-type-material');
    const squareInput = document.querySelector('#calc-input');
    const totalInput = document.querySelector('#calc-total');
    const calcWrap = document.querySelector('.calc-container');

    const countAmount = () => {
        const typeSelectVal = +typeSelect.options[typeSelect.selectedIndex].value;
        const squareInputVal = +squareInput.value;

        let totalVal = 0;
        let materialSelectVal = 1;

        if (materialSelect.options[materialSelect.selectedIndex].value !== '--') {
            materialSelectVal = +materialSelect.options[materialSelect.selectedIndex].value;
        }

        if (typeSelect.value && squareInput.value) {
            totalVal = Math.ceil(price * typeSelectVal * materialSelectVal * squareInputVal);
        } else {
            totalVal = 0;
        }

        totalInput.value = totalVal;

        localStorage.setItem('totalValue', totalInput.value);

        if (typeSelectVal === 0) {
            materialSelect.value = '';
            squareInput.value = '';
        }
    };

    calcWrap.addEventListener('input', (e) => {
        if (e.target.getAttribute('id') === 'calc-input') {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }

        countAmount();
    });
};

export default calcModule;