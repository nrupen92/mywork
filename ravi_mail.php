<?php


$subject = 'Test Email From Portfolio';
$message = print_r($_POST, true);
$headers = 'From: portfolio@dev-tech.club' . "\r\n" .
			'X-Mailer: PHP/' . phpversion()."Content-Type: text/html; charset=ISO-8859-1\r\n";
mail('rrjoshi92@gmail.com', $subject, $message, $headers);
