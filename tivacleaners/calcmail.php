<?php
// Кому отправляем
// $to = ['dmytroivanovichn@gmail.com', 'maxkrasovskyi10@gmail.com', 'info@tivacleaners.com'];
$to = 'info@tivacleaners.com';
// $to = 'dmytroivanovichn@gmail.com';

   
// Тема письма
$subject = 'Tivacleaners website!';
   
// Загружаем только ядро WordPress
define( 'WP_USE_THEMES', false );
require( 'wp-load.php' );


 //Тело письма
 $body = '<h1>Tivacleaners website!</h1>';

 //-------------------------------------------//
$houseClean = trim(!empty($_POST['houseClean']));
if($houseClean) {
   $body.= '<hr>';
   $body.='<h2>'.$_POST['houseClean'].'</h2>';
}

$houseSize = trim(!empty($_POST['houseSize']));
if($houseSize) {
   $body.='<p><strong>House size: </strong>'.$_POST['houseSize'].'</p>';
}

$numberBeadroom =  trim(!empty($_POST['numberBeadroom']));
if($numberBeadroom) {
   $body.='<p><strong>Number of Bedroom: </strong>'.$_POST['numberBeadroom'].'</p>';
}

$numberBathrooms =  trim(!empty($_POST['numberBathrooms']));
if($numberBathrooms) {
   $body.='<p><strong>Number of Bathrooms: </strong>'.$_POST['numberBathrooms'].'</p>';
}

$numberReception =  trim(!empty($_POST['numberReception']));
if($numberReception) {
   $body.='<p><strong>Number of Receptions: </strong>'.$_POST['numberReception'].'</p>';
}

$extras =  trim(!empty($_POST['extras']));
if($extras) {
   $body.='<p><strong>Extras: </strong>'.$_POST['extras'].'</p>';
}

$cleaningLevel =  trim(!empty($_POST['cleaningLevel']));
if($cleaningLevel) {
   $body.='<p><strong>Cleaning level: </strong>'.$_POST['cleaningLevel'].'</p>';
}

//-------------------------------------------//

$cleaningWindow = trim(!empty($_POST['cleaningWindow']));
if($cleaningWindow) {
   $body.='<h2>'.$_POST['cleaningWindow'].'</h2>';
   $body.= '<p><strong>Options: </strong></p>';
}

$outsideWindowsClean =  trim(!empty($_POST['outsideWindowsClean']));
if($outsideWindowsClean) {
   $body.='<p>'.$_POST['outsideWindowsClean'].'</p>';
}

$insideWindowsClean =  trim(!empty($_POST['insideWindowsClean']));
if($insideWindowsClean) {
   $body.='<p>'.$_POST['insideWindowsClean'].'</p>';
}

$numberWindow =  trim(!empty($_POST['numberWindow']));
if($numberWindow) {
   $body.='<p><strong>Number of windows: </strong>'.$_POST['numberWindow'].'</p>';
}
//-------------------------------------------//

// $lawnMowing = trim(!empty($_POST['lawnMowing']));
// if($lawnMowing) {
//    $body.='<h2>'.$_POST['lawnMowing'].'</h2>';
// }

$lawnArea =  trim(!empty($_POST['lawnArea']));
if($lawnArea) {
   $body.='<h2>Lawn mowing</h2>';
   $body.='<p><strong>Lawn area: </strong>'.$_POST['lawnArea'].'</p>';
}

$gardenArea =  trim(!empty($_POST['gardenArea']));
if($lawnArea) {
   $body.='<h2>Gardening</h2>';
   $body.='<p><strong>Garden area: </strong>'.$_POST['gardenArea'].'</p>';
}

//-------------------------------------------//

$pipeCleaning = trim(!empty($_POST['pipeCleaning']));
if($pipeCleaning) {
   $body.='<h2>'.$_POST['pipeCleaning'].'</h2>';
}

$pipeCleaningNumber =  trim(!empty($_POST['pipeCleaningNumber']));
if($pipeCleaningNumber) {
   $body.='<p><strong>Number of pipe: </strong>'.$_POST['pipeCleaningNumber'].'</p>';
}

//-------------------------------------------//
$afterRenovationClean = trim(!empty($_POST['afterRenovationClean']));
if($afterRenovationClean) {
   $body.= '<hr>';
   $body.='<h2>'.$_POST['afterRenovationClean'].'</h2>';
}

$renovationHouseSize =  trim(!empty($_POST['renovationHouseSize']));
if($renovationHouseSize) {
   $body.='<p><strong>House size: </strong>'.$_POST['renovationHouseSize'].'</p>';
}


$renovationNumberBathrooms =  trim(!empty($_POST['renovationNumberBathrooms']));
if($renovationNumberBathrooms) {
   $body.='<p><strong>Number of Bathrooms: </strong>'.$_POST['renovationNumberBathrooms'].'</p>';
}

$renovationExtras =  trim(!empty($_POST['renovationExtras']));
if($renovationExtras) {
   $body.='<p><strong>Extras: </strong>'.$_POST['renovationExtras'].'</p>';
}

$renovationNumberWindows =  trim(!empty($_POST['renovationNumberWindows']));
if($renovationNumberWindows) {
   $body.='<p><strong>Number of windows: </strong>'.$_POST['renovationNumberWindows'].'</p>';
}

$renovationWindowsInside =  trim(!empty($_POST['renovationWindowsInside']));
if($renovationWindowsInside && $renovationNumberWindows) {
   $body.='<p>'.$_POST['renovationWindowsInside'].'</p>';
}

$renovationWindowsOutside =  trim(!empty($_POST['renovationWindowsOutside']));
if($renovationWindowsOutside && $renovationNumberWindows) {
   $body.='<p>'.$_POST['renovationWindowsOutside'].'</p>';
}

$renovationCleaningLevel =  trim(!empty($_POST['renovationCleaningLevel']));
if($renovationCleaningLevel) {
   $body.='<p><strong>Cleaning level: </strong>'.$_POST['renovationCleaningLevel'].'</p>';
}

//-------------------------------------------//

//================================================================================================================//
$body.= '<hr>';

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

 //================================================================================================================//
 $body.= '<hr>';

 $paymentMethod = trim(!empty($_POST['payment_method']));
 if($paymentMethod) {
   $body.='<h2><strong>Payment method: </strong> '.$_POST['payment_method'].'</h2>';
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

 $body.= '<hr>';

 $message = trim(!empty($_POST['message']));
 if($message){
     $body.='<p><strong>Message: </strong> '.$_POST['message'].'</p>';
 }

//================================================================================================================//

   
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