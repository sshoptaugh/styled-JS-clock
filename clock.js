setInterval(showClock, 1000);
showDate();

function showClock() {
    function addZero(i) {
        if(i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const time = new Date();
    const hour = addZero(time.getHours());
    const minute = addZero(time.getMinutes());
    const second = addZero(time.getSeconds());
    const timeDisplay = document.getElementById("clockDisplay");

    timeDisplay.textContent = hour + ":" + minute + ":" + second;
}

function showDate() {
    const date = new Date();
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const year = date.getFullYear();
    const dateDisplay = document.getElementById("dateDisplay");

    dateDisplay.textContent = day[date.getDay()] + " " + month[date.getMonth()] + " " + date.getDate() + ", " + year;
}