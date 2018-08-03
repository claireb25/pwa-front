<?php

// header("Access-Control-Allow-Origin: *");

if (isset($_POST['name']) && (isset($_POST['email']) && (isset($_POST['message'])))){
$name = $_POST['name']; 
$firstname = $_POST['firstname'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'From: Portfolio <cla.bourgeois@gmail.com>';

$to = 'claire.bourgeois.cb@gmail.com';
$subject = 'Tu as reçu un nouveau message de '. $email .' depuis ton portfolio';
$content = 'Bonjour Claire, Tu as reçu un email de '. $name. ' ' .$firstname. ' (' .$email .'), voilà ce qu\'il/elle te dit : "'. $message . '". Recontacte le/la rapidement, c\'est sûrement important !';

mail ($to, $subject, $content, $headers);
}
