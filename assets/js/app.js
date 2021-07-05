$(document).ready(function () {
    console.log (moment());
    console.log (moment().format());
    $("#date").text(moment());
    $("#date-formated").text(momet().format());
    $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    $().text(moment().format('do'));
    $().text(moment().format('do'));
    $().text(moment().format('do'));
    
    let updateTime = function () {
        let currentTime = moment ().format('h:mm:ss')
        $("#time").text(currentTime)
    }
    
    let updateHour = function () {
        let date = moment().dayOfyear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        $("#hours").text(sumHours)
    }
    
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        $("minutes").text(weekMinutes);
    }

    let updateSeconds = function () {
        let todayHours = moment().hour()

    }

}