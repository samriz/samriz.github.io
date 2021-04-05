<?php
    $to = 'srizv82@gmail.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        ini_set("SMTP", "localhost");
        ini_set("smtp_port", "25");
    mail($to, $subject, $message, $headers);
?>