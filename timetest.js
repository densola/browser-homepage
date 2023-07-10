setInterval(()=>{
    var date = new Date();

    /* Date */
    const html_date = document.querySelector("#date");
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();
    switch (date.getMonth()) {
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="June";
            break;
        case 6:
            month="July";
            break;
        case 7:
            month="August";
            break;
        case 8:
            month="September";
            break;
        case 9:
            month="October";
            break;
        case 10:
            month="November";
            break;
        case 11:
            month="December";
            break;
    }
    html_date.textContent = day + " " + month + " " + year;

    /* Day */
    const html_day = document.querySelector("#day");
    switch (date.getDay()) {
        case 0:
            day_name="Sunday";
            break;
        case 1:
            day_name="Monday";
            break;
        case 2:
            day_name = "Tuesday";
            break;
        case 3:
            day_name = "Wednesday";
            break;
        case 4:
            day_name = "Thursday";
            break;
        case 5:
            day_name = "Friday";
            break;
        case 6:
            day_name = "Saturday";
    }
    html_day.textContent=day_name;

    var hours = (date.getHours());
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem = "AM";

    /* Greeting */
    const html_greeting = document.querySelector("#greeting");
    if (hours>=1 && hours<=5) {
        html_greeting.textContent = "Sleep well :)"
    }
    if (hours>=5 && hours<=12) {
        html_greeting.textContent = "Good morning."
    }
    if (hours>=12 && hours<=19) {
        html_greeting.textContent = "Good afternoon."
    }
    if (hours>=19 && hours<=24) {
        html_greeting.textContent = "Good night."
    }

    /* Clock */
    const html_time = document.querySelector("#time");
    if(hours>12){
        hours=hours-12;
        meridiem="PM"
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    html_time.textContent=hours+":"+minutes+":"+seconds+" "+meridiem;
    
});
