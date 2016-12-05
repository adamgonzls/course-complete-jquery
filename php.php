<?php
	if (isset($_GET['name'])) {
		$name= "GET " . $_GET['name'];
	} else if (isset($_POST['name'])) {
		$name= "POST " . $_POST['name'];
	} else {
		$name= "Just default data";
	}
	echo $name;
?>