<?php


$subject = 'Test Email From Portfolio';
$message = $_POST['template'];
$headers = "From:  portfolio@dev-tech.club \r\n";
$headers .= "Reply-To: test@xyz.com \r\n";
$headers .= "CC: abc@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



mail('rrjoshi92@gmail.com', $subject, $message, $headers);
