$(document).ready(function () {
    $("#date-my").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    $(".saveBtn").on("click", function (){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    //functinality to have events persist on the page when reloading
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    

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
    timeTracker();
})

