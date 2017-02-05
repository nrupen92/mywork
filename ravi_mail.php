<?php


$subject = 'Inquiry From Portfolio';
$message = $_GET['template'];
$headers = "From:  portfolio@dev-tech.club \r\n";
$headers .= "Reply-To: no-reply@dev-tech.club \r\n";
$headers .= "CC: rrjoshi2321992@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



if(mail('rrjoshi92@gmail.com', $subject, $message, $headers)){
	return json_encode({'status':TRUE});
}else{
return json_encode({'status':FALSE});
}
