const newYearDate = "1 Jan 2022";

let countdown = () => {
    const newYear = new Date(newYearDate);
    const currentDate = new Date();

    const seconds = (newYear - currentDate) / 1000;
    const days = Math.ceil(seconds / 3600 / 24);   

    console.log (days);
}

countdown();