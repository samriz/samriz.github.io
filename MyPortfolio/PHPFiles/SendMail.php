<?php
if(!isset($_POST['send']))
{
    echo "error; you need to submit the form.";
}
$name = $_POST['name'];
$visitor_email = $_POST['useremail'];
$message = $_POST['message'];

$email_from = 'srizv82@gmail.com';
$email_subject = "New Email Form Submission.";
$email_body = "You have received a new message from $name.\n".
    "email address: $visitor_email\n".
    "Here is the message:\n $message".

    $to = 'srizv82@gmail.com';
    /*$headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        ini_set("SMTP", "localhost");
        ini_set("smtp_port", "25");*/
    $headers = "From: $email_from \r\n";
    mail($to, $email_subject, $email_body, $headers);

    header("Location: ../PHPFiles/About.php");
    exit();
?>