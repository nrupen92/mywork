<?php

error_reporting(0);
header ( 'Access-Control-Allow-Origin: *' );
                header ( "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept" );
                header ( 'Access-Control-Allow-Methods: GET, POST, PUT' );

$subject = 'Inquiry From Portfolio';
$message = $_GET['template'];
$headers = "From:  portfolio@dev-tech.club \r\n";
$headers .= "Reply-To: no-reply@dev-tech.club \r\n";
$headers .= "CC: rrjoshi2321992@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

 $return_data = new stdClass();


if(mail('rrjoshi92@gmail.com', $subject, $message, $headers)){
    $return_data->status = TRUE;
}else{
	$return_data->status = FALSE;
}
echo json_encode($return_data);
