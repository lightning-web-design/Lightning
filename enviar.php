<?php
require_once 'lib/swift_required.php';

// swift mailer - start
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
  ->setUsername('lightning.web.design@gmail.com')
  ->setPassword('martin12_tati');
$mailer = Swift_Mailer::newInstance($transport);
$message = Swift_Message::newInstance('Wonderful Subject')
  ->setFrom(array('test@testmail.com' => 'NUEVO CLIENTE'))
  ->setTo(array('lightning.web.design@gmail.com' => 'N'))
  ->setSubject('Consulta de nueva Web')
  ->setBody('Cliente: '.$_POST['email'].','."\n".$_POST['mensaje']);
//$attachment = Swift_Attachment::newInstance(file_get_contents('path/logo.png'), 'logo.png');  
//$message->attach($attachment);

$numSent = $mailer->send($message);
// Swift mailer - end

// Mail test si swift no funciona
//
// Standar mail - start
//$email = 'lightning.web.design@gmail.com';
//$subject = 'Consulta de nueva Web';
//$headers = 'From: ' . $_POST['email'] . "\r\n";
//$mensaje = 'Cliente: '.$_POST['email'].','."\r\n".$_POST['mensaje'];
//
//if (mail($email, $subject, $mensaje, $headers)) {
//        echo "Su mensaje fue enviado.";
//}else{
//	echo 'Fallo';
//}
// Standar mail - end

// Redirect a la web que referencio a este file
header("Location:".$_SERVER['HTTP_REFERER']);
die();
?>