<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPmailer/src/Exception.php';
require 'PHPmailer/src/PHPMailer.php';
require 'PHPmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
   //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
   $mail->isSMTP(); 
   //Set the hostname of the mail server
   $mail->Host = 'smtp.gmail.com';
   //Set the SMTP port number:
   // - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
   // - 587 for SMTP+STARTTLS
   $mail->Port = 465;
   //Set the encryption mechanism to use:
   // - SMTPS (implicit TLS on port 465) or
   // - STARTTLS (explicit TLS on port 587)
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
   //Whether to use SMTP authentication
   $mail->SMTPAuth = true;
   //Username to use for SMTP authentication - use full email address for gmail
   $mail->Username = 'dimores95@gmail.com';

   //Password to use for SMTP authentication
   $mail->Password = 'tjdsjpgjemfdogqb';


   $mail->CharSet = 'UTF-8';
   // $mail->setLanguage('uk', 'phpmailer/language/');
   $mail->IsHTML(true);

   //От кого письмо свою почту вставишь 
   $mail->setFrom('maxkrasovskyi10@gmail.com', 'Tivacleaners site');
   //Кому отправить свою почту вставишь 
   $mail->addAddress('maxkrasovskyi10@gmail.com');
   //Тема письма
   $mail->Subject = 'Lejoy Bot text';


   //Тело письма
   $body = '<h1>Tivacleaners website!</h1>';

   //Пример name="bookUserName"
   $bookUserName = trim(!empty($_POST['bookUserName']));
   if($bookUserName) {
      $body.='<p><strong>User Name:</strong> '.$bookUserName.'</p>';
   }
   
   
   $bookEmail = trim(!empty($_POST['bookEmail']));
   if($bookEmail){
    $body.='<p><strong>E-mail:</strong> '.$_POST['bookEmail'].'</p>';
   }
   

   $bookPhone = trim(!empty($_POST['bookPhone']))
   if($bookPhone){
      $body.='<p><strong>Phone:</strong> '.$_POST['bookPhone'].'</p>';
   }

   
   $bookMessage = trim(!empty($_POST['bookMessage']))
   if($bookMessage){
       $body.='<p><strong>Message:</strong> '.$_POST['bookMessage'].'</p>';
   }



   $mail->Body = $body;

   //Отправляем
   if (!$mail->send()) {
      $message = 'Error'. $mail->ErrorInfo;
   } else {
      $message = 'Data sent!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);

} catch (Exception $e) {
 echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>