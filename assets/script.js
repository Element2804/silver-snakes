$( document ).ready(function() {
  var showDay = dayjs().format("ddd, MMM D, YYYY h:mm A");
    $("#currentDay").text(showDay);
    $(".saveBtn").on("click", function() {
      
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      console.log(text);
   
      localStorage.setItem(time, text);
    
    
    });

    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

$("#clearBut").on("click", function() {

localStorage.clear();

});

$(function () {
 
  });