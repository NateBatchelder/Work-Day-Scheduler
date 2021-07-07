var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#date-my").html(todayDate);

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
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else { // last conditional - if the event is in the future
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //functinality to have events persist on the page when reloading
    $("#hour1 .description").val(localStorage.getItem("hour7"));
    $("#hour2 .description").val(localStorage.getItem("hour0800"));
    
    timeTracker();

})

