<?php
// Кому отправляем
$to = 'dmytroivanovichn@gmail.com';
   
// Тема письма
$subject = 'Tivacleaners website!';
   
// Загружаем только ядро WordPress
define( 'WP_USE_THEMES', false );
require( 'wp-load.php' );


 //Тело письма
 $body = '<h1>Tivacleaners website!</h1>';

 //Пример name="bookUserName"
 $bookUserName = trim(!empty($_POST['bookUserName']));
 if($bookUserName) {
    $body.='<p><strong>User Name:</strong> '.$_POST['bookUserName'].'</p>';
 }
 
 
 $bookEmail = trim(!empty($_POST['bookEmail']));
 if($bookEmail){
  $body.='<p><strong>E-mail:</strong> '.$_POST['bookEmail'].'</p>';
 }

 $bookPhone = trim(!empty($_POST['bookPhone']));
 if($bookPhone){
    $body.='<p><strong>Phone:</strong> '.$_POST['bookPhone'].'</p>';
 }
 
 $bookMessage = trim(!empty($_POST['bookMessage']));
 if($bookMessage){
     $body.='<p><strong>Message:</strong> '.$_POST['bookMessage'].'</p>';
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