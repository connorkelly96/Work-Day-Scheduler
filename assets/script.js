var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//saveBtn
$(document).ready(function() {
$(".saveBtn").on("click", function () {
    var textBlock = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
}
localStorage.setItem(timeBlock, textBlock);

)});