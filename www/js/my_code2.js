$(document).ready(function() {
	
	var imageName = ["img/bulbON.png", "img/bulbOFF.png"];
    var indexNum = 1;
	
	
  $("#testbutton2").click(function() {
	//$("#testbutton2").css("background-color","transparent"); 
	//$("p1").css("color": "yellow");   
    $("strong").text("off");	
    $("strong,p1,h1").css({
      "text-align": "center",
      "color": "black"});
	
	
	$("#picture").fadeOut(50, function() {
      $("#picture").attr("src", imageName[indexNum]);
	  //$("#picture").attr("src", imageName[0]);
      indexNum++;	
      if (indexNum > 1) {indexNum = 1;}
      $("#picture").fadeIn(50);
	});
	
	
	
	
	
	
    
  });
});