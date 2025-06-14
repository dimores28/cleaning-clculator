<?php
if (!defined('ABSPATH')) {
    exit; // Захист від прямого доступу
}

// Функція для отримання email адрес з ACF полів або WordPress options
function get_notification_emails() {
    $emails = [];
    
    // Спочатку пробуємо отримати з WordPress options (Варіант 2)
    $email1 = get_option('notification_email_1');
    $email2 = get_option('notification_email_2');
    $email3 = get_option('notification_email_3');
    
    // Якщо options пусті, пробуємо отримати з ACF полів головної сторінки (Варіант 1)
    if (empty($email1) && function_exists('get_field')) {
        $front_page_id = get_option('page_on_front');
        if ($front_page_id) {
            $email1 = get_field('notification_email_1', $front_page_id);
            $email2 = get_field('notification_email_2', $front_page_id);
            $email3 = get_field('notification_email_3', $front_page_id);
        }
    }
    
    // Додаємо валідні email адреси
    if ($email1 && is_email($email1)) {
        $emails[] = $email1;
    }
    if ($email2 && is_email($email2)) {
        $emails[] = $email2;
    }
    if ($email3 && is_email($email3)) {
        $emails[] = $email3;
    }
    
    // Якщо жодного email не знайдено, використовуємо стандартні email адреси
    if (empty($emails)) {
        $emails = ['sales@tivacleaners.com', 'dmytroivanovichn@gmail.com', 'komal.komsoft@gmail.com'];
    }
    
    return $emails;
}

// Кому відправляємо
$to = get_notification_emails();

// Тема листа
$subject = 'Tivacleaners website!';

// Тіло листа
$body = '<h1>Tivacleaners website!</h1>';

//-------------------------------------------//
$houseClean = !empty($_POST['houseClean']) ? sanitize_text_field($_POST['houseClean']) : '';
if($houseClean) {
   $body .= '<hr>';
   $body .= '<h2>' . esc_html($houseClean) . '</h2>';
}

$houseSize = !empty($_POST['houseSize']) ? sanitize_text_field($_POST['houseSize']) : '';
if($houseSize) {
   $body .= '<p><strong>House size: </strong>' . esc_html($houseSize) . '</p>';
}

$numberBeadroom =  !empty($_POST['numberBeadroom']) ? sanitize_text_field($_POST['numberBeadroom']) : '';
if($numberBeadroom) {
   $body .= '<p><strong>Number of Bedroom: </strong>' . esc_html($numberBeadroom) . '</p>';
}

$numberBathrooms =  !empty($_POST['numberBathrooms']) ? sanitize_text_field($_POST['numberBathrooms']) : '';
if($numberBathrooms) {
   $body .= '<p><strong>Number of Bathrooms: </strong>' . esc_html($numberBathrooms) . '</p>';
}

$numberReception =  !empty($_POST['numberReception']) ? sanitize_text_field($_POST['numberReception']) : '';
if($numberReception) {
   $body .= '<p><strong>Number of Receptions: </strong>' . esc_html($numberReception) . '</p>';
}

$extras =  !empty($_POST['extras']) ? sanitize_text_field($_POST['extras']) : '';
if($extras) {
   $body .= '<p><strong>Extras: </strong>' . esc_html($extras) . '</p>';
}

$cleaningLevel =  !empty($_POST['cleaningLevel']) ? sanitize_text_field($_POST['cleaningLevel']) : '';
if($cleaningLevel) {
   $body .= '<p><strong>Cleaning level: </strong>' . esc_html($cleaningLevel) . '</p>';
}

//-------------------------------------------//

$numberWindow =  !empty($_POST['numberWindow']) ? sanitize_text_field($_POST['numberWindow']) : '';
if($numberWindow) {

   $cleaningWindow = !empty($_POST['cleaningWindow']) ? sanitize_text_field($_POST['cleaningWindow']) : '';
   if($cleaningWindow) {
      $body .= '<h2>' . esc_html($cleaningWindow) . '</h2>';
      $body .= '<p><strong>Options: </strong></p>';
   }
   
   $outsideWindowsClean =  !empty($_POST['outsideWindowsClean']) ? sanitize_text_field($_POST['outsideWindowsClean']) : '';
   if($outsideWindowsClean) {
      $body .= '<p>' . esc_html($outsideWindowsClean) . '</p>';
   }
   
   $insideWindowsClean =  !empty($_POST['insideWindowsClean']) ? sanitize_text_field($_POST['insideWindowsClean']) : '';
   if($insideWindowsClean) {
      $body .= '<p>' . esc_html($insideWindowsClean) . '</p>';
   }


   $body .= '<p><strong>Number of windows: </strong>' . esc_html($numberWindow) . '</p>';
}

//-------------------------------------------//

// $lawnMowing = !empty($_POST['lawnMowing']) ? sanitize_text_field($_POST['lawnMowing']) : '';
// if($lawnMowing) {
//    $body .= '<h2>' . esc_html($lawnMowing) . '</h2>';
// }

$lawnArea =  !empty($_POST['lawnArea']) ? sanitize_text_field($_POST['lawnArea']) : '';
if($lawnArea) {
   $body .= '<h2>Lawn mowing</h2>';
   $body .= '<p><strong>Lawn area: </strong>' . esc_html($lawnArea) . '</p>';
}

$gardenArea =  !empty($_POST['gardenArea']) ? sanitize_text_field($_POST['gardenArea']) : '';
if($lawnArea) {
   $body .= '<h2>Gardening</h2>';
   $body .= '<p><strong>Garden area: </strong>' . esc_html($gardenArea) . '</p>';
}

//-------------------------------------------//

$pipeCleaning = !empty($_POST['pipeCleaning']) ? sanitize_text_field($_POST['pipeCleaning']) : '';
if($pipeCleaning) {
   $body .= '<h2>' . esc_html($pipeCleaning) . '</h2>';
}

$pipeCleaningNumber =  !empty($_POST['pipeCleaningNumber']) ? sanitize_text_field($_POST['pipeCleaningNumber']) : '';
if($pipeCleaningNumber) {
   $body .= '<p><strong>Number of pipe: </strong>' . esc_html($pipeCleaningNumber) . '</p>';
}

//-------------------------------------------//
$afterRenovationClean = !empty($_POST['afterRenovationClean']) ? sanitize_text_field($_POST['afterRenovationClean']) : '';
if($afterRenovationClean) {
   $body .= '<hr>';
   $body .= '<h2>' . esc_html($afterRenovationClean) . '</h2>';
}

$renovationHouseSize =  !empty($_POST['renovationHouseSize']) ? sanitize_text_field($_POST['renovationHouseSize']) : '';
if($renovationHouseSize) {
   $body .= '<p><strong>House size: </strong>' . esc_html($renovationHouseSize) . '</p>';
}


$renovationNumberBathrooms =  !empty($_POST['renovationNumberBathrooms']) ? sanitize_text_field($_POST['renovationNumberBathrooms']) : '';
if($renovationNumberBathrooms) {
   $body .= '<p><strong>Number of Bathrooms: </strong>' . esc_html($renovationNumberBathrooms) . '</p>';
}

$renovationNumberBedrooms =  !empty($_POST['renovationNumberBedrooms']) ? sanitize_text_field($_POST['renovationNumberBedrooms']) : '';
if($renovationNumberBedrooms) {
   $body .= '<p><strong>Number of Bedrooms: </strong>' . esc_html($renovationNumberBedrooms) . '</p>';
}

$renovationNumberReception =  !empty($_POST['renovationNumberReception']) ? sanitize_text_field($_POST['renovationNumberReception']) : '';
if($renovationNumberReception) {
   $body .= '<p><strong>Number of Reception: </strong>' . esc_html($renovationNumberReception) . '</p>';
}

$renovationExtras =  !empty($_POST['renovationExtras']) ? sanitize_text_field($_POST['renovationExtras']) : '';
if($renovationExtras) {
   $body .= '<p><strong>Extras: </strong>' . esc_html($renovationExtras) . '</p>';
}

$renovationNumberWindows =  !empty($_POST['renovationNumberWindows']) ? sanitize_text_field($_POST['renovationNumberWindows']) : '';
if($renovationNumberWindows) {
   $body .= '<p><strong>Number of windows: </strong>' . esc_html($renovationNumberWindows) . '</p>';
}

$renovationWindowsInside =  !empty($_POST['renovationWindowsInside']) ? sanitize_text_field($_POST['renovationWindowsInside']) : '';
if($renovationWindowsInside && $renovationNumberWindows) {
   $body .= '<p>' . esc_html($renovationWindowsInside) . '</p>';
}

$renovationWindowsOutside =  !empty($_POST['renovationWindowsOutside']) ? sanitize_text_field($_POST['renovationWindowsOutside']) : '';
if($renovationWindowsOutside && $renovationNumberWindows) {
   $body .= '<p>' . esc_html($renovationWindowsOutside) . '</p>';
}

$renovationCleaningLevel =  !empty($_POST['renovationCleaningLevel']) ? sanitize_text_field($_POST['renovationCleaningLevel']) : '';
if($renovationCleaningLevel) {
   $body .= '<p><strong>Cleaning level: </strong>' . esc_html($renovationCleaningLevel) . '</p>';
}

//-------------------------------------------//
$snowRemovalArea =  !empty($_POST['snowRemovalArea']) ? sanitize_text_field($_POST['snowRemovalArea']) : '';
if($snowRemovalArea) {
   $body .= '<hr>';
   $body .= '<h2>Snow removal</h2>';
   $body .= '<p><strong>Snow removal area: </strong>' . esc_html($snowRemovalArea) . '</p>';
}
//-------------------------------------------//
$snowCarpetArea =  !empty($_POST['snowCarpetArea']) ? sanitize_text_field($_POST['snowCarpetArea']) : '';
if($snowCarpetArea) {
   $body .= '<hr>';
   $body .= '<h2>Carpet cleaning</h2>';
   $body .= '<p><strong>Carpet cleaning area: </strong>' . esc_html($snowCarpetArea) . '</p>';
}

$snowCarpetLevel =  !empty($_POST['snowCarpetLevel']) ? sanitize_text_field($_POST['snowCarpetLevel']) : '';
if($snowCarpetLevel) {
   $body .= '<p><strong>Carpet soiling level: </strong>' . esc_html($snowCarpetLevel) . '</p>';
}
//-------------------------------------------//

//================================================================================================================//
$body .= '<hr>';

$firstName = !empty($_POST['firstName']) ? sanitize_text_field($_POST['firstName']) : '';
if($firstName) {
   $body .= '<p><strong>First name: </strong> ' . esc_html($firstName) . '</p>';
}

$lastName = !empty($_POST['lastName']) ? sanitize_text_field($_POST['lastName']) : '';
if($lastName) {
   $body .= '<p><strong>Last name: </strong> ' . esc_html($lastName) . '</p>';
}

$userPhone = !empty($_POST['userPhone']) ? sanitize_text_field($_POST['userPhone']) : '';
if($userPhone) {
   $body .= '<p><strong>User phone: </strong> ' . esc_html($userPhone) . '</p>';
}
$userEmail = !empty($_POST['userEmail']) ? sanitize_email($_POST['userEmail']) : '';
if($userEmail) {
   $body .= '<p><strong>User email: </strong> ' . esc_html($userEmail) . '</p>';
}

$userAddres = !empty($_POST['userAddres']) ? sanitize_text_field($_POST['userAddres']) : '';
if($userAddres){
   $body .= '<p><strong>Addres: </strong> ' . esc_html($userAddres) . '</p>';
}

$aptSuite = !empty($_POST['aptSuite']) ? sanitize_text_field($_POST['aptSuite']) : '';
if($aptSuite){
   $body .= '<p><strong>Apt/Suite: </strong> ' . esc_html($aptSuite) . '</p>';
}

$userCity = !empty($_POST['userCity']) ? sanitize_text_field($_POST['userCity']) : '';
if($userCity){
   $body .= '<p><strong>User City: </strong> ' . esc_html($userCity) . '</p>';
}

$zipCode = !empty($_POST['zipCode']) ? sanitize_text_field($_POST['zipCode']) : '';
if($zipCode){
   $body .= '<p><strong>Zip Code: </strong> ' . esc_html($zipCode) . '</p>';
}

$cleaningDate = !empty($_POST['cleaningDate']) ? sanitize_text_field($_POST['cleaningDate']) : '';
if($cleaningDate){
   $body .= '<p><strong>Cleaning Date: </strong> ' . esc_html($cleaningDate) . '</p>';
}

$timeInput = !empty($_POST['timeInput']) ? sanitize_text_field($_POST['timeInput']) : '';
if($timeInput){
   $body .= '<p><strong>Time Cleaning: </strong> ' . esc_html($timeInput) . '</p>';
}

//================================================================================================================//
$body .= '<hr>';

$paymentMethod = !empty($_POST['payment_method']) ? sanitize_text_field($_POST['payment_method']) : '';
if($paymentMethod) {
   if((int) $paymentMethod == 1) {
      $body .= '<h2><strong>Payment method: </strong> Payment upon receipt </h2>';
   } else if((int) $paymentMethod == 2) {
      $body .= '<h2><strong>Payment method: </strong> Payment on site </h2>';
   }
   
}

$payment = !empty($_POST['payment']) ? sanitize_text_field($_POST['payment']) : '';
if($payment) {
   $body .= '<p><strong>CHOOSE YOUR FREQUENCY:</strong> ' . esc_html($payment) . '</p>';
}

$totalPrice = !empty($_POST['totalPrice']) ? sanitize_text_field($_POST['totalPrice']) : '';
if($totalPrice) {
   $body .= '<p><strong>Total price: </strong>' . esc_html($totalPrice) . '</p>';
}

$clientId = !empty($_POST['clientId']) ? sanitize_text_field($_POST['clientId']) : '';
if($clientId) {
   $body .= '<p><strong>Client ID: </strong>' . esc_html($clientId) . '</p>';
}

$body .= '<hr>';

$message = !empty($_POST['message']) ? sanitize_text_field($_POST['message']) : '';
if($message){
   $body .= '<p><strong>Message: </strong> ' . esc_html($message) . '</p>';
}

//================================================================================================================//

   
// Відправляємо лист
$sent_message = wp_mail($to, $subject, $body);

$message = '';

if ($sent_message) {
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


if ($sent_message) {

   $accessToken = getAuthToken();

   if($accessToken) {

   $accessTokenEncode = json_decode($accessToken);
   // var_dump($accessTokenEncode);

   // Ініціалізуємо новий запит
   $ch = curl_init();

   // Встановлюємо URL, до якого ви хочете зробити POST-запит
   $url = "https://api.sendpulse.com/smtp/emails";

   // Налаштовуємо параметри запиту
   curl_setopt($ch, CURLOPT_URL, $url);
   curl_setopt($ch, CURLOPT_POST, 1);

   // Додаємо параметр авторизації до заголовку
   $authorization_header = 'Authorization: Bearer ';
   $authorization_header .= $accessTokenEncode->access_token;


   // Встановлюємо параметр для отримання відповіді від сервера
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', $authorization_header));

   $name = "Max";

   curl_setopt($ch, CURLOPT_POSTFIELDS, '{
      "email": {
         "subject": "TIVA cleaners inc",
         "template": {
         "id": 58922,
         "variables": {
            "name": "' . $firstName . '",
            "code": "58922",
            "current_year": "2024",
            "ec_es_email_sender_company": "TIVA cleaners inc",
            "ec_es_email_sender_address": "",
            "total_price": "' . $totalPrice . '",
            "cleaning_date": "' . $cleaningDate . '",
            "cleaning_time": "' . $timeInput . '"
         }
         },
         "from": {
         "name": "Tivacleaners",
         "email": "info@tivacleaners.com"
         },
         "to": [
         {
            "email": "' . $userEmail . '",
            "name": "' . $firstName . '"
         }
         ]
      }
   }');

   // Виконуємо запит
   $response = curl_exec($ch);

   // Перевіряємо наявність помилок
   if(curl_errno($ch)){
         echo 'Помилка curl: ' . curl_error($ch);
   }

   // Закриваємо з'єднання
   curl_close($ch);
   return;

   // Обробляємо отриману відповідь
   // echo $response;

   }
} 


function getAuthToken() {
   // Ініціалізуємо новий запит
   $ch = curl_init();

   // Встановлюємо URL, до якого ви хочете зробити POST-запит
   $url = "https://api.sendpulse.com/oauth/access_token";

   // Налаштовуємо параметри запиту
   curl_setopt($ch, CURLOPT_URL, $url);
   curl_setopt($ch, CURLOPT_POST, 1);

   // Встановлюємо параметр для отримання відповіді від сервера
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

   curl_setopt($ch, CURLOPT_POSTFIELDS, '{
     "grant_type":"client_credentials",
     "client_id":"fb59c3b9647bf2ac5c935d9a032de936",
     "client_secret":"ac1ddb5f2089a8f73b69af835e7e2dc4"
  }');

  // Виконуємо запит
 $response = curl_exec($ch);

 // Перевіряємо наявність помилок
 if(curl_errno($ch)){
     echo 'Помилка curl: ' . curl_error($ch);
     return null;
 }

 // Закриваємо з'єднання
 curl_close($ch);

 // Обробляємо отриману відповідь
 return $response;
}
?>