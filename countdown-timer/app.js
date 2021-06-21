const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');

const newYearDate = "1 Jan 2022";

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

let countdown = () => {
    const newYear = new Date(newYearDate);
    const currentDate = new Date();

    const totalSeconds = (newYear - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);   
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secsElement.innerHTML = formatTime(seconds);
}

countdown();
setInterval(countdown, 1000);