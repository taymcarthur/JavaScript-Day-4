$(document).ready(function(){
  var content = ""
  

  $('.button').on('click', function() {
    var buttonPressed = $(this).html();
    if(buttonPressed == "=") {
    	console.log(content)
    	$(".answerScreen").html(eval(content))

    } else if (buttonPressed == "C") {
    	$(".answerScreen").html("0");
    	content="0";
    } else {
    	content += buttonPressed
    	$(".answerScreen").html(content)
    }
   })

 })


