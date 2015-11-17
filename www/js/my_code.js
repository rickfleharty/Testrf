$(document).ready(function() {
	
	
	var imageName = ["img/bulbON.png", "img/bulbOFF.png"];
    var indexNum = 0;
	
  $("#testbutton").click(function() {
	$("p1").text("Connected"); 
	$("strong").text("on");
    $("strong,p1,h1").css("color","blue");
	

	$("#picture").fadeOut(50, function() {
       $("#picture").attr("src", imageName[indexNum]);
	   //$("#picture").attr("src", imageName[1]);
	  
	  
      indexNum++;	
      if (indexNum > 0) {indexNum = 0;}
      $("#picture").fadeIn(50);
	});
	
	//$("strong").toggle(2000);
    //$("strong").css("background-color","white");	
  });
});