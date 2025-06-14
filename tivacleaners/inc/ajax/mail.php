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
        $emails = ['sales@tivacleaners.com', 'komal.komsoft@gmail.com'];
    }
    
    return $emails;
}

// Кому відправляємо
$to = get_notification_emails();

// Тема листа
$subject = 'Tivacleaners website!';

// Тіло листа
$body = '<h1>Tivacleaners website!</h1>';
$body .= '<h2>The client wants to be called back!</h2>';

// Приклад name="popupUserName"
$popupUserName = !empty($_POST['popupUserName']) ? sanitize_text_field($_POST['popupUserName']) : '';
if($popupUserName) {
    $body .= '<p><strong>User Name:</strong> ' . esc_html($popupUserName) . '</p>';
}

$popupEmail = !empty($_POST['popupEmail']) ? sanitize_email($_POST['popupEmail']) : '';
if($popupEmail){
    $body .= '<p><strong>E-mail:</strong> ' . esc_html($popupEmail) . '</p>';
}

$popupPhone = !empty($_POST['popupPhone']) ? sanitize_text_field($_POST['popupPhone']) : '';
if($popupPhone){
    $body .= '<p><strong>Phone:</strong> ' . esc_html($popupPhone) . '</p>';
}

$popupMessage = !empty($_POST['popupMessage']) ? sanitize_textarea_field($_POST['popupMessage']) : '';
if($popupMessage){
    $body .= '<p><strong>Message:</strong> ' . esc_html($popupMessage) . '</p>';
}

// Відправляємо лист
$sent_message = wp_mail($to, $subject, $body);

$response = array(
    'success' => $sent_message,
    'message' => $sent_message ? 'Data sent!' : 'Error'
);

// Повертаємо JSON відповідь
wp_send_json($response);
?>