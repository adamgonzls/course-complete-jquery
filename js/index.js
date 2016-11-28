$(document).ready(function() {

	$("#myForm").submit(function(e) {
		e.preventDefault();
		console.log(e);
		$("#mybox").text("it was submitted");
	});

	// $("select").change(function(e) {
	// 	console.log(e.target.value);
	// });

	$("select").on("change", function(e) {
		console.log(e.target.value);
	});

});