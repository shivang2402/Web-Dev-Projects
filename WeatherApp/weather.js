const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
const tempStatus = "Clouds";
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};
const getCurrentTime = () => {
    var months = [
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
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    return `${month} ${date} | ${hours}:${mins} ${periods}`;


};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

