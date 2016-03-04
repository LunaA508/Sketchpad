$(document).ready(function() {
	for (var i = 1; i <= 16; i++) {
        $("<div />", {"class" : "row"}).appendTo(".wrap");
    }
	for (var j = 1; j <= 16; j++) {
        $("<div />", {"class" : "bordered"}).appendTo(".row");
    }

	$(".bordered").hover(function() {
	$(this).removeClass("bordered").addClass("hover");
	});	
	
	$(".clear").click(function() {
		alert("If you are using Firefox, use the 'Enter' key on your keyboard instead of the mouse to press 'OK'.\nUsing the mouse to press 'OK' will leave the mouse on the grid and will inadvertently fill in some tiles.");
	});
	
	$(".footbutton").click(function() {
		alert("IMPORTANT NOTICE TO ALL BROWSERS:\nUse the 'Enter' key on your keyboard instead of the mouse to press 'OK'.\nUsing the mouse to press 'OK' will leave the mouse on the grid and will inadvertently fill in some tiles.");
	});
	
	$(".clear").click(function() {
		var clear = prompt("Are you sure you want to clear the grid? (Yes or No)");
		var clear = clear.toUpperCase();
		
		if(clear === "YES") {
			$(".newgrid").css("background-color", "black");
			$(".newgrid").css("border", "1px solid white");
			$(".hover").css("background-color", "black");
			$(".hover").css("border", "1px solid white");
		} else if(clear === "NO") {
			alert("OK!"); 
		} else {
			alert("Invalid Entry!!!");
		};	
	});
	
	$("#new").click(function() {
		var erase = prompt("Are you sure you want to make a new grid? (Yes or No)");
		var erase = erase.toUpperCase();
		
		if(erase === "YES") {
			$(".hover").removeClass("hover").addClass("bordered");
			var size = prompt("Enter a number, (1-48), to select the amount of squares per side on the grid." );
				if(isNaN(size) || size >48){
					alert("Invalid Entry!!!");
					} else {
						$(".wrap").empty();
						
						var dimension = 962 / size;
						
							for (var i = 1; i <= size; i++) {
								$("<div />", {"class" : "row"}).appendTo(".wrap");
							}
							for (var j = 1; j <= size; j++) {
								$("<div />", {"class" : "newgrid"}).appendTo(".row");
							}
							$(".newgrid").css("height", dimension + "px");
							$(".newgrid").css("width",dimension + "px");
							
							
						$(".newgrid").hover(function() {
						$(this).css("background-color", "white");
						});
						$(".newgrid").hover(function() {
						$(this).css("border", "1px solid black");
						});
					}
		} else if(erase === "NO") {
			alert("OK!"); 
		} else {
			alert("Invalid Entry!!!");
		};			
	});
	
	$(".bordered").hover(function() {
		$(this).css("background-color", "white");
	});
	$(".bordered").hover(function() {
		$(this).css("border", "1px solid black");
	});
		
});

