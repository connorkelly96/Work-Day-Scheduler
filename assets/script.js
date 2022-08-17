var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//saveBtn
$(document).ready(function() {
$(".saveBtn").on("click", function () {
    var textBlock = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
})});
localStorage.setItem(timeBlock, textBlock);


function trackTime() {
    var currentTime = moment().hour();

//timeblock loop
$(".time-block").each(function()   {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < currentTime) {
        $(this).remoceClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
    else if (timeBlock === currentTime) {
        $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present"); 
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})};
