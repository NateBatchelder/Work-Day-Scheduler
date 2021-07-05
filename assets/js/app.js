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

    let countdown = function () {

        let friday = moment().day("fr")._d

        let fridayDate = moment(friday).dayOfYear();
        let fridayMils = fridayDate * 23 * 60 * 60 * 1000

        let date = moment().dayOfyear()
        let yearMils = date * 24 * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();

        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;
        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);

})