function getDay() {
    const htmlDay = document.querySelector("#day");

    let date = new Date();
    let dayName = "";

    switch (date.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
    }

    htmlDay.textContent = dayName;
}

function showTime() {
    const htmlTime = document.querySelector("#clock");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = "AM";

    if (hours == 12) {
        meridiem = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    htmlTime.textContent =
        hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

function getDate() {
    const htmlDate = document.querySelector("#date");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    htmlDate.textContent = year + " " + month + " " + day;
}

function greet() {
    const htmlGreeting = document.querySelector("#greeting");

    let date = new Date();
    let hours = date.getHours();

    if (hours >= 1 && hours <= 5) {
        htmlGreeting.textContent = "Shouldn't you be asleep?";
    }
    if (hours >= 5 && hours <= 12) {
        htmlGreeting.textContent = "Good morning!";
    }
    if (hours >= 12 && hours <= 19) {
        htmlGreeting.textContent = "Good afternoon.";
    }
    if (hours >= 19 && hours <= 24) {
        htmlGreeting.textContent = "Good night...";
    }
}

setInterval(() => {
    getDay();
    showTime();
    getDate();
    greet();
});
