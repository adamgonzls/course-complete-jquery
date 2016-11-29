$(document).ready(function() {

	// $("#myForm").submit(function(e) {
	// 	e.preventDefault();
	// 	console.log(e);
	// 	$("#mybox").text("it was submitted");
	// });

	// $("select").change(function(e) {
	// 	console.log(e.target.value);
	// });

	// $("select").on("change", function(e) {
	// 	console.log(e.target.value);
	// });

	$("#somebutton").click(checkme);

	function checkme(e){
		var err = "";
		var mytarget = $(e.currentTarget);

		$("#myForm").find("input, textarea").each(function(e) {
			if ($(this).val() === "") {
				err = err + "<br>Needs " + $(this).attr("id");
			}
			console.log($(this).attr("id"));
			console.log(e + " " + $(this).val());
		});

		if (err.length > 0) {
			$("#output").html(err);
		} else {
			$("#output").html("form okay");
		}
	};


});