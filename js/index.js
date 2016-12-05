$(document).ready(function() {

	$(".btn").click(function(e){
		if($(this).hasClass("btn-danger")) {
			//$("#output").html("Clicked #1");
			$("#output").load("php.php");
		}
		console.log($(this));
	})

});