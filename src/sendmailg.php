<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

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
   $mail->setFrom('victor_195777@yahoo.com', 'Tivacleaners site');
   //Кому отправить свою почту вставишь 
   $mail->addAddress('victor_195777@yahoo.com');
   //Тема письма
   $mail->Subject = 'Lejoy Bot text';


   //Тело письма
   $body = '<h1>Tivacleaners website!</h1>';

   //Пример name="bookUserName"
   $bookUserName = trim(!empty($_POST['bookUserName']));
   if($bookUserName) {
      $body.='<p><strong>User Name:</strong> '.$bookUserName.'</p>';
   }

   // if(trim(!empty($_POST['age']))){
   //    $body.='<p><strong>Age:</strong> '.$_POST['age'].'</p>';
   // }

   // if(trim(!empty($_POST['phone']))){
   //    $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
   // }
   
   // if(trim(!empty($_POST['question']))){
   //    $body.='<p><strong>Message:</strong> '.$_POST['question'].'</p>';
   // }



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