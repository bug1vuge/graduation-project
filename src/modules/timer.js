const timerModule = (deadline) => {

    const timerDays = document.querySelector('.count_1 > span');
    const timerHours = document.querySelector('.count_2 > span');
    const timerMinutes = document.querySelector('.count_3 > span');
    const timerSeconds = document.querySelector('.count_4 > span');

    let isTimerUpdate;

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    };

    const addZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num
        }
    };

    const updateTimer = () => {
        let timerData = getTimeRemaining();

        timerDays.textContent = addZero(timerData.days);
        timerHours.textContent = addZero(timerData.hours);
        timerMinutes.textContent = addZero(timerData.minutes);
        timerSeconds.textContent = addZero(timerData.seconds);

        if (timerData.timeRemaining < 0) {
            clearInterval(isTimerUpdate);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };

    isTimerUpdate = setInterval(updateTimer, 1000);

}

export default timerModule;