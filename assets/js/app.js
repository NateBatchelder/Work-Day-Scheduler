$(document).ready(function(){
    $("#date-my").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
})

$(document).ready(function () {
    $(".saveBtn").on("click", function (){
        var text =(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        var timeNow = moment().hour(); //uses moment to set a variable of 'timeNow'
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // changes color of background 
            if (blockTime < timeNow) { // first conditional - if the event is in the past
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) { // second conditional - if the event is now
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else { // last conditional - if the event is in the future
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }

//functinality to have events persist on the page when reloading
$("hour0700 .description").val(localStorage.getItem("hour0700"));
$("hour0800 .description").val(localStorage.getItem("hour0800"));
$("hour0900 .description").val(localStorage.getItem("hour0900"));
$("hour1000 .description").val(localStorage.getItem("hour1000"));
$("hour1100 .description").val(localStorage.getItem("hour1100"));
$("hour1200 .description").val(localStorage.getItem("hour1200"));
$("hour1300 .description").val(localStorage.getItem("hour1300"));
$("hour1400 .description").val(localStorage.getItem("hour1400"));
$("hour1500 .description").val(localStorage.getItem("hour1500"));
$("hour1600 .description").val(localStorage.getItem("hour1600"));
$("hour1700 .description").val(localStorage.getItem("hour1700"));
$("hour1800 .description").val(localStorage.getItem("hour1800"));

timeTracker();

})

