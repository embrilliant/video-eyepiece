$(function() {

	$("#container").on("mousemove", moveFunction);

	function moveFunction(event) {             
	  
	  var xPos = event.pageX;   //left                   
	  var yPos = event.pageY;	//top

	  var widthSpace = ($(window).width() - 640) / 2;

	  var magPosX = xPos - widthSpace;
	  var magPosY = yPos - $("#bg").position().top;

	  var $mag = $("#glass");

	  var magWidth = $mag.outerWidth() / 2;
	  var magHeight= $mag.outerHeight() / 2;

	  var cursorX = magPosX - $mag.outerWidth() / 2;
	  var cursorY = magPosY - $mag.outerHeight() / 2;

	  var layer2X = (magPosX - magWidth) * - 1 - 0;
	  var layer2Y = (magPosY - magHeight) * - 1 - 0;

	  $mag.css({"margin-left": cursorX+"px", 
	  			"margin-top": cursorY+"px", 
	  			"display": "block"
	  			});

	  $("#layer2").css({"margin-left": layer2X+"px", 
	  					"margin-top": layer2Y+"px"
	  					});
	  $("#glass").css({"cursor": "none"});

	  // console.log(xPos, yPos);

	}


	function display() { // for debugging
		console.log(event.target);
	}

});