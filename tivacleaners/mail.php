<?php
// Кому отправляем
$to = 'info@tivacleaners.com';

// $to = 'dmytroivanovichn@gmail.com';

// Тема письма
$subject = 'Tivacleaners website!';
   
// Загружаем только ядро WordPress
define( 'WP_USE_THEMES', false );
require( 'wp-load.php' );


 //Тело письма
 $body = '<h1>Tivacleaners website!</h1>';
 $body = '<h2>The client wants to be called back!</h2>';

 //Пример name="popupUserName"
 $popupUserName = trim(!empty($_POST['popupUserName']));
 if($popupUserName) {
    $body.='<p><strong>User Name:</strong> '.$_POST['popupUserName'].'</p>';
 }
 
 
 $popupEmail = trim(!empty($_POST['popupEmail']));
 if($popupEmail){
  $body.='<p><strong>E-mail:</strong> '.$_POST['popupEmail'].'</p>';
 }

 $popupPhone = trim(!empty($_POST['popupPhone']));
 if($popupPhone){
    $body.='<p><strong>Phone:</strong> '.$_POST['popupPhone'].'</p>';
 }
 
 $popupMessage = trim(!empty($_POST['popupMessage']));
 if($popupMessage){
     $body.='<p><strong>Message:</strong> '.$_POST['popupMessage'].'</p>';
 }


   
// Отправляем письмо
$sent_message = wp_mail( $to, $subject, $body );

$message = '';

if ( $sent_message ) {
    // Если сообщение успешно отправилось
    // echo 'Всё чётко настроил, бро!';
    $message = 'Data sent!';
} else {
    // Ошибки при отправке
    // echo 'Где-то ты лоханулся знатно!';
    $message = 'Error';
}

//Ответ
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>