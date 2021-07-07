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



})