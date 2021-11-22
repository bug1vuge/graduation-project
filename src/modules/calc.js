const calcModule = (price = 100) => {
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcTypeInput = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');
    const calcWrap = document.querySelector('.calc-container');

    calcTotal.value = 0;

    const countCalc = () => {
        const calcTypeValue = calcType.value;
        const calcTypeInputVal = calcTypeInput.value;
        const calcTypeMaterialVal = calcTypeMaterial.value;

        let totalValue = 0;

        if (calcType.value && calcTypeInput.value) {
            totalValue = Math.ceil(calcTypeValue * calcTypeInputVal * calcTypeMaterialVal * price);
        } else {
            totalValue = 0;
        }

        calcTotal.value = totalValue;
    };

    calcWrap.addEventListener('input', (e) => {

        if (e.target.getAttribute('id') === 'calc-input') {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }

        countCalc();
    });
};

export { calcModule };