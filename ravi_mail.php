<?php


$subject = 'Test Email From Portfolio';
$message = "<html>
<body>
<div>
	<div><label>Name: </label>  dsadjk</div>
	<div><lable>Email: </lable> sdsf@dsad.com</div>
	<div><label>Subject: </label>    dsfsd</div>
    <div><label>Message: </label>    fdsfsdfds</div>
</div>
</body>
</html>";
$headers = "From:  portfolio@dev-tech.club \r\n";
$headers .= "Reply-To: test@xyz.com \r\n";
$headers .= "CC: abc@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



mail('rrjoshi92@gmail.com', $subject, $message, $headers);
