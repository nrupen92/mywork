<?php
header ( 'Access-Control-Allow-Origin: *' );
		header ( "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept" );
		header ( 'Access-Control-Allow-Methods: GET, POST, PUT' );
if(!empty($_GET)){
	$params['get'] = $_GET;
}
if(!empty($_POST)){
	$params['post'] = $_POST;
}
if(!empty($_GET['debug'])){
	$params['server'] = $_SERVER;
}
$subject = 'Test Email From Dev Server';
$message = print_r($params, true);
$headers = 'From: testemail@devview.info' . "\r\n" .
		'Reply-To: noreply@devview.info' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
if(!empty($_GET['to'])){
	mail($_GET['to'], $subject, $message, $headers);
	return 'mail sent';
}else{
	return 'error occured.';
}
