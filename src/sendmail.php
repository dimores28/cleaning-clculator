<?php
    //Import the PHPMailer class into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    //SMTP needs accurate times, and the PHP time zone MUST be set
    //This should be done in your php.ini, but this is how to do it if you don't have access to that
    date_default_timezone_set('Etc/UTC');

    require '../vendor/autoload.php';

    //Create a new PHPMailer instance
    $mail = new PHPMailer();
    //Tell PHPMailer to use SMTP
    $mail->isSMTP();
    //Enable SMTP debugging
    //SMTP::DEBUG_OFF = off (for production use)
    //SMTP::DEBUG_CLIENT = client messages
    //SMTP::DEBUG_SERVER = client and server messages
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    //Set the hostname of the mail server
    $mail->Host = 'mail.example.com';
    //Set the SMTP port number - likely to be 25, 465 or 587
    $mail->Port = 25;
    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;
    //Username to use for SMTP authentication
    $mail->Username = 'yourname@example.com';
    //Password to use for SMTP authentication
    $mail->Password = 'yourpassword';
    //Set who the message is to be sent from
    $mail->setFrom('from@example.com', 'First Last');
    //Set an alternative reply-to address
    $mail->addReplyTo('replyto@example.com', 'First Last');
    //Set who the message is to be sent to
    $mail->addAddress('whoto@example.com', 'John Doe');
    //Set the subject line
    $mail->Subject = 'PHPMailer SMTP test';
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    $mail->msgHTML(file_get_contents('contents.html'), __DIR__);
    //Replace the plain text body with one created manually
    $mail->AltBody = 'This is a plain-text message body';
    //Attach an image file
    $mail->addAttachment('images/phpmailer_mini.png');
	
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('eng', 'PHPmailer/language/');
	

	//Message
	$body = '<h1>BOOK A CLEANING</h1>';
	
	if(trim(!empty($_POST['bookUserName']))){
		$body.='<p><strong>Name:</strong> '.$_POST['bookUserName'].'</p>';
	}
	if(trim(!empty($_POST['bookEmail']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['bookEmail'].'</p>';
	}
	if(trim(!empty($_POST['bookPhone']))){
		$body.='<p><strong>Phone:</strong> '.$_POST['bookPhone'].'</p>';
	}
	
	if(trim(!empty($_POST['bookMessage']))){
		$body.='<p><strong>Message:</strong> '.$_POST['bookMessage'].'</p>';
	}
	
	$mail->Body = $body;
	
	//Send
	if (!$mail->send()) {
		$message = 'Mailer Error';
	} else {
		$message = 'Message sent!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>