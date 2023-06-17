<?php
// Кому отправляем
$to = 'maxkrasovskyi10@gmail.com';
   
// Тема письма
$subject = 'Tivacleaners website!';
   
// Загружаем только ядро WordPress
define( 'WP_USE_THEMES', false );
require( 'wp-load.php' );


 //Тело письма
 $body = '<h1>Tivacleaners website!</h1>';

 //Пример name="bookUserName"
 $firstName = trim(!empty($_POST['firstName']));
 if($firstName) {
    $body.='<p><strong>First name: </strong> '.$_POST['firstName'].'</p>';
 }

  $lastName = trim(!empty($_POST['lastName']));
 if($lastName) {
    $body.='<p><strong>Last name: </strong> '.$_POST['lastName'].'</p>';
 }

  $userPhone = trim(!empty($_POST['userPhone']));
 if($userPhone) {
    $body.='<p><strong>User phone: </strong> '.$_POST['userPhone'].'</p>';
 }
   $userEmail = trim(!empty($_POST['userEmail']));
 if($userEmail) {
    $body.='<p><strong>User email: </strong> '.$_POST['userEmail'].'</p>';
 }
 
 $userAddres = trim(!empty($_POST['userAddres']));
 if($userAddres){
  $body.='<p><strong>Addres: </strong> '.$_POST['userAddres'].'</p>';
 }

 $aptSuite = trim(!empty($_POST['aptSuite']));
 if($aptSuite){
    $body.='<p><strong>Apt/Suite: </strong> '.$_POST['aptSuite'].'</p>';
 }
 
 $userCity = trim(!empty($_POST['userCity']));
 if($userCity){
     $body.='<p><strong>User City: </strong> '.$_POST['userCity'].'</p>';
 }

  $zipCode = trim(!empty($_POST['zipCode']));
 if($zipCode){
     $body.='<p><strong>Zip Code: </strong> '.$_POST['zipCode'].'</p>';
 }

 $cleaningDate = trim(!empty($_POST['cleaningDate']));
 if($cleaningDate){
     $body.='<p><strong>Cleaning Date: </strong> '.$_POST['cleaningDate'].'</p>';
 }

 $timeInput = trim(!empty($_POST['timeInput']));
 if($timeInput){
     $body.='<p><strong>Time Cleaning: </strong> '.$_POST['timeInput'].'</p>';
 }

 $payment = trim(!empty($_POST['payment']));
 if($payment) {
    $body.='<p><strong>CHOOSE YOUR FREQUENCY:</strong> '.$_POST['payment'].'</p>';
 }

 $totalPrice = trim(!empty($_POST['totalPrice']));
 if($totalPrice) {
    $body.='<p><strong>Total price: </strong>'.$_POST['totalPrice'].'</p>';
 }

 $clientId = trim(!empty($_POST['clientId']));
 if($clientId) {
    $body.='<p><strong>Client ID: </strong>'.$_POST['clientId'].'</p>';
 }

 $message = trim(!empty($_POST['message']));
 if($message){
     $body.='<p><strong>Message: </strong> '.$_POST['message'].'</p>';
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