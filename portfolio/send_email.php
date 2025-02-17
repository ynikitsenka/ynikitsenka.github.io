<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "liza.nickita@gmail.com";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    
    echo "Message sent successfully!";
}
?>
